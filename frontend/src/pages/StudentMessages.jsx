function StudentMessages() {
  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <div>
          <h2 style={logoStyle}>NOVADEMY</h2>
          <p style={subtitleStyle}>Messages</p>
        </div>

        <nav style={navStyle}>
          <a href="/student/dashboard" style={navLinkStyle}>Dashboard Élève</a>
          <a href="/student/profile" style={navLinkStyle}>Profil</a>
          <a href="/student/requests" style={navLinkStyle}>Mes demandes</a>
          <a href="/" style={navLinkStyle}>Accueil</a>
        </nav>
      </header>

      <main style={mainStyle}>
        <section style={heroCardStyle}>
          <div>
            <h1 style={heroTitleStyle}>Mes messages</h1>
            <p style={heroTextStyle}>
              Échangez avec votre professeur après validation de la demande
              de cours d’essai.
            </p>
          </div>

          <div style={heroBadgeStyle}>
            <span style={heroBadgeLabelStyle}>Conversations</span>
            <span style={heroBadgeValueStyle}>0</span>
          </div>
        </section>

        <section style={layoutStyle}>
          <aside style={sidebarStyle}>
            <h3 style={sectionTitleStyle}>Conversations</h3>
            <div style={conversationCardStyle}>
              <p style={textStyle}>Aucune conversation active pour le moment.</p>
            </div>
          </aside>

          <section style={chatPanelStyle}>
            <h3 style={sectionTitleStyle}>Discussion</h3>

            <div style={warningBoxStyle}>
              ⚠️ Les coordonnées personnelles (mail, téléphone, réseaux sociaux)
              ne doivent pas être échangées dans le chat.
            </div>

            <div style={messagesBoxStyle}>
              <p style={textStyle}>Aucun message pour le moment.</p>
            </div>

            <div style={inputAreaStyle}>
              <textarea
                style={textareaStyle}
                placeholder="Écrivez votre message..."
              />
              <div style={buttonRowStyle}>
                <button style={secondaryButtonStyle}>Vérifier le message</button>
                <button style={primaryButtonStyle}>Envoyer</button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #f5f3ff 0%, #f8fafc 40%, #f7f7f7 100%)",
  fontFamily: "Arial, sans-serif",
};

const headerStyle = {
  background: "rgba(255,255,255,0.95)",
  backdropFilter: "blur(8px)",
  padding: "20px 40px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
};

const logoStyle = {
  margin: 0,
  color: "#6d28d9",
  fontSize: "28px",
};

const subtitleStyle = {
  margin: "4px 0 0 0",
  color: "#64748b",
  fontSize: "15px",
};

const navStyle = {
  display: "flex",
  gap: "14px",
  flexWrap: "wrap",
};

const navLinkStyle = {
  textDecoration: "none",
  color: "#334155",
  fontWeight: "bold",
  fontSize: "17px",
  backgroundColor: "#ffffff",
  padding: "8px 12px",
  borderRadius: "8px",
  border: "1px solid #e2e8f0",
};

const mainStyle = {
  padding: "32px 40px 48px",
  maxWidth: "1300px",
  margin: "0 auto",
};

const heroCardStyle = {
  background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
  color: "white",
  borderRadius: "20px",
  padding: "28px",
  marginBottom: "28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
  boxShadow: "0 18px 40px rgba(124,58,237,0.20)",
};

const heroTitleStyle = {
  margin: 0,
  fontSize: "38px",
};

const heroTextStyle = {
  marginTop: "12px",
  marginBottom: 0,
  fontSize: "20px",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.9)",
};

const heroBadgeStyle = {
  backgroundColor: "rgba(255,255,255,0.14)",
  border: "1px solid rgba(255,255,255,0.25)",
  borderRadius: "16px",
  padding: "16px 20px",
  minWidth: "150px",
};

const heroBadgeLabelStyle = {
  display: "block",
  fontSize: "14px",
};

const heroBadgeValueStyle = {
  display: "block",
  marginTop: "8px",
  fontSize: "24px",
  fontWeight: "bold",
};

const layoutStyle = {
  display: "grid",
  gridTemplateColumns: "320px 1fr",
  gap: "20px",
};

const sidebarStyle = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const chatPanelStyle = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const sectionTitleStyle = {
  fontSize: "28px",
  marginTop: 0,
  marginBottom: "12px",
  color: "#111827",
};

const conversationCardStyle = {
  backgroundColor: "#fafafa",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "18px",
};

const warningBoxStyle = {
  backgroundColor: "#fff7ed",
  border: "1px solid #fdba74",
  color: "#9a3412",
  borderRadius: "12px",
  padding: "14px",
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "18px",
};

const messagesBoxStyle = {
  minHeight: "260px",
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "20px",
  marginBottom: "20px",
};

const inputAreaStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
};

const textareaStyle = {
  width: "100%",
  minHeight: "120px",
  padding: "14px",
  fontSize: "18px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  boxSizing: "border-box",
  resize: "vertical",
  backgroundColor: "#f8fafc",
};

const textStyle = {
  fontSize: "20px",
  color: "#555",
  lineHeight: "1.6",
};

const buttonRowStyle = {
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const primaryButtonStyle = {
  padding: "14px 18px",
  fontSize: "18px",
  fontWeight: "bold",
  background: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  boxShadow: "0 12px 24px rgba(109,40,217,0.18)",
};

const secondaryButtonStyle = {
  padding: "14px 18px",
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: "#e5e7eb",
  color: "#111827",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default StudentMessages;