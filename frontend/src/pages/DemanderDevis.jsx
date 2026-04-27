import { useState } from "react";

function DemanderDevis() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    matiere: "",
    niveau: "",
    format: "",
    ville: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre demande de devis a bien été envoyée.");
    setForm({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      matiere: "",
      niveau: "",
      format: "",
      ville: "",
      message: "",
    });
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <div>
          <h2 style={logoStyle}>NOVADEMY</h2>
          <p style={subtitleStyle}>Demander un devis</p>
        </div>

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
          <div style={{ maxWidth: "760px" }}>
            <h1 style={heroTitleStyle}>Recevoir une proposition adaptée</h1>
            <p style={heroTextStyle}>
              Décrivez votre besoin pour recevoir un devis selon la matière, le
              niveau, le format du cours et votre organisation.
            </p>
          </div>

          <div style={heroBadgeStyle}>
            <span style={heroBadgeLabelStyle}>Réponse</span>
            <span style={heroBadgeValueStyle}>Personnalisée</span>
          </div>
        </section>

        <section style={formCardStyle}>
          <h3 style={sectionTitleStyle}>Votre demande</h3>

          <form onSubmit={handleSubmit}>
            <div style={gridStyle}>
              <div style={fieldStyle}>
                <label style={labelStyle}>Nom</label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Votre nom"
                />
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Prénom</label>
                <input
                  name="prenom"
                  value={form.prenom}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Votre prénom"
                />
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Votre email"
                />
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Téléphone</label>
                <input
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Votre téléphone"
                />
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Matière</label>
                <input
                  name="matiere"
                  value={form.matiere}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Ex : Mathématiques"
                />
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Niveau</label>
                <select
                  name="niveau"
                  value={form.niveau}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Choisir un niveau</option>
                  <option>Primaire</option>
                  <option>Collège</option>
                  <option>Lycée</option>
                  <option>Supérieur</option>
                </select>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Format souhaité</label>
                <select
                  name="format"
                  value={form.format}
                  onChange={handleChange}
                  style={inputStyle}
                >
                  <option value="">Choisir un format</option>
                  <option>Présentiel</option>
                  <option>Visio</option>
                  <option>Les deux</option>
                </select>
              </div>

              <div style={fieldStyle}>
                <label style={labelStyle}>Ville</label>
                <input
                  name="ville"
                  value={form.ville}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="Ex : Paris"
                />
              </div>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Expliquez votre besoin</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                style={textareaStyle}
                placeholder="Décrivez vos objectifs, vos contraintes, la fréquence souhaitée et toute information utile."
              />
            </div>

            <div style={infoBoxStyle}>
              <h4 style={infoTitleStyle}>Pourquoi demander un devis ?</h4>
              <p style={infoTextStyle}>
                Cela permet de vous orienter vers la formule la plus adaptée à
                votre besoin, à votre niveau et à votre rythme.
              </p>
            </div>

            <button type="submit" style={buttonStyle}>
              Envoyer la demande
            </button>
          </form>
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
  fontSize: "30px",
};

const subtitleStyle = {
  margin: "4px 0 0 0",
  color: "#64748b",
  fontSize: "16px",
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
  backgroundColor: "#fff",
  padding: "10px 14px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
  boxShadow: "0 6px 16px rgba(0,0,0,0.04)",
};

const mainStyle = {
  padding: "32px 40px 48px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const heroStyle = {
  background: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
  color: "white",
  borderRadius: "24px",
  padding: "34px",
  marginBottom: "28px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "22px",
  flexWrap: "wrap",
  boxShadow: "0 22px 50px rgba(124,58,237,0.22)",
};

const heroTitleStyle = {
  margin: 0,
  fontSize: "42px",
  lineHeight: "1.2",
};

const heroTextStyle = {
  marginTop: "14px",
  marginBottom: 0,
  fontSize: "21px",
  lineHeight: "1.7",
  color: "rgba(255,255,255,0.92)",
};

const heroBadgeStyle = {
  minWidth: "170px",
  padding: "18px 22px",
  borderRadius: "18px",
  backgroundColor: "rgba(255,255,255,0.16)",
  border: "1px solid rgba(255,255,255,0.24)",
};

const heroBadgeLabelStyle = {
  display: "block",
  fontSize: "15px",
};

const heroBadgeValueStyle = {
  display: "block",
  marginTop: "8px",
  fontSize: "28px",
  fontWeight: "bold",
};

const formCardStyle = {
  background: "white",
  border: "1px solid #e5e7eb",
  borderRadius: "22px",
  padding: "28px",
  boxShadow: "0 14px 30px rgba(0,0,0,0.06)",
};

const sectionTitleStyle = {
  fontSize: "30px",
  marginTop: 0,
  marginBottom: "20px",
  color: "#111827",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "18px",
};

const fieldStyle = {
  marginBottom: "18px",
};

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#374151",
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  fontSize: "18px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  backgroundColor: "#f8fafc",
  boxSizing: "border-box",
  outline: "none",
};

const textareaStyle = {
  width: "100%",
  minHeight: "160px",
  padding: "16px",
  fontSize: "18px",
  borderRadius: "12px",
  border: "1px solid #cbd5e1",
  backgroundColor: "#f8fafc",
  boxSizing: "border-box",
  resize: "vertical",
  outline: "none",
};

const infoBoxStyle = {
  marginTop: "8px",
  marginBottom: "20px",
  background: "linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)",
  border: "1px solid #ddd6fe",
  borderRadius: "16px",
  padding: "18px",
};

const infoTitleStyle = {
  marginTop: 0,
  marginBottom: "10px",
  fontSize: "22px",
  color: "#312e81",
};

const infoTextStyle = {
  margin: 0,
  fontSize: "18px",
  color: "#475569",
  lineHeight: "1.7",
};

const buttonStyle = {
  padding: "16px 22px",
  border: "none",
  borderRadius: "12px",
  background: "linear-gradient(135deg, #6d28d9 0%, #8b5cf6 100%)",
  color: "white",
  fontSize: "19px",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 14px 28px rgba(109,40,217,0.20)",
};

export default DemanderDevis;