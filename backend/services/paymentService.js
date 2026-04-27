const paymentRepository = require("../repositories/paymentRepository");

exports.createPayment = async ({
  student_id,
  pack_id,
  amount,
  payment_method,
  payment_date
}) => {
  if (!student_id || !pack_id || !amount) {
    throw { status: 400, message: "Champs paiement obligatoires manquants" };
  }

  const result = await paymentRepository.createPayment({
    student_id,
    pack_id,
    amount,
    payment_method: payment_method || null,
    payment_date: payment_date || null
  });

  return {
    message: "Paiement enregistré avec succès",
    paymentId: result.insertId
  };
};

exports.getPaymentsByStudent = async (studentId) => {
  if (!studentId) {
    throw { status: 400, message: "ID élève manquant" };
  }
  return await paymentRepository.getPaymentsByStudent(studentId);
};

// Admin : tous les paiements
exports.getAllPayments = async () => {
  return await paymentRepository.getAllPayments();
};