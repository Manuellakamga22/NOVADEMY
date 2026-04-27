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

  statValW: {
    fontSize: 32,
    fontWeight: 800,
    color: "#fff",
  },

  statVal: {
    fontSize: 32,
    fontWeight: 800,
    color: "#111827",
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

  warningBox: {
    background: "#FFF7ED",
    border: "1px solid #FED7AA",
    color: "#C2410C",
    borderRadius: 12,
    padding: "15px 16px",
    fontSize: 15,
    lineHeight: 1.7,
    marginBottom: 16,
  },

  fieldGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 12,
    marginBottom: 16,
  },

  field: {
    marginBottom: 14,
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

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  classCard: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 14,
    padding: 18,
  },

  itemTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  itemTitle: {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    color: "#111827",
  },

  itemSub: {
    margin: "8px 0 0 0",
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 1.6,
  },

  pillRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  pill: {
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 11px",
    borderRadius: 999,
    display: "inline-block",
  },

  itemInfo: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 1.7,
  },

  empty: {
    textAlign: "center",
    padding: "34px 20px",
    color: "#9CA3AF",
  },

  emptyIcon: {
    fontSize: 34,
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 16,
    lineHeight: 1.7,
  },
};

function TeacherCollectiveClasses() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [classes, setClasses] = useState([]);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [minStudents, setMinStudents] = useState("4");
  const [startDate, setStartDate] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();

    if (!title || !subject || !minStudents || !startDate) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    if (Number(minStudents) < 4) {
      alert("Le minimum demandé pour une classe collective est de 4 élèves.");
      return;
    }

    const newClass = {
      id: Date.now(),
      title,
      subject,
      minStudents,
      startDate,
      enrolled: 0,
      status: "ouverte",
    };

    setClasses((prev) => [newClass, ...prev]);
    setTitle("");
    setSubject("");
    setMinStudents("4");
    setStartDate("");
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
            <a style={S.sbLinkActive} href="/teacher/collective-classes">👥 Classes collectives</a>
            <a style={S.sbLink} href="/teacher/requests">
              📬 Demandes <span style={S.sbBadge}>0</span>
            </a>
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
            <p style={S.smallTitle}>Classes collectives</p>
            <div style={S.smallSub}>
              Ouvrez une session collective sur une période définie. Si le nombre minimum d’élèves n’est pas atteint, la classe sera fermée et une proposition de formule sera envoyée aux élèves inscrits.
            </div>
          </div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Sessions ouvertes</div>
              <div style={S.statValW}>{classes.length}</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Minimum demandé</div>
              <div style={S.statVal}>4</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Élèves inscrits</div>
              <div style={S.statVal}>0</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Classes fermées</div>
              <div style={S.statVal}>0</div>
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Créer une session collective</div>
            <div style={S.cardDesc}>
              Cette page permet d’ouvrir une demande de classe collective sur une session bien définie.
            </div>

            <div style={S.noteBox}>
              Une classe collective est ouverte pour une session précise. L’élève s’y inscrit et la classe est maintenue seulement si l’effectif minimum est atteint.
            </div>

            

            <form onSubmit={handleCreate}>
              <div style={S.field}>
                <label style={S.label}>Titre de la session</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex : Préparation Bac Maths - Session Avril"
                  style={S.input}
                />
              </div>

              <div style={S.fieldGrid}>
                <div style={S.field}>
                  <label style={S.label}>Matière</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={S.input}
                  >
                    <option value="">Choisir une matière</option>
                    <option>Mathématiques</option>
                    <option>Informatique</option>
                    <option>Physique</option>
                    <option>Chimie</option>
                    <option>Anglais</option>
                  </select>
                </div>

                <div style={S.field}>
                  <label style={S.label}>Date de début session</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={S.input}
                  />
                </div>
              </div>

              <div style={S.field}>
                <label style={S.label}>Nombre minimum d’élèves</label>
                <input
                  type="number"
                  min="4"
                  value={minStudents}
                  onChange={(e) => setMinStudents(e.target.value)}
                  style={S.input}
                />
              </div>

              <div style={S.btnRow}>
                <button type="submit" style={{ ...S.btn, ...S.btnPrimary }}>
                  Créer la classe collective
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setTitle("");
                    setSubject("");
                    setMinStudents("4");
                    setStartDate("");
                  }}
                  style={{ ...S.btn, ...S.btnGhost }}
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Mes sessions collectives</div>

            {classes.length === 0 ? (
              <div style={S.empty}>
                <div style={S.emptyIcon}>👥</div>
                <div style={S.emptyText}>
                  Aucune classe collective créée pour le moment.
                </div>
              </div>
            ) : (
              <div style={S.list}>
                {classes.map((c) => (
                  <div key={c.id} style={S.classCard}>
                    <div style={S.itemTop}>
                      <div>
                        <h4 style={S.itemTitle}>{c.title}</h4>
                        <p style={S.itemSub}>
                          Session : {c.startDate}
                        </p>
                      </div>

                      <span
                        style={{
                          ...S.pill,
                          background: "#ECFDF5",
                          color: "#059669",
                        }}
                      >
                        {c.status}
                      </span>
                    </div>

                    <div style={S.pillRow}>
                      <span style={{ ...S.pill, background: "#EFF6FF", color: "#2563EB" }}>
                        {c.subject}
                      </span>
                      <span style={{ ...S.pill, background: "#F3F4F6", color: "#4B5563" }}>
                        Minimum {c.minStudents} élèves
                      </span>
                    </div>

                    <div style={S.itemInfo}>
                      Inscrits : <strong>{c.enrolled}</strong> / {c.minStudents}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeacherCollectiveClasses;