const db = require("../db");

exports.getTeacherProfileByUserId = async (userId) => {
  const [rows] = await db.query(
    `SELECT * FROM teacher_profiles WHERE user_id = ? LIMIT 1`,
    [userId]
  );
  return rows[0] || null;
};

exports.createTeacherProfile = async ({
  user_id,
  city,
  teaching_levels,
  diplomas,
  experience,
}) => {
  const [result] = await db.query(
    `INSERT INTO teacher_profiles
     (user_id, city, teaching_levels, diplomas, experience)
     VALUES (?, ?, ?, ?, ?)`,
    [
      user_id,
      city,
      JSON.stringify(teaching_levels),
      diplomas,
      experience,
    ]
  );

  return result;
};

exports.updateTeacherProfile = async ({
  user_id,
  city,
  teaching_levels,
  diplomas,
  experience,
}) => {
  const [result] = await db.query(
    `UPDATE teacher_profiles
     SET city = ?, teaching_levels = ?, diplomas = ?, experience = ?
     WHERE user_id = ?`,
    [
      city,
      JSON.stringify(teaching_levels),
      diplomas,
      experience,
      user_id,
    ]
  );

  return result;
};

exports.updateTeacherPhoto = async (userId, photoUrl) => {
  const [result] = await db.query(
    `UPDATE teacher_profiles
     SET photo_url = ?
     WHERE user_id = ?`,
    [photoUrl, userId]
  );

  return result;
};