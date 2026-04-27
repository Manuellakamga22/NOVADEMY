const express = require("express");
const db = require("../db");

const router = express.Router();

// GET messages between two users
router.get("/:senderId/:receiverId", (req, res) => {
  const { senderId, receiverId } = req.params;

  const sql = `
    SELECT *
    FROM messages
    WHERE (sender_id = ? AND receiver_id = ?)
       OR (sender_id = ? AND receiver_id = ?)
    ORDER BY created_at ASC
  `;

  db.query(
    sql,
    [senderId, receiverId, receiverId, senderId],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Erreur chargement messages" });
      }

      res.json(results);
    }
  );
});

// POST new message
router.post("/", (req, res) => {
  const { conversation_id, sender_id, receiver_id, content } = req.body;

  if (!conversation_id || !sender_id || !receiver_id || !content) {
    return res.status(400).json({ message: "Champs obligatoires manquants" });
  }

  const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i;
  const phoneRegex = /(\+?\d[\d\s.-]{7,}\d)/;
  const blocked = emailRegex.test(content) || phoneRegex.test(content);

  if (blocked) {
    return res.status(400).json({
      message:
        "Les coordonnées personnelles ne doivent pas être échangées dans le chat.",
    });
  }

  const sql = `
    INSERT INTO messages
    (conversation_id, sender_id, receiver_id, content, blocked_content_detected)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [conversation_id, sender_id, receiver_id, content, 0],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Erreur envoi message",
          error: err,
        });
      }

      res.status(201).json({
        message: "Message envoyé",
        id: result.insertId,
      });
    }
  );
});

module.exports = router;