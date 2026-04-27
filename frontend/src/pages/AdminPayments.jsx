import React from "react";

const S = {
  wrap: { fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#F9FAFB" },
  logo: { fontSize: 20, fontWeight: 800 },
  logoEm: { color: "#2563EB" },

  dash: { display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "100vh" },

  sidebar: {
    background: "#fff",
    borderRight: "1px solid #E5E7EB",
    display: "flex",
    flexDirection: "column",
    position: "sticky",
    top: 0,
    height: "100vh"
  },

  sbBrand: { padding: 20, borderBottom: "1px solid #E5E7EB" },
  sbRole: {
    marginTop: 6,
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    padding: "2px 10px",
    borderRadius: 20,
    background: "#FEF2F2",
    color: "#DC2626"
  },

  sbNav: { padding: 12, flex: 1 },

  sbLink: {
    display: "flex",
    padding: "10px 12px",
    borderRadius: 8,
    fontSize: 13,
    color: "#4B5563",
    textDecoration: "none"
  },

  sbLinkActive: {
    display: "flex",
    padding: "10px 12px",
    borderRadius: 8,
    fontSize: 13,
    color: "#2563EB",
    background: "#EFF6FF",
    textDecoration: "none"
  },

  main: { padding: 30 },

  pageTitle: { fontSize: 24, fontWeight: 800 },
  pageSub: { fontSize: 14, color: "#9CA3AF", marginBottom: 20 },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 14,
    marginBottom: 20
  },

  stat: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 18
  },

  statAccent: {
    background: "#2563EB",
    borderRadius: 12,
    padding: 18,
    color: "white"
  },

  tbl: { width: "100%", borderCollapse: "collapse" },

  tblTh: {
    textAlign: "left",
    padding: 10,
    fontSize: 11,
    color: "#9CA3AF",
    borderBottom: "1px solid #E5E7EB"
  },

  tblTd: {
    padding: 12,
    borderBottom: "1px solid #F3F4F6",
    fontSize: 13
  },

  btn: {
    padding: "8px 14px",
    borderRadius: 8,
    fontSize: 12,
    border: "none",
    cursor: "pointer"
  },

  btnPrimary: { background: "#2563EB", color: "white" },
  btnDanger: { background: "#FEF2F2", color: "#DC2626" }
};

function AdminPayments() {

  const payments = []; // backend plus tard

  return (
    <div style={S.wrap}>
      <div style={S.dash}>
        <aside style={S.sidebar}>
          <div style={S.sbBrand}>
            <div style={S.logo}>NOVA<span style={S.logoEm}>DEMY</span></div>
            <span style={S.sbRole}>Admin</span>
          </div>

          <nav style={S.sbNav}>
            <a href="/admin/dashboard" style={S.sbLink}>📊 Dashboard</a>
            <a href="/admin/announcements" style={S.sbLink}>📢 Annonces</a>
            <a href="/admin/payments" style={S.sbLinkActive}>💳 Paiements</a>
          </nav>
        </aside>

        <main style={S.main}>
          <div style={S.pageTitle}>Paiements plateforme</div>
          <div style={S.pageSub}>Suivi des paiements après acceptation formule</div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div>Total paiements</div>
              <h2>0 €</h2>
            </div>

            <div style={S.stat}>
              <div>Commissions</div>
              <h2>0 €</h2>
            </div>

            <div style={S.stat}>
              <div>Paiements validés</div>
              <h2>0</h2>
            </div>

            <div style={S.stat}>
              <div>Remboursements</div>
              <h2>0</h2>
            </div>
          </div>

          <table style={S.tbl}>
            <thead>
              <tr>
                <th style={S.tblTh}>Élève</th>
                <th style={S.tblTh}>Professeur</th>
                <th style={S.tblTh}>Montant</th>
                <th style={S.tblTh}>Formule</th>
                <th style={S.tblTh}>Statut</th>
                <th style={S.tblTh}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan="6" style={{ padding: 20, textAlign: "center", color: "#9CA3AF" }}>
                    Aucun paiement pour le moment
                  </td>
                </tr>
              ) : (
                payments.map(p => (
                  <tr key={p.id}>
                    <td style={S.tblTd}>{p.student}</td>
                    <td style={S.tblTd}>{p.teacher}</td>
                    <td style={S.tblTd}>{p.amount}€</td>
                    <td style={S.tblTd}>{p.formula}</td>
                    <td style={S.tblTd}>{p.status}</td>
                    <td style={S.tblTd}>
                      <button style={{ ...S.btn, ...S.btnPrimary }}>Voir</button>
                      <button style={{ ...S.btn, ...S.btnDanger }}>Rembourser</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

        </main>
      </div>
    </div>
  );
}

export default AdminPayments;