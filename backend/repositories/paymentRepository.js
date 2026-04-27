const db = require("../db");

exports.createPayment = async ({
  student_id,
  pack_id,
  amount,
  payment_method,
  payment_date
}) => {
  const [result] = await db.query(
    `INSERT INTO payments (student_id, pack_id, amount, payment_method, payment_date)
     VALUES (?, ?, ?, ?, ?)`,
    [student_id, pack_id, amount, payment_method, payment_date]
  );
  return result;
};

exports.getPaymentsByStudent = async (studentId) => {
  const [rows] = await db.query(
    "SELECT * FROM payments WHERE student_id = ?",
    [studentId]
  );
  return rows;
};

// Admin : tous les paiements avec noms élève et pack
exports.getAllPayments = async () => {
  const [rows] = await db.query(
    `SELECT p.*,
       u.prenom AS student_prenom, u.nom AS student_nom,
       fp.type AS formula_type,
       fp.teacher_id
     FROM payments p
     LEFT JOIN users u ON u.id = p.student_id
     LEFT JOIN formula_proposals fp ON fp.id = p.pack_id
     ORDER BY p.payment_date DESC`
  );
  return rows;
};