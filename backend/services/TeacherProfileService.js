const teacherProfileRepository = require("../repositories/TeacherProfileRepository");

exports.getTeacherProfile = async (userId) => {
  if (!userId) {
    throw { status: 400, message: "userId manquant" };
  }

  const profile = await teacherProfileRepository.getTeacherProfileByUserId(userId);

  if (!profile) {
    return {};
  }

  let parsedLevels = [];

  try {
    parsedLevels = profile.teaching_levels
      ? JSON.parse(profile.teaching_levels)
      : [];
  } catch (error) {
    parsedLevels = [];
  }

  return {
    ...profile,
    teaching_levels: Array.isArray(parsedLevels) ? parsedLevels : [],
  };
};

exports.saveTeacherProfile = async ({
  user_id,
  city,
  teaching_levels,
  diplomas,
  experience,
}) => {
  if (!user_id) {
    throw { status: 400, message: "user_id obligatoire" };
  }

  if (!city || !diplomas) {
    throw {
      status: 400,
      message: "La ville et les diplômes sont obligatoires",
    };
  }

  if (!Array.isArray(teaching_levels) || teaching_levels.length === 0) {
    throw {
      status: 400,
      message: "Veuillez sélectionner au moins un niveau d'enseignement",
    };
  }

  const existing = await teacherProfileRepository.getTeacherProfileByUserId(
    user_id
  );

  const payload = {
    user_id,
    city: city.trim(),
    teaching_levels,
    diplomas: diplomas.trim(),
    experience: experience ? experience.trim() : "",
  };

  if (existing) {
    await teacherProfileRepository.updateTeacherProfile(payload);
    return { message: "Profil professeur mis à jour avec succès" };
  }

  const result = await teacherProfileRepository.createTeacherProfile(payload);

  return {
    message: "Profil professeur enregistré avec succès",
    id: result.insertId,
  };
};

// Upload photo
exports.saveTeacherPhoto = async (userId, photoUrl) => {
  if (!userId || !photoUrl) {
    throw { status: 400, message: "Paramètres manquants" };
  }

  const existing = await teacherProfileRepository.getTeacherProfileByUserId(
    userId
  );

  if (!existing) {
    throw {
      status: 404,
      message:
        "Le profil professeur doit être créé avant d'ajouter une photo",
    };
  }

  await teacherProfileRepository.updateTeacherPhoto(userId, photoUrl);

  return {
    message: "Photo enregistrée",
    photo_url: photoUrl,
  };
};