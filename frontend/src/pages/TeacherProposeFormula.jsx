import React, { useEffect, useState } from "react";

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
  main: { padding: "30px 30px" },
  topBar: { marginBottom: 22 },
  smallTitle: {
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
    margin: 0,
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
    color: "#111827",
    marginBottom: 14,
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
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  formulaCard: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 14,
    padding: 18,
  },
  formulaCardActive: {
    background: "#FFFFFF",
    border: "2px solid #2563EB",
    borderRadius: 14,
    padding: 18,
    boxShadow: "0 6px 18px rgba(37,99,235,0.08)",
  },
  formulaTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 10,
  },
  formulaTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    color: "#111827",
  },
  formulaSub: {
    margin: "8px 0 0 0",
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 1.6,
  },
  pillRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginBottom: 12,
  },
  pill: {
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 11px",
    borderRadius: 999,
    display: "inline-block",
  },
  btnRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 12,
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
  empty: {
    textAlign: "center",
    padding: "34px 20px",
    color: "#9CA3AF",
  },
};

function TeacherProposeFormula() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [catalog, setCatalog] = useState([]);
  const [trialRequests, setTrialRequests] = useState([]);
  const [selectedTrial, setSelectedTrial] = useState(null);
  const [selectedFormulaId, setSelectedFormulaId] = useState(null);

  useEffect(() => {
    if (!user?.id) return;
    fetchCatalog();
    fetchTrials();
  }, [user?.id]);

  const fetchCatalog = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/formulas/catalog");
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur chargement formules");
        return;
      }

      setCatalog(data);
    } catch {
      alert("Erreur de connexion au serveur");
    }
  };

  const fetchTrials = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/trial/teacher/${user.id}`);
      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur chargement demandes d’essai");
        return;
      }

      setTrialRequests(data);
    } catch {
      alert("Erreur de connexion au serveur");
    }
  };

  const handleSendFormula = async () => {
    if (!user?.id) {
      alert("Vous devez être connecté.");
      return;
    }

    if (!selectedTrial) {
      alert("Veuillez choisir une demande d’essai.");
      return;
    }

    if (!selectedFormulaId) {
      alert("Veuillez choisir une formule.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/formulas/propose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trial_request_id: selectedTrial.id,
          teacher_id: user.id,
          student_id: selectedTrial.student_id,
          formula_id: selectedFormulaId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Erreur envoi formule");
        return;
      }

      alert("Formule envoyée à l’élève");
      window.location.href = "/teacher/dashboard";
    } catch {
      alert("Erreur de connexion au serveur");
    }
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
            <a style={S.sbLink} href="/teacher/dashboard">🏠 Tableau de bord</a>
            <a style={S.sbLink} href="/teacher/profile">👤 Mon profil</a>
            <a style={S.sbLink} href="/teacher/announcements">📢 Annonces</a>

            <span style={S.sbLabel}>Organisation</span>
            <a style={S.sbLink} href="/teacher/planning">📅 Planning</a>
            <a style={S.sbLink} href="/teacher/requests">
              📬 Demandes <span style={S.sbBadge}>0</span>
            </a>
            <a style={S.sbLinkActive} href="/teacher/formulas">📦 Formules</a>
            <a style={S.sbLink} href="/chat">
              💬 Messages <span style={S.sbBadge}>0</span>
            </a>

            <span style={S.sbLabel}>Compte</span>
            <a style={S.sbLink} href="/teacher/revenue">💳 Revenus</a>
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
            <p style={S.smallTitle}>Proposer une formule</p>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Demandes d’essai reçues</div>
            <div style={S.noteBox}>
              Choisissez d’abord une demande d’essai, puis sélectionnez une formule existante de la plateforme.
            </div>

            {trialRequests.length === 0 ? (
              <div style={S.empty}>Aucune demande d’essai.</div>
            ) : (
              <div style={S.list}>
                {trialRequests.map((trial) => (
                  <div
                    key={trial.id}
                    style={selectedTrial?.id === trial.id ? S.formulaCardActive : S.formulaCard}
                  >
                    <div style={S.formulaTop}>
                      <div>
                        <h4 style={S.formulaTitle}>
                          {trial.student_name || "Élève"} - {trial.subject || "Matière"}
                        </h4>
                        <p style={S.formulaSub}>
                          Créneau : {trial.requested_slot || "Non renseigné"}
                        </p>
                      </div>
                    </div>

                    <div style={S.pillRow}>
                      <span style={{ ...S.pill, background: "#F3F4F6", color: "#4B5563" }}>
                        Élève ID : {trial.student_id}
                      </span>
                      <span style={{ ...S.pill, background: "#EFF6FF", color: "#2563EB" }}>
                        Demande ID : {trial.id}
                      </span>
                    </div>

                    <div style={S.btnRow}>
                      <button
                        type="button"
                        onClick={() => setSelectedTrial(trial)}
                        style={{
                          ...S.btn,
                          ...(selectedTrial?.id === trial.id ? S.btnPrimary : S.btnGhost),
                        }}
                      >
                        {selectedTrial?.id === trial.id
                          ? "Demande sélectionnée"
                          : "Choisir cette demande"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Formules existantes</div>

            {catalog.length === 0 ? (
              <div style={S.empty}>Aucune formule disponible.</div>
            ) : (
              <div style={S.list}>
                {catalog.map((f) => (
                  <div
                    key={f.id}
                    style={selectedFormulaId === f.id ? S.formulaCardActive : S.formulaCard}
                  >
                    <div style={S.formulaTop}>
                      <div>
                        <h4 style={S.formulaTitle}>{f.label || f.type}</h4>
                        <p style={S.formulaSub}>
                          {f.duration_months} mois • {f.hours_per_week} h / semaine • {f.price} €
                        </p>
                      </div>
                    </div>

                    <div style={S.pillRow}>
                      <span style={{ ...S.pill, background: "#EFF6FF", color: "#2563EB" }}>
                        {f.engagement_required
                          ? `Engagement ${f.engagement_months} mois`
                          : "Sans engagement"}
                      </span>

                      {f.min_students ? (
                        <span style={{ ...S.pill, background: "#F3F4F6", color: "#4B5563" }}>
                          Classe collective : min {f.min_students}
                        </span>
                      ) : null}
                    </div>

                    <div style={S.btnRow}>
                      <button
                        type="button"
                        onClick={() => setSelectedFormulaId(f.id)}
                        style={{
                          ...S.btn,
                          ...(selectedFormulaId === f.id ? S.btnPrimary : S.btnGhost),
                        }}
                      >
                        {selectedFormulaId === f.id
                          ? "Formule sélectionnée"
                          : "Choisir cette formule"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={S.btnRow}>
              <button
                type="button"
                onClick={handleSendFormula}
                style={{ ...S.btn, ...S.btnPrimary }}
              >
                Envoyer la formule à l’élève
              </button>

              <a href="/teacher/dashboard" style={{ ...S.btn, ...S.btnGhost }}>
                Retour dashboard
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeacherProposeFormula;