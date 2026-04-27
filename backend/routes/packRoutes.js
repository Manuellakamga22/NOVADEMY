const express = require("express");
const db = require("../db");

const router = express.Router();


// 🔵 récupérer toutes les formules existantes (catalogue)
router.get("/catalog", (req, res) => {
  db.query("SELECT * FROM formulas_catalog", (err, results) => {
    if (err) return res.status(500).json({ message: "Erreur serveur" });
    res.json(results);
  });
});


// 🔵 proposer une formule après essai (prof)
router.post("/propose", (req, res) => {
  const {
    trial_request_id,
    teacher_id,
    student_id,
    formula_id
  } = req.body;

  db.query(
    `INSERT INTO formula_proposals 
    (trial_request_id, teacher_id, student_id, type, duration_months, hours_per_week, total_hours, final_price, engagement_required, engagement_months, status)
    SELECT ?, ?, ?, type, duration_months, hours_per_week, total_hours, price, engagement_required, engagement_months, 'proposee'
    FROM formulas_catalog WHERE id=?`,
    [trial_request_id, teacher_id, student_id, formula_id],
    (err) => {
      if (err) return res.status(500).json({ message: "Erreur insertion" });
      res.json({ message: "Formule proposée" });
    }
  );
});


// 🔵 voir les formules proposées à l’élève
router.get("/student/:studentId", (req, res) => {
  db.query(
    "SELECT * FROM formula_proposals WHERE student_id=? AND status='proposee'",
    [req.params.studentId],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Erreur serveur" });
      res.json(results);
    }
  );
});


// 🔵 accepter formule
router.post("/accept/:id", (req, res) => {
  db.query(
    "UPDATE formula_proposals SET status='acceptee' WHERE id=?",
    [req.params.id],
    () => res.json({ message: "Formule acceptée" })
  );
});


// 🔵 formule acceptée pour paiement
router.get("/accepted/:studentId", (req, res) => {
  db.query(
    "SELECT * FROM formula_proposals WHERE student_id=? AND status='acceptee' LIMIT 1",
    [req.params.studentId],
    (err, results) => {
      res.json(results[0]);
    }
  );
});

module.exports = router;