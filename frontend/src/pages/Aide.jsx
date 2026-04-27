function Aide() {
  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <h2 style={logoStyle}>NOVADEMY</h2>
        <nav style={navStyle}>
          <a href="/" style={navLinkStyle}>Accueil</a>
          <a href="/formules" style={navLinkStyle}>Nos formules</a>
          <a href="/devis" style={navLinkStyle}>Demander un devis</a>
          <a href="/donner-cours" style={navLinkStyle}>Donner des cours</a>
          <a href="/aide" style={navLinkStyle}>Aide</a>
        </nav>
      </header>

      <main style={mainStyle}>
        <section style={heroStyle}>
          <h1 style={heroTitleStyle}>Centre d’aide</h1>
          <p style={heroTextStyle}>
            Retrouvez les réponses aux questions les plus fréquentes.
          </p>
        </section>

        <section style={faqCardStyle}>
          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>Comment demander un cours d’essai ?</h3>
            <p style={faqAnswerStyle}>
              Recherchez un professeur, ouvrez son profil puis envoyez une demande.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>Comment payer une formule ?</h3>
            <p style={faqAnswerStyle}>
              Une fois le pack proposé par le professeur, vous pouvez accéder au paiement.
            </p>
          </div>

          <div style={faqItemStyle}>
            <h3 style={faqQuestionStyle}>Comment devenir professeur ?</h3>
            <p style={faqAnswerStyle}>
              Utilisez la page “Donner des cours” puis créez votre compte enseignant.
            </p>
          </div>
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
  padding: "20px 40px",
  borderBottom: "1px solid #e5e7eb",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
};

const logoStyle = { margin: 0, color: "#6d28d9", fontSize: "30px" };
const navStyle = { display: "flex", gap: "14px", flexWrap: "wrap" };
const navLinkStyle = {
  textDecoration: "none",
  color: "#334155",
  fontWeight: "bold",
  fontSize: "17px",
  backgroundColor: "#fff",
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
};

const mainStyle = { padding: "32px 40px", maxWidth: "1100px", margin: "0 auto" };

const heroStyle = {
  background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
  color: "white",
  borderRadius: "22px",
  padding: "32px",
  marginBottom: "28px",
};

const heroTitleStyle = { margin: 0, fontSize: "42px" };
const heroTextStyle = { marginTop: "12px", fontSize: "21px", lineHeight: "1.6" };

const faqCardStyle = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "28px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const faqItemStyle = {
  paddingBottom: "18px",
  marginBottom: "18px",
  borderBottom: "1px solid #eee",
};

const faqQuestionStyle = {
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "24px",
  color: "#1e293b",
};

const faqAnswerStyle = {
  margin: 0,
  fontSize: "18px",
  color: "#64748b",
  lineHeight: "1.6",
};

export default Aide;