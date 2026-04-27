const db = require("../db");

exports.getCatalog = async () => {
  const [rows] = await db.query("SELECT * FROM formulas_catalog");
  return rows;
};

exports.proposeFormula = async ({ trial_request_id, teacher_id, student_id, formula_id }) => {
  const [result] = await db.query(
    `
    INSERT INTO formula_proposals 
    (trial_request_id, teacher_id, student_id, type, duration_months, hours_per_week, total_hours, final_price, engagement_required, engagement_months, status)
    SELECT ?, ?, ?, type, duration_months, hours_per_week, total_hours, price, engagement_required, engagement_months, 'proposee'
    FROM formulas_catalog WHERE id=?
    `,
    [trial_request_id, teacher_id, student_id, formula_id]
  );

  return result;
};

exports.getStudentProposals = async (studentId) => {
  const [rows] = await db.query(
    "SELECT * FROM formula_proposals WHERE student_id=? AND status='proposee'",
    [studentId]
  );

  return rows;
};

exports.acceptFormula = async (id) => {
  const [result] = await db.query(
    "UPDATE formula_proposals SET status='acceptee' WHERE id=?",
    [id]
  );

  return result;
};

exports.getAcceptedFormula = async (studentId) => {
  const [rows] = await db.query(
    "SELECT * FROM formula_proposals WHERE student_id=? AND status='acceptee' LIMIT 1",
    [studentId]
  );

  return rows[0] || null;
};