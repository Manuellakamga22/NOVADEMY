import React, { useState } from "react";

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
    background: "#ECFDF5",
    color: "#059669",
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
    background: "linear-gradient(135deg,#059669,#0891B2)",
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
    maxWidth: "920px",
  },

  infoBanner: {
    background: "#EFF6FF",
    border: "1px solid #BFDBFE",
    color: "#1D4ED8",
    borderRadius: 14,
    padding: "16px 18px",
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 20,
  },

  formulaGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
    marginBottom: 20,
  },

  formulaCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 18,
    padding: "22px 22px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.03)",
  },

  formulaCardActive: {
    background: "#fff",
    border: "2px solid #2563EB",
    borderRadius: 18,
    padding: "22px 22px",
    boxShadow: "0 6px 18px rgba(37,99,235,0.08)",
  },

  formulaTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 12,
    marginBottom: 14,
  },

  formulaTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 800,
    color: "#111827",
  },

  formulaTag: {
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 10px",
    borderRadius: 999,
    background: "#EFF6FF",
    color: "#2563EB",
  },

  formulaText: {
    fontSize: 16,
    color: "#4B5563",
    lineHeight: 1.8,
    marginBottom: 16,
  },

  formulaPrice: {
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
    marginBottom: 6,
  },

  formulaPriceSub: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 14,
  },

  list: {
    margin: 0,
    paddingLeft: 20,
    color: "#374151",
    fontSize: 15,
    lineHeight: 1.9,
  },

  btnRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 18,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 700,
    padding: "11px 16px",
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

  summaryCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: "22px 24px",
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#111827",
    marginBottom: 14,
  },

  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16,
  },

  summaryBox: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 14,
  },

  summaryLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 6,
  },

  summaryValue: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111827",
    lineHeight: 1.6,
  },

  helperText: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 1.7,
  },
};

function StudentPacks() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [selectedFormula, setSelectedFormula] = useState("suivi");

  const formulas = [
    {
      id: "suivi",
      title: "Suivi régulier",
      tag: "3 mois",
      price: "180 €",
      priceSub: "par mois",
      description:
        "Formule adaptée aux élèves qui veulent un accompagnement stable et progressif sur plusieurs semaines.",
      details: [
        "Engagement sur 3 mois",
        "Suivi pédagogique régulier",
        "Rythme hebdomadaire ou bihebdomadaire",
        "Idéal pour progression durable",
      ],
    },
    {
      id: "pack",
      title: "Pack d’heures",
      tag: "Flexible",
      price: "120 €",
      priceSub: "pack",
      description:
        "Formule utile pour un besoin précis, une remise à niveau ou une préparation ciblée.",
      details: [
        "Volume d’heures défini",
        "Utilisation plus souple",
        "Bon pour besoin ponctuel",
        "Adapté avant examen ou devoir",
      ],
    },
    {
      id: "classe",
      title: "Classe virtuelle",
      tag: "Collectif",
      price: "90 €",
      priceSub: "par session",
      description:
        "Formule collective ouverte sur une courte période, sous réserve d’un effectif minimum.",
      details: [
        "Cours en petit groupe",
        "Tarif plus accessible",
        "Validation si effectif atteint",
        "Alternative proposée sinon",
      ],
    },
  ];

  const selected = formulas.find((f) => f.id === selectedFormula);

  return (
    <div style={S.wrap}>
      <div style={S.dash}>
        <aside style={S.sidebar}>
          <div style={S.sbBrand}>
            <div style={{ ...S.logo, fontSize: 20 }}>
              NOVA<span style={S.logoEm}>DEMY</span>
            </div>
            <span style={S.sbRole}>Élève</span>
          </div>

          <nav style={S.sbNav}>
            <span style={S.sbLabel}>Principal</span>
            <a style={S.sbLink} href="/student/dashboard">
              🏠 Tableau de bord
            </a>
            <a style={S.sbLink} href="/student/profile">
              👤 Mon profil
            </a>
            <a style={S.sbLink} href="/search">
              🔍 Trouver un prof
            </a>

            <span style={S.sbLabel}>Mes cours</span>
            <a style={S.sbLink} href="/trial-request">
              📬 Demande d’essai
            </a>
            <a style={S.sbLink} href="/student/requests">
              📄 Mes demandes <span style={S.sbBadge}>0</span>
            </a>
            <a style={S.sbLinkActive} href="/student/packs">
              📦 Formules
            </a>
            <a style={S.sbLink} href="/student/courses">
              📚 Mes cours
            </a>
            <a style={S.sbLink} href="/student/calendar">
              📅 Mon calendrier
            </a>
            <a style={S.sbLink} href="/chat">
              💬 Messages <span style={S.sbBadge}>0</span>
            </a>

            <span style={S.sbLabel}>Compte</span>
            <a style={S.sbLink} href="/payment">
              💳 Paiement
            </a>
          </nav>

          <div style={S.sbUser}>
            <div style={S.av}>É</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>
                {user ? `${user.prenom} ${user.nom}` : "Prénom Nom"}
              </div>
              <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 2 }}>
                Élève
              </div>
            </div>
          </div>
        </aside>

        <main style={S.main}>
          <div style={S.topBar}>
            <div>
              <p style={S.smallTitle}>Choisir une formule</p>
             
            </div>
          </div>

          

          <div style={S.formulaGrid}>
            {formulas.map((formula) => (
              <div
                key={formula.id}
                style={
                  selectedFormula === formula.id
                    ? S.formulaCardActive
                    : S.formulaCard
                }
              >
                <div style={S.formulaTop}>
                  <h3 style={S.formulaTitle}>{formula.title}</h3>
                  <span style={S.formulaTag}>{formula.tag}</span>
                </div>

                <div style={S.formulaText}>{formula.description}</div>

                <div style={S.formulaPrice}>{formula.price}</div>
                <div style={S.formulaPriceSub}>{formula.priceSub}</div>

                <ul style={S.list}>
                  {formula.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div style={S.btnRow}>
                  <button
                    type="button"
                    onClick={() => setSelectedFormula(formula.id)}
                    style={{ ...S.btn, ...S.btnPrimary }}
                  >
                    Choisir
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={S.summaryCard}>
            <div style={S.summaryTitle}>Récapitulatif</div>

            <div style={S.summaryGrid}>
              <div style={S.summaryBox}>
                <div style={S.summaryLabel}>Formule sélectionnée</div>
                <div style={S.summaryValue}>{selected?.title || "—"}</div>
              </div>

              <div style={S.summaryBox}>
                <div style={S.summaryLabel}>Tarif</div>
                <div style={S.summaryValue}>
                  {selected ? `${selected.price} ${selected.priceSub}` : "—"}
                </div>
              </div>
            </div>


            <div style={S.btnRow}>
              <a href="/payment" style={{ ...S.btn, ...S.btnPrimary }}>
                Continuer vers le paiement
              </a>

              <a href="/trial-request" style={{ ...S.btn, ...S.btnGhost }}>
                Retour
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentPacks;