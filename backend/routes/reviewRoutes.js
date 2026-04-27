const express = require("express");
const db = require("../db");

const router = express.Router();

// CREATE REVIEW
router.post("/", (req, res) => {
  const { student_id, teacher_id, course_id, rating, comment } = req.body;

  if (!student_id || !teacher_id || !rating) {
    return res.status(400).json({ message: "Champs avis obligatoires manquants" });
  }

  if (rating < 1 || rating > 5) {
    return res.status(400).json({ message: "La note doit être entre 1 et 5" });
  }

  const sql = `
    INSERT INTO reviews (student_id, teacher_id, course_id, rating, comment)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [student_id, teacher_id, course_id || null, rating, comment || null],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erreur enregistrement avis" });
      }

      res.status(201).json({
        message: "Avis enregistré avec succès",
        reviewId: result.insertId,
      });
    }
  );
});

// GET REVIEWS BY TEACHER
router.get("/teacher/:id", (req, res) => {
  const teacherId = req.params.id;

  db.query(
    "SELECT * FROM reviews WHERE teacher_id = ?",
    [teacherId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Erreur récupération avis" });
      }

      res.json(results);
    }
  );
});

module.exports = router;