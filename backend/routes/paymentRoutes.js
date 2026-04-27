const express = require("express");
const db = require("../db");

const router = express.Router();

// CREATE PAYMENT
router.post("/", (req, res) => {
  const { student_id, pack_id, amount, payment_method, payment_date } = req.body;

  if (!student_id || !pack_id || !amount) {
    return res.status(400).json({ message: "Champs paiement obligatoires manquants" });
  }

  const sql = `
    INSERT INTO payments (student_id, pack_id, amount, payment_method, payment_date)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [student_id, pack_id, amount, payment_method || null, payment_date || null],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erreur enregistrement paiement" });
      }

      res.status(201).json({
        message: "Paiement enregistré avec succès",
        paymentId: result.insertId,
      });
    }
  );
});

// GET PAYMENTS BY STUDENT
router.get("/student/:id", (req, res) => {
  const studentId = req.params.id;

  db.query(
    "SELECT * FROM payments WHERE student_id = ?",
    [studentId],
    (err, results) => {
      if (err) {
        return res.status(500).json({ message: "Erreur récupération paiements" });
      }

      res.json(results);
    }
  );
});

module.exports = router;