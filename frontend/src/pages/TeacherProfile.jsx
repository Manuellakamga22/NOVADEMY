import React, { useMemo, useState } from "react";

const S = {
  wrap: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "#F9FAFB",
  },

  logo: { fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em" },
  logoEm: { color: "#2563EB" },

  dash: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    minHeight: "100vh",
  },

  sidebar: {
    background: "#fff",
    borderRight: "1px solid #E5E7EB",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
  },

  sbBrand: {
    padding: "26px 22px",
    borderBottom: "1px solid #E5E7EB",
  },

  sbRole: {
    display: "inline-block",
    marginTop: 10,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    padding: "5px 12px",
    borderRadius: 20,
    background: "#EFF6FF",
    color: "#2563EB",
  },

  sbNav: { padding: 14, flex: 1 },

  sbLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "#9CA3AF",
    padding: "0 10px",
    margin: "18px 0 8px",
    display: "block",
  },

  sbLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 15px",
    borderRadius: 10,
    fontSize: 17,
    fontWeight: 500,
    color: "#4B5563",
    textDecoration: "none",
    marginBottom: 4,
  },

  sbLinkActive: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 15px",
    borderRadius: 10,
    fontSize: 17,
    fontWeight: 700,
    color: "#2563EB",
    background: "#EFF6FF",
    textDecoration: "none",
    marginBottom: 4,
  },

  sbBadge: {
    marginLeft: "auto",
    background: "#2563EB",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    padding: "3px 9px",
    borderRadius: 10,
  },

  sbUser: {
    padding: "18px 22px",
    borderTop: "1px solid #E5E7EB",
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  av: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  },

  main: {
    padding: "30px 30px",
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
    marginBottom: 22,
    flexWrap: "wrap",
  },

  smallTitle: {
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
    margin: 0,
  },

  smallSub: {
    fontSize: 17,
    color: "#6B7280",
    marginTop: 8,
    lineHeight: 1.7,
    maxWidth: "940px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 16,
    marginBottom: 22,
  },

  statAccent: {
    background: "#2563EB",
    border: "1px solid #2563EB",
    borderRadius: 16,
    padding: "22px 24px",
  },

  stat: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: "22px 24px",
  },

  statLabelW: {
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(255,255,255,.78)",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 10,
  },

  statLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 10,
  },

  statValW: { fontSize: 30, fontWeight: 800, color: "#fff" },
  statVal: { fontSize: 30, fontWeight: 800, color: "#111827" },

  grid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    marginBottom: 18,
  },

  card: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: "22px 24px",
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 14,
    color: "#111827",
  },

  cardDesc: {
    fontSize: 16,
    color: "#6B7280",
    lineHeight: 1.7,
    marginBottom: 16,
  },

  noteBox: {
    background: "#EFF6FF",
    border: "1px solid #BFDBFE",
    color: "#1D4ED8",
    borderRadius: 12,
    padding: "15px 16px",
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 16,
  },

  photoRow: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    flexWrap: "wrap",
  },

  photoCircle: {
    width: 130,
    height: 130,
    borderRadius: "50%",
    background: "#F3F4F6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    border: "2px solid #E5E7EB",
    flexShrink: 0,
  },

  photoImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  photoHint: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 8,
    lineHeight: 1.6,
    maxWidth: "440px",
  },

  progressWrap: {
    marginTop: 12,
  },

  progressBar: {
    width: "100%",
    height: 12,
    background: "#E5E7EB",
    borderRadius: 999,
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #2563EB 0%, #60A5FA 100%)",
    borderRadius: 999,
  },

  progressText: {
    marginTop: 10,
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 1.7,
  },

  pillsRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 12,
  },

  pill: {
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 11px",
    borderRadius: 999,
    display: "inline-block",
  },

  profileGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },

  profileItem: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 14,
  },

  profileLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 6,
  },

  profileValue: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111827",
    lineHeight: 1.6,
  },

  fieldGrid2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
  },

  field: {
    marginBottom: 16,
  },

  label: {
    display: "block",
    fontSize: 16,
    fontWeight: 700,
    color: "#374151",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    padding: "13px 14px",
    borderRadius: 10,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 16,
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
  },

  textarea: {
    width: "100%",
    minHeight: 120,
    padding: "13px 14px",
    borderRadius: 10,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 16,
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
    resize: "vertical",
  },

  btnRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 8,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 700,
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  },

  btnPrimary: {
    background: "#2563EB",
    color: "#fff",
  },

  btnGhost: {
    background: "#F3F4F6",
    color: "#4B5563",
  },

  helperText: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 1.7,
    marginTop: 8,
  },
};

function TeacherProfile() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [form, setForm] = useState({
    city: "",
    preferred_mode: "",
    headline: "",
    presentation: "",
    diplomas: "",
    experience: "",
    methodology: "",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  const completionCount = [
    form.city,
    form.preferred_mode,
    form.headline,
    form.presentation,
    form.diplomas,
    form.experience,
    form.methodology,
    preview,
  ].filter(Boolean).length;

  const completionPercent = Math.round((completionCount / 8) * 100);

  const profileLevel = useMemo(() => {
    if (completionPercent >= 90) {
      return { label: "Expert", commission: "3 %", colorBg: "#FFF7ED", colorText: "#EA580C" };
    }
    if (completionPercent >= 70) {
      return { label: "Avancé", commission: "7 %", colorBg: "#ECFDF5", colorText: "#059669" };
    }
    if (completionPercent >= 40) {
      return { label: "Intermédiaire", commission: "12 %", colorBg: "#EFF6FF", colorText: "#2563EB" };
    }
    return { label: "Débutant", commission: "15 %", colorBg: "#F3F4F6", colorText: "#6B7280" };
  }, [completionPercent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.id) {
      alert("Vous devez être connecté.");
      return;
    }

    if (
      !form.city ||
      !form.preferred_mode ||
      !form.headline ||
      !form.presentation ||
      !form.diplomas ||
      !form.experience ||
      !form.methodology
    ) {
      alert("Veuillez compléter tous les champs du profil professeur.");
      return;
    }

    alert("Profil professeur enregistré");
    window.location.href = "/teacher/dashboard";
  };

  return (
    <div style={S.wrap}>
      <div style={S.dash}>
        <aside style={S.sidebar}>
          <div style={S.sbBrand}>
            <div style={{ ...S.logo, fontSize: 20 }}>
              NOVA<span style={S.logoEm}>DEMY</span>
            </div>
            <span style={S.sbRole}>Professeur</span>
          </div>

          <nav style={S.sbNav}>
            <span style={S.sbLabel}>Principal</span>
            <a style={S.sbLink} href="/teacher/dashboard">
              🏠 Tableau de bord
            </a>
            <a style={S.sbLinkActive} href="/teacher/profile">
              👤 Mon profil
            </a>
            <a style={S.sbLink} href="/teacher/announcements">
              📢 Annonces
            </a>

            <span style={S.sbLabel}>Organisation</span>
            <a style={S.sbLink} href="/teacher/planning">
              📅 Planning
            </a>
            <a style={S.sbLink} href="/teacher/requests">
              📬 Demandes <span style={S.sbBadge}>0</span>
            </a>
            <a style={S.sbLink} href="/chat">
              💬 Messages <span style={S.sbBadge}>0</span>
            </a>

            <span style={S.sbLabel}>Compte</span>
            <a style={S.sbLink} href="/teacher/revenue">
              💳 Revenus
            </a>
          </nav>

          <div style={S.sbUser}>
            <div style={S.av}>P</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>
                {user ? `${user.prenom} ${user.nom}` : "Prénom Nom"}
              </div>
              <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 2 }}>
                Professeur
              </div>
            </div>
          </div>
        </aside>

        <main style={S.main}>
          <div style={S.topBar}>
            <div>
              <p style={S.smallTitle}>Mon profil professeur</p>
              
            </div>
          </div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Profil complété</div>
              <div style={S.statValW}>{completionPercent}%</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Niveau profil</div>
              <div style={S.statVal}>{profileLevel.label}</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Commission</div>
              <div style={S.statVal}>{profileLevel.commission}</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Annonces</div>
              <div style={S.statVal}>0</div>
            </div>
          </div>

          <div style={S.grid2}>
            <div style={S.card}>
              <div style={S.cardTitle}>Photo et niveau de profil</div>

              <div style={S.photoRow}>
                <div style={S.photoCircle}>
                  {preview ? (
                    <img src={preview} alt="photo profil" style={S.photoImg} />
                  ) : (
                    <span style={{ color: "#9CA3AF", fontSize: 16 }}>Photo</span>
                  )}
                </div>

                <div>
                  <input type="file" onChange={handlePhoto} />
                  <p style={S.photoHint}>
                    Ajoutez une photo pour rendre votre profil plus professionnel et
                    plus rassurant pour les élèves.
                  </p>
                </div>
              </div>

              <div style={S.progressWrap}>
                <div style={S.progressBar}>
                  <div
                    style={{
                      ...S.progressFill,
                      width: `${completionPercent}%`,
                    }}
                  />
                </div>
                <div style={S.progressText}>
                  Votre profil est complété à <strong>{completionPercent}%</strong>.
                </div>
              </div>

              <div style={S.pillsRow}>
                <span
                  style={{
                    ...S.pill,
                    background: profileLevel.colorBg,
                    color: profileLevel.colorText,
                  }}
                >
                  Niveau : {profileLevel.label}
                </span>

                <span
                  style={{
                    ...S.pill,
                    background: "#F3F4F6",
                    color: "#4B5563",
                  }}
                >
                  Commission : {profileLevel.commission}
                </span>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>Résumé du profil</div>

              <div style={S.profileGrid}>
                <div style={S.profileItem}>
                  <div style={S.profileLabel}>Ville</div>
                  <div style={S.profileValue}>{form.city || "—"}</div>
                </div>

                <div style={S.profileItem}>
                  <div style={S.profileLabel}>Mode préféré</div>
                  <div style={S.profileValue}>{form.preferred_mode || "—"}</div>
                </div>

                <div style={S.profileItem}>
                  <div style={S.profileLabel}>Présentation</div>
                  <div style={S.profileValue}>{form.headline || "—"}</div>
                </div>

                <div style={S.profileItem}>
                  <div style={S.profileLabel}>Méthodologie</div>
                  <div style={S.profileValue}>
                    {form.methodology ? "Renseignée" : "—"}
                  </div>
                </div>
              </div>

              <p style={S.helperText}>
                Plus votre profil est complet, plus votre niveau progresse et plus
                votre commission devient avantageuse.
              </p>
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Fiche professeur</div>

            
            <form onSubmit={handleSubmit}>
              <div style={S.fieldGrid2}>
                <div style={S.field}>
                  <label style={S.label}>Ville</label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Ex : Paris"
                    style={S.input}
                  />
                </div>

                <div style={S.field}>
                  <label style={S.label}>Mode préféré</label>
                  <select
                    name="preferred_mode"
                    value={form.preferred_mode}
                    onChange={handleChange}
                    style={S.input}
                  >
                    <option value="">Choisir un mode</option>
                    <option value="presentiel">Présentiel</option>
                    <option value="visio">Visio</option>
                    <option value="hybride">Hybride</option>
                  </select>
                </div>
              </div>

              <div style={S.field}>
                <label style={S.label}>Présentation courte</label>
                <input
                  name="headline"
                  value={form.headline}
                  onChange={handleChange}
                  placeholder="Ex : Professeur d’informatique pour lycée et supérieur"
                  style={S.input}
                />
              </div>

              <div style={S.field}>
                <label style={S.label}>Présentation détaillée</label>
                <textarea
                  name="presentation"
                  value={form.presentation}
                  onChange={handleChange}
                  placeholder="Présentez votre parcours, vos points forts et ce que l’élève peut attendre de vous."
                  style={S.textarea}
                />
              </div>

              <div style={S.field}>
                <label style={S.label}>Diplômes</label>
                <textarea
                  name="diplomas"
                  value={form.diplomas}
                  onChange={handleChange}
                  placeholder="Décrivez vos diplômes, certifications ou formations."
                  style={S.textarea}
                />
              </div>

              <div style={S.field}>
                <label style={S.label}>Expériences</label>
                <textarea
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="Décrivez vos expériences d’enseignement, d’accompagnement ou professionnelles."
                  style={S.textarea}
                />
              </div>

              <div style={S.field}>
                <label style={S.label}>Méthodologie</label>
                <textarea
                  name="methodology"
                  value={form.methodology}
                  onChange={handleChange}
                  placeholder="Expliquez votre manière de travailler avec les élèves : rythme, pédagogie, suivi et objectifs."
                  style={S.textarea}
                />
              </div>

              <div style={S.btnRow}>
                <button type="submit" style={{ ...S.btn, ...S.btnPrimary }}>
                  Enregistrer mon profil
                </button>

                <a href="/teacher/dashboard" style={{ ...S.btn, ...S.btnGhost }}>
                  Retour au dashboard
                </a>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeacherProfile;