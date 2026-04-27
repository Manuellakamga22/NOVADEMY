const express = require("express");
const db = require("../db");

const router = express.Router();

// GET profil élève par user_id
router.get("/:userId", (req, res) => {
  const { userId } = req.params;

  const sql = "SELECT * FROM student_profiles WHERE user_id = ? LIMIT 1";

  db.query(sql, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur chargement profil élève" });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "Profil élève introuvable" });
    }

    res.json(results[0]);
  });
});

// CREATE ou UPDATE profil élève
router.post("/", (req, res) => {
  const {
    user_id,
    subject_needed,
    level_needed,
    city,
    preferred_mode,
    difficulties,
    objectives,
    frequency,
    availability_notes,
  } = req.body;

  if (!user_id || !subject_needed || !level_needed || !preferred_mode) {
    return res.status(400).json({ message: "Champs obligatoires manquants" });
  }

  const checkSql = "SELECT id FROM student_profiles WHERE user_id = ? LIMIT 1";

  db.query(checkSql, [user_id], (checkErr, checkResults) => {
    if (checkErr) {
      return res.status(500).json({ message: "Erreur vérification profil élève" });
    }

    if (checkResults.length > 0) {
      const updateSql = `
        UPDATE student_profiles
        SET
          subject_needed = ?,
          level_needed = ?,
          city = ?,
          preferred_mode = ?,
          difficulties = ?,
          objectives = ?,
          frequency = ?,
          availability_notes = ?
        WHERE user_id = ?
      `;

      db.query(
        updateSql,
        [
          subject_needed,
          level_needed,
          city || null,
          preferred_mode,
          difficulties || null,
          objectives || null,
          frequency || null,
          availability_notes || null,
          user_id,
        ],
        (err) => {
          if (err) {
            return res.status(500).json({ message: "Erreur mise à jour profil élève" });
          }

          res.json({ message: "Profil élève mis à jour avec succès" });
        }
      );
    } else {
      const insertSql = `
        INSERT INTO student_profiles
        (
          user_id,
          subject_needed,
          level_needed,
          city,
          preferred_mode,
          difficulties,
          objectives,
          frequency,
          availability_notes
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(
        insertSql,
        [
          user_id,
          subject_needed,
          level_needed,
          city || null,
          preferred_mode,
          difficulties || null,
          objectives || null,
          frequency || null,
          availability_notes || null,
        ],
        (err, result) => {
          if (err) {
            return res.status(500).json({ message: "Erreur création profil élève" });
          }

          res.status(201).json({
            message: "Profil élève enregistré avec succès",
            id: result.insertId,
          });
        }
      );
    }
  });
});

module.exports = router;