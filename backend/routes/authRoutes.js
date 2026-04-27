const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const db = require("../db");

const router = express.Router();

const isStrongPassword = (password) => {
  const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
};

router.post("/register", async (req, res) => {
  const { nom, prenom, email, password, role } = req.body;

  if (!nom || !prenom || !email || !password || !role) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires." });
  }

  if (!isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Le mot de passe doit contenir au moins 8 caractères, 1 majuscule et 1 chiffre.",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "INSERT INTO users (nom, prenom, email, password, role) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [nom, prenom, email, hashedPassword, role], (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Email déjà utilisé ou erreur SQL." });
      }

      res.status(201).json({
        message: "Utilisateur créé avec succès",
        user: {
          id: result.insertId,
          nom,
          prenom,
          email,
          role,
        },
      });
    });
  } catch {
    res.status(500).json({ message: "Erreur serveur." });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });

    if (results.length === 0) {
      return res.status(404).json({ message: "Utilisateur introuvable." });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Mot de passe incorrect." });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Connexion réussie",
      token,
      user: {
        id: user.id,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        role: user.role,
      },
    });
  });
});

router.post("/forgot-password", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email obligatoire." });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur." });

    if (results.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur avec cet email." });
    }

    const user = results[0];
    const resetToken = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
    const formattedExpiresAt = expiresAt.toISOString().slice(0, 19).replace("T", " ");

    db.query(
      "INSERT INTO password_resets (user_id, token, expires_at) VALUES (?, ?, ?)",
      [user.id, resetToken, formattedExpiresAt],
      (insertErr) => {
        if (insertErr) {
          return res.status(500).json({ message: "Erreur lors de la création du token." });
        }

        res.json({
          message: "Lien de réinitialisation généré.",
          resetToken: resetToken,
        });
      }
    );
  });
});

router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: "Token et nouveau mot de passe obligatoires." });
  }

  if (!isStrongPassword(newPassword)) {
    return res.status(400).json({
      message:
        "Le nouveau mot de passe doit contenir au moins 8 caractères, 1 majuscule et 1 chiffre.",
    });
  }

  db.query(
    "SELECT * FROM password_resets WHERE token = ? ORDER BY created_at DESC LIMIT 1",
    [token],
    async (err, results) => {
      if (err) return res.status(500).json({ message: "Erreur serveur." });

      if (results.length === 0) {
        return res.status(404).json({ message: "Token invalide." });
      }

      const resetRow = results[0];
      const now = new Date();
      const expiresAt = new Date(resetRow.expires_at);

      if (now > expiresAt) {
        return res.status(400).json({ message: "Token expiré." });
      }

      try {
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        db.query(
          "UPDATE users SET password = ? WHERE id = ?",
          [hashedPassword, resetRow.user_id],
          (updateErr) => {
            if (updateErr) {
              return res.status(500).json({
                message: "Erreur lors de la mise à jour du mot de passe.",
              });
            }

            db.query("DELETE FROM password_resets WHERE user_id = ?", [resetRow.user_id], () => {
              res.json({ message: "Mot de passe réinitialisé avec succès." });
            });
          }
        );
      } catch {
        res.status(500).json({ message: "Erreur serveur." });
      }
    }
  );
});

module.exports = router;