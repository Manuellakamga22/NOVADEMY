const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res) => {
  db.query(
    "SELECT id, nom, prenom, email, role FROM users WHERE role = 'student'",
    (err, results) => {
      if (err) return res.status(500).json({ message: "Erreur serveur." });
      res.json(results);
    }
  );
});

module.exports = router;