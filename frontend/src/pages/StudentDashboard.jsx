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
    gridTemplateColumns: "260px 1fr",
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
    padding: "24px 22px",
    borderBottom: "1px solid #E5E7EB",
  },

  sbRole: {
    display: "inline-block",
    marginTop: 8,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    padding: "4px 12px",
    borderRadius: 20,
    background: "#ECFDF5",
    color: "#059669",
  },

  sbNav: { padding: 14, flex: 1 },

  sbLabel: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "#9CA3AF",
    padding: "0 10px",
    margin: "18px 0 6px",
    display: "block",
  },

  sbLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderRadius: 9,
    fontSize: 15,
    fontWeight: 500,
    color: "#4B5563",
    textDecoration: "none",
    marginBottom: 2,
  },

  sbLinkActive: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    borderRadius: 9,
    fontSize: 15,
    fontWeight: 600,
    color: "#2563EB",
    background: "#EFF6FF",
    textDecoration: "none",
    marginBottom: 2,
  },

  sbBadge: {
    marginLeft: "auto",
    background: "#2563EB",
    color: "#fff",
    fontSize: 11,
    fontWeight: 700,
    padding: "2px 8px",
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
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#059669,#0891B2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 15,
    flexShrink: 0,
  },

  main: { padding: "36px 36px" },

  pageTitle: {
    fontSize: 28,
    fontWeight: 800,
    letterSpacing: "-0.01em",
    marginBottom: 8,
  },

  pageSub: {
    fontSize: 16,
    color: "#9CA3AF",
    lineHeight: 1.6,
  },

  pageHead: {
    marginBottom: 32,
    paddingBottom: 24,
    borderBottom: "1px solid #F3F4F6",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 16,
    marginBottom: 28,
  },

  statAccent: {
    background: "#059669",
    border: "1px solid #059669",
    borderRadius: 14,
    padding: "20px 22px",
  },

  stat: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 14,
    padding: "20px 22px",
  },

  statLabelW: {
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(255,255,255,.7)",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 10,
  },

  statLabel: {
    fontSize: 12,
    fontWeight: 600,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 10,
  },

  statValW: { fontSize: 30, fontWeight: 800, color: "#fff" },
  statVal: { fontSize: 30, fontWeight: 800, color: "#111827" },

  g2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 18,
    marginBottom: 18,
  },

  g3: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 14,
  },

  card: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 14,
    padding: "22px 24px",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardAction: {
    fontSize: 13,
    fontWeight: 500,
    color: "#2563EB",
    textDecoration: "none",
  },

  cardDesc: {
    fontSize: 15,
    color: "#9CA3AF",
    lineHeight: 1.7,
    marginBottom: 16,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: "inherit",
    fontSize: 14,
    fontWeight: 600,
    padding: "10px 20px",
    borderRadius: 9,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  },

  btnPrimary: { background: "#2563EB", color: "#fff" },
  btnGhost: { background: "#F3F4F6", color: "#4B5563" },
  btnOutline: {
    background: "transparent",
    color: "#2563EB",
    border: "1.5px solid #2563EB",
  },

  btnSm: { padding: "8px 16px", fontSize: 13 },
  btnFull: {
    width: "100%",
    justifyContent: "center",
    padding: "13px",
    marginTop: 14,
    fontSize: 15,
  },

  empty: {
    textAlign: "center",
    padding: "28px 20px",
    color: "#9CA3AF",
  },

  emptyIcon: { fontSize: 32, marginBottom: 12 },
  emptyText: { fontSize: 15 },

  pill: {
    fontSize: 12,
    fontWeight: 600,
    padding: "4px 12px",
    borderRadius: 20,
    display: "inline-block",
  },

  searchInput: {
    flex: 1,
    minWidth: 160,
    padding: "12px 16px",
    borderRadius: 9,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 15,
    outline: "none",
  },
};

function StudentDashboard() {
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
            <a style={S.sbLinkActive} href="/student/dashboard">
              🏠 Tableau de bord
            </a>
            <a style={S.sbLink} href="/student/profile">
              👤 Mon profil
            </a>
            <a style={S.sbLink} href="/search">
              🔍 Trouver un prof
            </a>
            <a style={S.sbLink} href="/student/teachers">
                 👩‍🏫 Mes professeurs
                 </a>


            <span style={S.sbLabel}>Mes cours</span>
            <a style={S.sbLink} href="/trial-request">
              📬 Demandes d'essai <span style={S.sbBadge}>0</span>
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
            <a style={S.sbLink} href="/student/payments">
              💳 Paiements
            </a>
            <a style={S.sbLink} href="/student/review">
              ⭐ Donner un avis
            </a>
          </nav>

          <div style={S.sbUser}>
            <div style={S.av}>É</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>Prénom Nom</div>
              <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>
                Élève
              </div>
            </div>
          </div>
        </aside>

        <main style={S.main}>
          <div style={S.pageHead}>
            <div style={S.pageTitle}>👋 Bienvenue dans votre espace élève</div>
            <div style={S.pageSub}>
              Recherchez un professeur, demandez un cours d'essai, suivez vos
              cours et donnez votre avis.
            </div>
          </div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Mes cours</div>
              <div style={S.statValW}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Demandes d'essai</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Messages</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Avis à donner</div>
              <div style={S.statVal}>0</div>
            </div>
          </div>

          <div style={{ ...S.card, marginBottom: 18 }}>
            <div style={S.cardTitle}>🔍 Rechercher un professeur</div>
            <div
              style={{
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <input style={S.searchInput} placeholder="Matière" />
              <input style={S.searchInput} placeholder="Ville" />
              <select style={{ ...S.searchInput, maxWidth: 200 }}>
                <option>Mode de formation</option>
                <option>Présentiel</option>
                <option>Visio</option>
              </select>
              <a href="/search" style={{ ...S.btn, ...S.btnPrimary }}>
                Lancer la recherche
              </a>
            </div>
          </div>

          <div style={{ ...S.card, marginBottom: 18 }}>
            <div style={S.cardTitle}>👩‍🏫 Professeurs recommandés</div>
            <div style={S.g3}>
              {[{ col: "#2563EB" }, { col: "#059669" }, { col: "#EA580C" }].map(
                (p, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1.5px solid #E5E7EB",
                      borderRadius: 12,
                      padding: 18,
                    }}
                  >
                    <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                      <div
                        style={{
                          width: 38,
                          height: 38,
                          borderRadius: "50%",
                          background: p.col,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontWeight: 700,
                          fontSize: 14,
                          flexShrink: 0,
                        }}
                      >
                        P
                      </div>
                      <div>
                        <div style={{ fontSize: 15, fontWeight: 700 }}>
                          Professeur
                        </div>
                        <div style={{ fontSize: 13, color: "#9CA3AF" }}>
                          Matière
                        </div>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                      <span
                        style={{
                          ...S.pill,
                          background: "#F3F4F6",
                          color: "#6B7280",
                        }}
                      >
                        Ville
                      </span>
                      <span
                        style={{
                          ...S.pill,
                          background: "#EFF6FF",
                          color: "#2563EB",
                        }}
                      >
                        Format
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 12,
                        borderTop: "1px solid #F3F4F6",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 800 }}>
                          — €<span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 400 }}>/h</span>
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "#059669",
                            fontWeight: 600,
                          }}
                        >
                          🎁 1er cours gratuit
                        </div>
                      </div>
                      <a
                        href="/teacher/profile"
                        style={{ ...S.btn, ...S.btnOutline, ...S.btnSm }}
                      >
                        Voir
                      </a>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>
                📬 Demandes de cours d'essai
                <a href="/trial-request" style={S.cardAction}>
                  + Faire une demande
                </a>
              </div>
              <p style={S.cardDesc}>
                Envoyez une demande et échangez avec le professeur sur vos
                besoins.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginBottom: 14,
                }}
              >
                {[
                  ["#FFF7ED", "#EA580C", "En attente"],
                  ["#ECFDF5", "#059669", "Validée"],
                  ["#EFF6FF", "#2563EB", "Reportée"],
                  ["#FEF2F2", "#DC2626", "Refusée"],
                  ["#F3F4F6", "#6B7280", "Effectuée"],
                ].map(([bg, col, lbl]) => (
                  <span
                    key={lbl}
                    style={{ ...S.pill, background: bg, color: col }}
                  >
                    {lbl}
                  </span>
                ))}
              </div>

              <div style={S.empty}>
                <div style={S.emptyIcon}>📭</div>
                <p style={S.emptyText}>
                  Aucune demande envoyée pour le moment.
                </p>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>📚 Mes cours</div>
              <p style={S.cardDesc}>
                Consultez vos cours confirmés et vos packs en cours.
              </p>
              <div style={S.empty}>
                <div style={S.emptyIcon}>📚</div>
                <p style={S.emptyText}>Aucun cours actif.</p>
              </div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>
                👤 Mon profil
                <a href="/student/profile" style={S.cardAction}>
                  Modifier →
                </a>
              </div>
              <p style={S.cardDesc}>
                Complétez votre fiche pour recevoir des propositions adaptées.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                {[["Niveau", "—"], ["Ville", "—"], ["Format", "—"], ["Objectif", "—"]].map(
                  ([lbl, val]) => (
                    <div
                      key={lbl}
                      style={{
                        background: "#F9FAFB",
                        border: "1px solid #E5E7EB",
                        borderRadius: 9,
                        padding: 14,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          color: "#9CA3AF",
                          marginBottom: 4,
                        }}
                      >
                        {lbl}
                      </div>
                      <div style={{ fontSize: 15, fontWeight: 600 }}>{val}</div>
                    </div>
                  )
                )}
              </div>
              <button style={{ ...S.btn, ...S.btnGhost, ...S.btnFull }}>
                Modifier mon profil
              </button>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>⭐ Donner un avis</div>
              <p style={S.cardDesc}>
                Notez vos professeurs après chaque cours pour améliorer les
                recommandations.
              </p>
              <div style={S.empty}>
                <div style={S.emptyIcon}>⭐</div>
                <p style={S.emptyText}>Aucun avis à donner pour le moment.</p>
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>
              💬 Messages
              <a href="/chat" style={S.cardAction}>
                Ouvrir le chat →
              </a>
            </div>
            <p style={S.cardDesc}>
              Échangez avec votre professeur après validation du cours d'essai.
            </p>
            <div style={S.empty}>
              <div style={S.emptyIcon}>💬</div>
              <p style={S.emptyText}>
                Vous n'avez pas encore de conversation active.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;