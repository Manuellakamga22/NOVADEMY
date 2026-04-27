
function NosFormules() {
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
          <h1 style={heroTitleStyle}>Nos formules</h1>
          <p style={heroTextStyle}>
            Des solutions adaptées selon vos besoins et votre rythme.
          </p>
        </section>

        <section style={cardsGridStyle}>
          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Cours d’essai gratuit</h3>
            <p style={cardTextStyle}>
              Premier échange avec le professeur pour définir vos besoins.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Suivi régulier</h3>
            <p style={cardTextStyle}>
              Accompagnement sur 3 mois avec suivi pédagogique structuré.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Pack d’heures</h3>
            <p style={cardTextStyle}>
              Formule flexible sur 1 mois selon vos disponibilités.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={cardTitleStyle}>Classe en groupe</h3>
            <p style={cardTextStyle}>
              Cours collectif pour élèves avec objectifs et horaires compatibles.
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

const mainStyle = { padding: "32px 40px", maxWidth: "1200px", margin: "0 auto" };

const heroStyle = {
  background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
  color: "white",
  borderRadius: "22px",
  padding: "32px",
  marginBottom: "28px",
  boxShadow: "0 20px 45px rgba(124,58,237,0.20)",
};

const heroTitleStyle = { margin: 0, fontSize: "42px" };

const heroTextStyle = { marginTop: "12px", fontSize: "21px", lineHeight: "1.6" };

const cardsGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "18px",
};

const cardStyle = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  padding: "24px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
};

const cardTitleStyle = { marginTop: 0, fontSize: "24px", color: "#1e293b" };

const cardTextStyle = { fontSize: "18px", color: "#64748b", lineHeight: "1.6" };

export default NosFormules;