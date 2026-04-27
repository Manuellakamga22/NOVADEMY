const express = require("express");
const db = require("../db");

const router = express.Router();

// CREATE announcement
router.post("/", (req, res) => {
  const {
    teacher_id,
    subject,
    level,
    city,
    mode,
    title,
    description,
    methodology,
    student_rate,
    teacher_rate,
  } = req.body;

  if (
    !teacher_id ||
    !subject ||
    !level ||
    !city ||
    !mode ||
    !title ||
    !description ||
    !methodology ||
    !student_rate ||
    !teacher_rate
  ) {
    return res.status(400).json({ message: "Tous les champs sont obligatoires." });
  }

  const checkSql = `
    SELECT id
    FROM announcements
    WHERE teacher_id = ? AND subject = ?
    LIMIT 1
  `;

  db.query(checkSql, [teacher_id, subject], (checkErr, checkResults) => {
    if (checkErr) {
      return res.status(500).json({ message: "Erreur vérification annonce" });
    }

    if (checkResults.length > 0) {
      return res.status(400).json({
        message: "Vous avez déjà créé une annonce pour cette matière.",
      });
    }

    const sql = `
      INSERT INTO announcements
      (
        teacher_id,
        subject,
        level,
        city,
        mode,
        title,
        description,
        methodology,
        student_rate,
        teacher_rate,
        status
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')
    `;

    db.query(
      sql,
      [
        teacher_id,
        subject,
        level,
        city,
        mode,
        title,
        description,
        methodology,
        student_rate,
        teacher_rate,
      ],
      (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Erreur création annonce" });
        }

        res.status(201).json({
          message: "Annonce créée avec succès",
          id: result.insertId,
        });
      }
    );
  });
});

// SEARCH active announcements
router.get("/", (req, res) => {
  const { subject, city, mode } = req.query;

  let sql = `
    SELECT
      a.*,
      u.nom,
      u.prenom
    FROM announcements a
    INNER JOIN users u ON a.teacher_id = u.id
    WHERE a.status = 'active'
  `;

  const params = [];

  if (subject) {
    sql += " AND a.subject = ?";
    params.push(subject);
  }

  if (city) {
    sql += " AND a.city = ?";
    params.push(city);
  }

  if (mode) {
    sql += " AND a.mode = ?";
    params.push(mode);
  }

  sql += " ORDER BY a.created_at DESC";

  db.query(sql, params, (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur chargement annonces" });
    }

    res.json(results);
  });
});

// GET one announcement
router.get("/:id", (req, res) => {
  const sql = `
    SELECT a.*, u.nom, u.prenom, u.email
    FROM announcements a
    INNER JOIN users u ON a.teacher_id = u.id
    WHERE a.id = ?
    LIMIT 1
  `;

  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur chargement annonce" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Annonce introuvable" });
    }

    res.json(results[0]);
  });
});

// GET teacher announcements
router.get("/teacher/:id", (req, res) => {
  const sql = `
    SELECT *
    FROM announcements
    WHERE teacher_id = ?
    ORDER BY created_at DESC
  `;

  db.query(sql, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur chargement annonces prof" });
    }

    res.json(results);
  });
});

module.exports = router;