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
    gridTemplateColumns: "1.2fr 0.8fr",
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

  input: {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 13,
    outline: "none",
    boxSizing: "border-box",
    background: "#fff",
  },

  searchRow: {
    display: "grid",
    gridTemplateColumns: "1fr 180px 180px 140px",
    gap: 10,
    marginBottom: 14,
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
    verticalAlign: "top",
  },

  pill: {
    fontSize: 11,
    fontWeight: 600,
    padding: "3px 10px",
    borderRadius: 20,
    display: "inline-block",
  },

  actionRow: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
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

  infoBox: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },

  infoLabel: {
    fontSize: 11,
    color: "#9CA3AF",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 20,
    fontWeight: 800,
    color: "#111827",
  },
};

function AdminAnnouncements() {
  const announcements = [];

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
            <a style={S.sbLink} href="/admin/dashboard">📊 Tableau de bord</a>
            <a style={S.sbLink} href="/admin/teachers">👩‍🏫 Professeurs</a>
            <a style={S.sbLink} href="/admin/students">🎓 Élèves</a>
            <a style={S.sbLinkActive} href="/admin/announcements">📢 Annonces</a>

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
          <div style={S.pageTitle}>Gestion des annonces</div>
          <div style={S.pageSub}>Contrôle, validation et suspension des annonces</div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Annonces</div>
              <div style={S.statValW}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Actives</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>En attente</div>
              <div style={S.statVal}>0</div>
            </div>
            <div style={S.stat}>
              <div style={S.statLabel}>Suspendues</div>
              <div style={S.statVal}>0</div>
            </div>
          </div>

          <div style={S.g2}>
            <div style={S.card}>
              <div style={S.cardTitle}>Liste des annonces</div>

              <div style={S.searchRow}>
                <input style={S.input} placeholder="Rechercher une annonce" />
                <select style={S.input}>
                  <option>Matière</option>
                  <option>Informatique</option>
                  <option>Mathématiques</option>
                  <option>Anglais</option>
                </select>
                <select style={S.input}>
                  <option>Statut</option>
                  <option>Active</option>
                  <option>En attente</option>
                  <option>Suspendue</option>
                </select>
                <button style={{ ...S.btn, ...S.btnPrimary }}>Filtrer</button>
              </div>

              {announcements.length === 0 ? (
                <div style={S.empty}>
                  <div style={S.emptyIcon}>📢</div>
                  <p style={{ fontSize: 13 }}>Aucune annonce pour le moment.</p>
                </div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={S.tbl}>
                    <thead>
                      <tr>
                        <th style={S.tblTh}>Titre</th>
                        <th style={S.tblTh}>Matière</th>
                        <th style={S.tblTh}>Professeur</th>
                        <th style={S.tblTh}>Ville</th>
                        <th style={S.tblTh}>Mode</th>
                        <th style={S.tblTh}>Statut</th>
                        <th style={S.tblTh}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {announcements.map((announcement) => (
                        <tr key={announcement.id}>
                          <td style={S.tblTd}>{announcement.title}</td>
                          <td style={S.tblTd}>{announcement.subject}</td>
                          <td style={S.tblTd}>{announcement.teacher}</td>
                          <td style={S.tblTd}>{announcement.city}</td>
                          <td style={S.tblTd}>{announcement.mode}</td>
                          <td style={S.tblTd}>{announcement.status}</td>
                          <td style={S.tblTd}>
                            <div style={S.actionRow}>
                              <button style={{ ...S.btn, ...S.btnGhost }}>Voir</button>
                              <button style={{ ...S.btn, ...S.btnPrimary }}>Valider</button>
                              <button style={{ ...S.btn, ...S.btnDanger }}>Suspendre</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div style={S.card}>
              <div style={S.cardTitle}>Actions rapides</div>

              <div style={S.infoBox}>
                <div style={S.infoLabel}>Annonces en attente</div>
                <div style={S.infoValue}>0</div>
              </div>

              <div style={S.infoBox}>
                <div style={S.infoLabel}>Annonces actives</div>
                <div style={S.infoValue}>0</div>
              </div>

              <div style={S.infoBox}>
                <div style={S.infoLabel}>Annonces suspendues</div>
                <div style={S.infoValue}>0</div>
              </div>

              <button style={{ ...S.btn, ...S.btnPrimary, ...S.btnFull }}>
                Voir les annonces à valider
              </button>

              <button style={{ ...S.btn, ...S.btnGhost, ...S.btnFull }}>
                Contrôler les annonces actives
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminAnnouncements;