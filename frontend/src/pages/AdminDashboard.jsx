import React from "react";

const S = {
  wrap: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "#F9FAFB",
  },

  logo: {
    fontSize: 20,
    fontWeight: 800,
  },

  logoEm: {
    color: "#2563EB",
  },

  dash: {
    display: "grid",
    gridTemplateColumns: "240px 1fr",
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
    padding: 20,
    borderBottom: "1px solid #E5E7EB",
  },

  sbRole: {
    display: "inline-block",
    marginTop: 6,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    padding: "2px 10px",
    borderRadius: 20,
    background: "#FEF2F2",
    color: "#DC2626",
  },

  sbNav: {
    padding: 12,
    flex: 1,
  },

  sbLabel: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    color: "#9CA3AF",
    padding: "0 10px",
    margin: "14px 0 4px",
    display: "block",
  },

  sbLink: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 500,
    color: "#4B5563",
    textDecoration: "none",
    marginBottom: 1,
  },

  sbLinkActive: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 12px",
    borderRadius: 8,
    fontSize: 13,
    fontWeight: 600,
    color: "#2563EB",
    background: "#EFF6FF",
    textDecoration: "none",
    marginBottom: 1,
  },

  sbBadge: {
    marginLeft: "auto",
    background: "#EA580C",
    color: "#fff",
    fontSize: 10,
    fontWeight: 700,
    padding: "1px 6px",
    borderRadius: 10,
  },

  sbUser: {
    padding: "14px 20px",
    borderTop: "1px solid #E5E7EB",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },

  av: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#6B7280,#374151)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 12,
    flexShrink: 0,
  },

  main: {
    padding: "28px 32px",
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 6,
  },

  pageSub: {
    fontSize: 14,
    color: "#9CA3AF",
    marginBottom: 20,
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 14,
    marginBottom: 22,
  },

  statAccent: {
    background: "#2563EB",
    border: "1px solid #2563EB",
    borderRadius: 12,
    padding: 18,
  },

  stat: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 18,
  },

  statLabelW: {
    fontSize: 11,
    fontWeight: 600,
    color: "rgba(255,255,255,.7)",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 8,
  },

  statLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 8,
  },

  statValW: {
    fontSize: 28,
    fontWeight: 800,
    color: "#fff",
  },

  statVal: {
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
  },

  g2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
    marginBottom: 16,
  },

  card: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 20,
  },

  cardTitle: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: 12,
    fontWeight: 600,
    padding: "8px 14px",
    borderRadius: 8,
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

  btnDanger: {
    background: "#FEF2F2",
    color: "#DC2626",
  },

  btnFull: {
    width: "100%",
    justifyContent: "center",
    padding: 12,
    marginTop: 10,
    fontSize: 13,
  },

  empty: {
    textAlign: "center",
    padding: "20px",
    color: "#9CA3AF",
  },

  emptyIcon: {
    fontSize: 24,
    marginBottom: 8,
  },

  prog: {
    height: 6,
    background: "#F3F4F6",
    borderRadius: 3,
    overflow: "hidden",
  },

  progFill: {
    height: "100%",
    borderRadius: 3,
    background: "#2563EB",
  },

  pill: {
    fontSize: 11,
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: 20,
  },

  tbl: {
    width: "100%",
    borderCollapse: "collapse",
  },

  tblTh: {
    textAlign: "left",
    padding: "9px 12px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "#9CA3AF",
    borderBottom: "1.5px solid #E5E7EB",
  },

  tblTd: {
    padding: "12px",
    borderBottom: "1px solid #F3F4F6",
    fontSize: 13,
  },
};

const Alert = ({ type, icon, title, children }) => {
  const colors = {
    red: ["#FEF2F2", "#FECACA"],
    orange: ["#FFF7ED", "#FED7AA"],
    blue: ["#EFF6FF", "#BFDBFE"],
  };

  const [bg, border] = colors[type];

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 12,
        padding: "12px 16px",
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        marginBottom: 10,
      }}
    >
      <span style={{ fontSize: 16 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{title}</div>
      </div>
      {children}
    </div>
  );
};

function AdminDashboard() {
  return (
    <div style={S.wrap}>
      <div style={S.dash}>
        <aside style={S.sidebar}>
          <div style={S.sbBrand}>
            <div style={{ ...S.logo, fontSize: 17 }}>
              NOVA<span style={S.logoEm}>DEMY</span>
            </div>
            <span style={S.sbRole}>Admin</span>
          </div>

          <nav style={S.sbNav}>
            <span style={S.sbLabel}>Vue globale</span>
            <a style={S.sbLinkActive} href="/admin/dashboard">📊 Tableau de bord</a>
            <a style={S.sbLink} href="/admin/teachers">👩‍🏫 Professeurs</a>
            <a style={S.sbLink} href="/admin/students">🎓 Élèves</a>
            <a style={S.sbLink} href="/admin/announcements">📢 Annonces</a>

            <span style={S.sbLabel}>Suivi</span>
            <a style={S.sbLink} href="/admin/trials">🧪 Cours d'essai</a>
            <a style={S.sbLink} href="/admin/reviews">💬 Modération avis</a>
            <a style={S.sbLink} href="/admin/alerts">
              🛡️ Alertes IA <span style={S.sbBadge}>0</span>
            </a>
            <a style={S.sbLink} href="/admin/payments">💳 Paiements</a>

            <span style={S.sbLabel}>Finance</span>
            <a style={S.sbLink} href="/admin/stats">📈 Statistiques</a>
            <a style={S.sbLink} href="/admin/settings">⚙️ Paramètres</a>
          </nav>

          <div style={S.sbUser}>
            <div style={S.av}>A</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Administrateur</div>
              <div style={{ fontSize: 11, color: "#9CA3AF" }}>Super Admin</div>
            </div>
          </div>
        </aside>

        <main style={S.main}>
          <div style={S.pageTitle}>Tableau de bord administrateur</div>
          <div style={S.pageSub}>Vue générale de la plateforme</div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Utilisateurs</div>
              <div style={S.statValW}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Professeurs</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Élèves</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Annonces actives</div>
              <div style={S.statVal}>0</div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>👥 Gestion des utilisateurs</div>
              <div style={S.empty}>
                <div style={S.emptyIcon}>👤</div>
                <p style={{ fontSize: 13 }}>Aucun utilisateur pour le moment.</p>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <a href="/admin/users" style={{ ...S.btn, ...S.btnPrimary }}>
                  Voir les utilisateurs
                </a>
                <button style={{ ...S.btn, ...S.btnGhost }}>
                  Activer / Désactiver
                </button>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>👩‍🏫 Gestion des professeurs</div>
              <div style={{ overflowX: "auto" }}>
                <table style={S.tbl}>
                  <thead>
                    <tr>
                      <th style={S.tblTh}>Nom</th>
                      <th style={S.tblTh}>Matière</th>
                      <th style={S.tblTh}>Heures</th>
                      <th style={S.tblTh}>Niveau</th>
                      <th style={S.tblTh}>Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={S.tblTd}>—</td>
                      <td style={S.tblTd}>—</td>
                      <td style={S.tblTd}>0 h</td>
                      <td style={S.tblTd}>
                        <span style={{ ...S.pill, background: "#F3F4F6", color: "#6B7280" }}>
                          Débutant
                        </span>
                      </td>
                      <td style={S.tblTd}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          <span
                            style={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              background: "#EA580C",
                              display: "inline-block",
                            }}
                          />
                          En attente
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <a href="/admin/teachers" style={{ ...S.btn, ...S.btnPrimary }}>
                  Voir les professeurs
                </a>
                <button style={{ ...S.btn, ...S.btnGhost }}>
                  Valider un profil
                </button>
              </div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>🧪 Suivi des cours d'essai</div>
              <div style={S.empty}>
                <div style={S.emptyIcon}>🧪</div>
                <p style={{ fontSize: 13 }}>Aucun cours d'essai en cours.</p>
              </div>
              <a href="/admin/trials" style={{ ...S.btn, ...S.btnGhost, ...S.btnFull }}>
                Voir les demandes
              </a>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>🛡️ Alertes modération IA</div>
              <Alert type="red" icon="🚨" title="Type d'alerte">
                <button style={{ ...S.btn, ...S.btnGhost }}>Voir</button>
              </Alert>
              <Alert type="orange" icon="⚠️" title="Type d'alerte">
                <button style={{ ...S.btn, ...S.btnGhost }}>Voir</button>
              </Alert>
              <Alert type="blue" icon="ℹ️" title="Information" />
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>📢 Gestion des annonces</div>
              <div style={S.empty}>
                <div style={S.emptyIcon}>📋</div>
                <p style={{ fontSize: 13 }}>Aucune annonce pour le moment.</p>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <a href="/admin/announcements" style={{ ...S.btn, ...S.btnPrimary }}>
                  Voir les annonces
                </a>
                <button style={{ ...S.btn, ...S.btnDanger }}>
                  Suspendre une annonce
                </button>
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>📈 Statistiques plateforme</div>

              {[
                ["Cours réalisés", "0"],
                ["Taux validation essais", "— %"],
                ["Note moyenne profs", "— / 5"],
              ].map(([label, val]) => (
                <div key={label} style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    <span>{label}</span>
                    <span style={{ color: "#9CA3AF" }}>{val}</span>
                  </div>
                  <div style={S.prog}>
                    <div style={{ ...S.progFill, width: "0%" }} />
                  </div>
                </div>
              ))}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
                {[
                  ["Revenus générés", "0 €"],
                  ["Heures enseignées", "0 h"],
                ].map(([label, val]) => (
                  <div
                    key={label}
                    style={{
                      background: "#F9FAFB",
                      border: "1px solid #E5E7EB",
                      borderRadius: 8,
                      padding: 14,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#9CA3AF" }}>{label}</div>
                    <div style={{ fontSize: 22, fontWeight: 800 }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>🎖️ Commissions plateforme</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
                {[
                  { icon: "🌱", level: "Débutant", hours: "0–20 h", rate: "15", bg: "#F9FAFB", border: "#E5E7EB", col: "#6B7280" },
                  { icon: "📘", level: "Interm.", hours: "20–100 h", rate: "12", bg: "#EFF6FF", border: "#BFDBFE", col: "#2563EB" },
                  { icon: "🏆", level: "Avancé", hours: "100–300 h", rate: "7", bg: "#ECFDF5", border: "#A7F3D0", col: "#059669" },
                  { icon: "⭐", level: "Expert", hours: "300+ h", rate: "3", bg: "#FFF7ED", border: "#FED7AA", col: "#EA580C" },
                ].map((t) => (
                  <div
                    key={t.level}
                    style={{
                      background: t.bg,
                      border: `1.5px solid ${t.border}`,
                      borderRadius: 10,
                      padding: 14,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 20, marginBottom: 6 }}>{t.icon}</div>
                    <div style={{ fontSize: 11, fontWeight: 700 }}>{t.level}</div>
                    <div style={{ fontSize: 10, color: "#9CA3AF", marginBottom: 8 }}>{t.hours}</div>
                    <div style={{ fontSize: 28, fontWeight: 800, color: t.col, lineHeight: 1 }}>
                      {t.rate}
                      <span style={{ fontSize: 14 }}>%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>💳 Paiements</div>
              <div style={S.empty}>
                <div style={S.emptyIcon}>💳</div>
                <p style={{ fontSize: 13 }}>Aucun paiement enregistré.</p>
              </div>
              <a href="/admin/payments" style={{ ...S.btn, ...S.btnGhost, ...S.btnFull }}>
                Voir les paiements
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;