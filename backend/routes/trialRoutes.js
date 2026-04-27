const express = require("express");
const db = require("../db");

const router = express.Router();


// CREER DEMANDE COURS ESSAI
router.post("/", (req, res) => {
  const {
    announcement_id,
    student_id,
    teacher_id,
    requested_day,
    requested_start_time,
    requested_end_time
  } = req.body;

  if (!announcement_id || !student_id || !teacher_id) {
    return res.status(400).json({ message: "Champs obligatoires manquants" });
  }

  const sql = `
    INSERT INTO trial_requests
    (announcement_id, student_id, teacher_id, requested_day, requested_start_time, requested_end_time)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      announcement_id,
      student_id,
      teacher_id,
      requested_day || null,
      requested_start_time || null,
      requested_end_time || null
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erreur création demande" });
      }

      res.status(201).json({
        message: "Demande envoyée",
        id: result.insertId
      });
    }
  );
});


// DEMANDES D’UN PROF
router.get("/teacher/:teacherId", (req, res) => {
  const { teacherId } = req.params;

  const sql = `
    SELECT tr.*, u.nom, u.prenom, a.title
    FROM trial_requests tr
    JOIN users u ON tr.student_id = u.id
    JOIN announcements a ON tr.announcement_id = a.id
    WHERE tr.teacher_id = ?
    ORDER BY tr.created_at DESC
  `;

  db.query(sql, [teacherId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur chargement demandes" });
    }

    res.json(results);
  });
});


// DEMANDES D’UN ELEVE
router.get("/student/:studentId", (req, res) => {
  const { studentId } = req.params;

  const sql = `
    SELECT tr.*, a.title
    FROM trial_requests tr
    JOIN announcements a ON tr.announcement_id = a.id
    WHERE tr.student_id = ?
    ORDER BY tr.created_at DESC
  `;

  db.query(sql, [studentId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: "Erreur chargement demandes élève" });
    }

    res.json(results);
  });
});


// PROF ACCEPTE / REFUSE / REPORTE
router.put("/status/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const sql = "UPDATE trial_requests SET status = ? WHERE id = ?";

  db.query(sql, [status, id], (err) => {
    if (err) {
      return res.status(500).json({ message: "Erreur update statut" });
    }

    res.json({ message: "Statut mis à jour" });
  });
});

module.exports = router;