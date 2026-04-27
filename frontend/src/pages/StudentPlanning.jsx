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
    marginBottom: 18,
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

  cardDesc: {
    fontSize: 15,
    color: "#9CA3AF",
    lineHeight: 1.7,
    marginBottom: 16,
  },

  cardAction: {
    fontSize: 13,
    fontWeight: 500,
    color: "#2563EB",
    textDecoration: "none",
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
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

  sessionCard: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 16,
  },

  sessionTitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "#111827",
    marginBottom: 6,
  },

  sessionMeta: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 1.6,
  },
};

function StudentPlanning() {
  const upcomingSessions = [];
  const pastSessions = [];
  const virtualClasses = [];

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
              📬 Demandes d'essai <span style={S.sbBadge}>0</span>
            </a>
            <a style={S.sbLink} href="/student/courses">
              📚 Mes cours
            </a>
            <a style={S.sbLinkActive} href="/student/planning">
              📅 Mon calendrier
            </a>
            <a style={S.sbLink} href="/chat">
              💬 Messages <span style={S.sbBadge}>0</span>
            </a>

            <span style={S.sbLabel}>Compte</span>
            <a style={S.sbLink} href="/student/payments">
              💳 Paiements
            </a>
            <a style={S.sbLink} href="#">
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
            <div style={S.pageTitle}>📅 Mon calendrier</div>
            <div style={S.pageSub}>
              Consultez vos prochaines séances, votre historique de cours et vos
              classes virtuelles depuis un seul espace.
            </div>
          </div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Prochaines séances</div>
              <div style={S.statValW}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Cours passés</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Classes virtuelles</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Liens visio</div>
              <div style={S.statVal}>0</div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>
                🗓️ Prochaines séances
                <a href="/student/courses" style={S.cardAction}>
                  Voir mes cours →
                </a>
              </div>
              <p style={S.cardDesc}>
                Retrouvez ici les séances déjà programmées avec votre professeur.
              </p>

              {upcomingSessions.length === 0 ? (
                <div style={S.empty}>
                  <div style={S.emptyIcon}>🗓️</div>
                  <p style={S.emptyText}>
                    Aucune séance programmée pour le moment.
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gap: 12 }}>
                  {upcomingSessions.map((session) => (
                    <div key={session.id} style={S.sessionCard}>
                      <div style={S.sessionTitle}>{session.title}</div>
                      <div style={S.sessionMeta}>
                        {session.date} • {session.time}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>🎥 Liens visio</div>
              <p style={S.cardDesc}>
                Les accès aux cours à distance et classes virtuelles seront
                affichés ici.
              </p>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                <span style={{ ...S.pill, background: "#EFF6FF", color: "#2563EB" }}>
                  Visio
                </span>
                <span style={{ ...S.pill, background: "#ECFDF5", color: "#059669" }}>
                  Classe virtuelle
                </span>
              </div>

              <div style={S.empty}>
                <div style={S.emptyIcon}>🎥</div>
                <p style={S.emptyText}>
                  Aucun lien disponible pour le moment.
                </p>
              </div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>📚 Historique des cours</div>
              <p style={S.cardDesc}>
                Consultez vos séances passées et le suivi de votre apprentissage.
              </p>

              {pastSessions.length === 0 ? (
                <div style={S.empty}>
                  <div style={S.emptyIcon}>📚</div>
                  <p style={S.emptyText}>
                    Aucun cours passé enregistré pour le moment.
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gap: 12 }}>
                  {pastSessions.map((session) => (
                    <div key={session.id} style={S.sessionCard}>
                      <div style={S.sessionTitle}>{session.title}</div>
                      <div style={S.sessionMeta}>
                        {session.date} • {session.time}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>👥 Classes virtuelles</div>
              <p style={S.cardDesc}>
                Suivez ici vos sessions collectives et leur état de validation.
              </p>

              {virtualClasses.length === 0 ? (
                <div style={S.empty}>
                  <div style={S.emptyIcon}>👥</div>
                  <p style={S.emptyText}>
                    Aucune classe virtuelle active pour le moment.
                  </p>
                </div>
              ) : (
                <div style={{ display: "grid", gap: 12 }}>
                  {virtualClasses.map((item) => (
                    <div key={item.id} style={S.sessionCard}>
                      <div style={S.sessionTitle}>{item.title}</div>
                      <div style={S.sessionMeta}>{item.status}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>ℹ️ Informations utiles</div>
            <p style={S.cardDesc}>
              Votre calendrier regroupera vos cours individuels, vos classes
              virtuelles et les éventuels liens de connexion lorsque vos
              formules seront actives.
            </p>
            <div style={S.empty}>
              <div style={S.emptyIcon}>ℹ️</div>
              <p style={S.emptyText}>
                Les nouvelles séances apparaîtront ici après validation de la
                formule et planification avec le professeur.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default StudentPlanning;