const packService = require("../services/packService");

exports.getCatalog = async (req, res) => {
  try {
    const result = await packService.getCatalog();
    return res.json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Erreur serveur"
    });
  }
};

exports.proposeFormula = async (req, res) => {
  try {
    const result = await packService.proposeFormula(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Erreur serveur"
    });
  }
};

exports.getStudentProposals = async (req, res) => {
  try {
    const result = await packService.getStudentProposals(req.params.studentId);
    return res.json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Erreur serveur"
    });
  }
};

exports.acceptFormula = async (req, res) => {
  try {
    const result = await packService.acceptFormula(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Erreur serveur"
    });
  }
};

exports.getAcceptedFormula = async (req, res) => {
  try {
    const result = await packService.getAcceptedFormula(req.params.studentId);
    return res.json(result);
  } catch (error) {
    return res.status(error.status || 500).json({
      message: error.message || "Erreur serveur"
    });
  }
};