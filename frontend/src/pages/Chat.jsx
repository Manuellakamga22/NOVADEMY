import React, { useMemo, useState } from "react";

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
    gridTemplateColumns: "260px 320px 1fr",
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

  convPanel: {
    background: "#fff",
    borderRight: "1px solid #E5E7EB",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
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
    background: "#EFF6FF",
    color: "#2563EB",
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
    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 15,
    flexShrink: 0,
  },

  panelHead: {
    padding: "20px 18px",
    borderBottom: "1px solid #E5E7EB",
  },

  panelTitle: {
    fontSize: 18,
    fontWeight: 800,
    color: "#111827",
    marginBottom: 6,
  },

  panelSub: {
    fontSize: 13,
    color: "#9CA3AF",
    lineHeight: 1.5,
  },

  convList: {
    flex: 1,
    overflowY: "auto",
    padding: 12,
  },

  convCard: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    cursor: "pointer",
  },

  convCardActive: {
    background: "#EFF6FF",
    border: "1px solid #BFDBFE",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    cursor: "pointer",
  },

  convTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 8,
  },

  convName: {
    fontSize: 15,
    fontWeight: 700,
    color: "#111827",
  },

  convTime: {
    fontSize: 12,
    color: "#9CA3AF",
  },

  convPreview: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 1.5,
  },

  chatHead: {
    padding: "18px 22px",
    borderBottom: "1px solid #E5E7EB",
    background: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },

  chatHeadLeft: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  chatName: {
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
  },

  chatSub: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 2,
  },

  chatBody: {
    flex: 1,
    overflowY: "auto",
    padding: "22px",
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },

  bubbleMe: {
    alignSelf: "flex-end",
    maxWidth: "72%",
    background: "#DBEAFE",
    color: "#1E3A8A",
    borderRadius: 14,
    padding: "12px 14px",
    fontSize: 15,
    lineHeight: 1.6,
  },

  bubbleOther: {
    alignSelf: "flex-start",
    maxWidth: "72%",
    background: "#fff",
    border: "1px solid #E5E7EB",
    color: "#374151",
    borderRadius: 14,
    padding: "12px 14px",
    fontSize: 15,
    lineHeight: 1.6,
  },

  formulaBox: {
    alignSelf: "flex-start",
    width: "100%",
    maxWidth: "560px",
    background: "#fff",
    border: "1px solid #BFDBFE",
    borderRadius: 16,
    padding: 18,
    boxShadow: "0 6px 16px rgba(37,99,235,0.06)",
  },

  formulaTitle: {
    fontSize: 17,
    fontWeight: 800,
    color: "#111827",
    marginBottom: 10,
  },

  formulaDesc: {
    fontSize: 14,
    color: "#6B7280",
    lineHeight: 1.6,
    marginBottom: 12,
  },

  formulaGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginBottom: 12,
  },

  formulaItem: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 10,
    padding: 12,
  },

  formulaLabel: {
    fontSize: 12,
    color: "#9CA3AF",
    marginBottom: 4,
  },

  formulaValue: {
    fontSize: 14,
    fontWeight: 700,
    color: "#111827",
  },

  inputArea: {
    background: "#fff",
    borderTop: "1px solid #E5E7EB",
    padding: "16px 22px",
  },

  textarea: {
    width: "100%",
    minHeight: 82,
    padding: "12px 14px",
    borderRadius: 10,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 15,
    outline: "none",
    boxSizing: "border-box",
    resize: "vertical",
    background: "#fff",
  },

  btnRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 12,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: 14,
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

  btnSuccess: {
    background: "#059669",
    color: "#fff",
  },

  btnWarning: {
    background: "#EFF6FF",
    color: "#2563EB",
  },

  select: {
    padding: "10px 12px",
    borderRadius: 10,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 14,
    background: "#fff",
  },

  empty: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9CA3AF",
    fontSize: 15,
    textAlign: "center",
    padding: 30,
  },
};

function Chat() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const isTeacher = user?.role === "teacher";
  const roleLabel = isTeacher ? "Professeur" : "Élève";

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: isTeacher ? "Rosalie Manuella" : "Mme Chantal",
      subtitle: isTeacher ? "Élève" : "Professeur",
      preview: isTeacher
        ? "Bonjour, je confirme mon intérêt pour le cours d’essai."
        : "Bonjour, j’aimerais progresser en algorithmique.",
      time: "14:10",
      messages: [
        {
          id: 1,
          sender: "other",
          type: "text",
          content: isTeacher
            ? "Bonjour, je confirme mon intérêt pour le cours d’essai."
            : "Bonjour, j’aimerais progresser en algorithmique.",
        },
        {
          id: 2,
          sender: "me",
          type: "text",
          content: isTeacher
            ? "Très bien, nous pouvons échanger ici après l’acceptation."
            : "Très bien, nous pouvons échanger ici après l’acceptation.",
        },
      ],
      formula:
        !isTeacher
          ? {
              id: 101,
              type: "Suivi régulier",
              duration: "3 mois",
              hours: "2 h / semaine",
              price: "120 €",
              status: "proposee",
            }
          : null,
    },
    {
      id: 2,
      name: isTeacher ? "Karine Étudiante" : "M. Dupont",
      subtitle: isTeacher ? "Élève" : "Professeur",
      preview: "Merci pour votre retour, je regarde les créneaux.",
      time: "Hier",
      messages: [
        {
          id: 1,
          sender: "other",
          type: "text",
          content: "Merci pour votre retour, je regarde les créneaux.",
        },
      ],
      formula: null,
    },
  ]);

  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [content, setContent] = useState("");
  const [selectedFormula, setSelectedFormula] = useState("Suivi régulier");

  const formulas = [
    {
      label: "Suivi régulier",
      duration: "3 mois",
      hours: "2 h / semaine",
      price: "120 €",
    },
    {
      label: "Pack 10 heures",
      duration: "1 pack",
      hours: "10 h",
      price: "150 €",
    },
    {
      label: "Classe virtuelle",
      duration: "1 mois",
      hours: "1 h / semaine",
      price: "80 €",
    },
  ];

  const currentConversation = useMemo(
    () =>
      conversations.find((conversation) => conversation.id === selectedConversationId) ||
      null,
    [conversations, selectedConversationId]
  );

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!content.trim() || !currentConversation) return;

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversationId
          ? {
              ...conv,
              preview: content,
              time: "À l’instant",
              messages: [
                ...conv.messages,
                {
                  id: Date.now(),
                  sender: "me",
                  type: "text",
                  content,
                },
              ],
            }
          : conv
      )
    );

    setContent("");
  };

  const handleProposeFormula = () => {
    if (!currentConversation) return;

    const formulaData = formulas.find((f) => f.label === selectedFormula);
    if (!formulaData) return;

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversationId
          ? {
              ...conv,
              preview: "Une formule a été proposée dans la conversation.",
              time: "À l’instant",
              formula: {
                id: Date.now(),
                type: formulaData.label,
                duration: formulaData.duration,
                hours: formulaData.hours,
                price: formulaData.price,
                status: "proposee",
              },
              messages: [
                ...conv.messages,
                {
                  id: Date.now(),
                  sender: "me",
                  type: "text",
                  content: "Je vous ai proposé une formule dans cette conversation.",
                },
              ],
            }
          : conv
      )
    );
  };

  const handleAcceptFormula = () => {
    if (!currentConversation?.formula) return;

    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === selectedConversationId
          ? {
              ...conv,
              preview: "Formule acceptée, redirection vers paiement.",
              time: "À l’instant",
              formula: {
                ...conv.formula,
                status: "acceptee",
              },
              messages: [
                ...conv.messages,
                {
                  id: Date.now(),
                  sender: "me",
                  type: "text",
                  content: "J’accepte la formule proposée.",
                },
              ],
            }
          : conv
      )
    );

    alert("Formule acceptée. Redirection vers le paiement.");
    window.location.href = "/payment";
  };

  if (!user) {
    return <div style={{ padding: 40 }}>Vous devez être connecté.</div>;
  }

  return (
    <div style={S.wrap}>
      <div style={S.dash}>
        <aside style={S.sidebar}>
          <div style={S.sbBrand}>
            <div style={{ ...S.logo, fontSize: 20 }}>
              NOVA<span style={S.logoEm}>DEMY</span>
            </div>
            <span style={S.sbRole}>{roleLabel}</span>
          </div>

          <nav style={S.sbNav}>
            <span style={S.sbLabel}>Principal</span>

            {isTeacher ? (
              <>
                <a style={S.sbLink} href="/teacher/dashboard">🏠 Tableau de bord</a>
                <a style={S.sbLink} href="/teacher/profile">👤 Mon profil</a>
                <a style={S.sbLink} href="/teacher/announcements">📢 Annonces</a>

                <span style={S.sbLabel}>Organisation</span>
                <a style={S.sbLink} href="/teacher/planning">📅 Planning</a>
                <a style={S.sbLink} href="/teacher/requests">
                  📬 Demandes <span style={S.sbBadge}>0</span>
                </a>
                <a style={S.sbLink} href="/teacher/formulas">📦 Nos formules</a>
                <a style={S.sbLinkActive} href="/chat">
                  💬 Messages <span style={S.sbBadge}>0</span>
                </a>

                <span style={S.sbLabel}>Compte</span>
                <a style={S.sbLink} href="/teacher/revenue">💳 Revenus</a>
              </>
            ) : (
              <>
                <a style={S.sbLink} href="/student/dashboard">🏠 Tableau de bord</a>
                <a style={S.sbLink} href="/student/profile">👤 Mon profil</a>
                <a style={S.sbLink} href="/search">🔍 Trouver un prof</a>

                <span style={S.sbLabel}>Mes cours</span>
                <a style={S.sbLink} href="/student/requests">
                  📄 Mes demandes <span style={S.sbBadge}>0</span>
                </a>
                <a style={S.sbLink} href="/student/courses">📚 Mes cours</a>
                <a style={S.sbLink} href="/student/calendar">📅 Mon calendrier</a>
                <a style={S.sbLinkActive} href="/chat">
                  💬 Messages <span style={S.sbBadge}>0</span>
                </a>

                <span style={S.sbLabel}>Compte</span>
                <a style={S.sbLink} href="/student/packs">📦 Formules</a>
                <a style={S.sbLink} href="/payment">💳 Paiements</a>
              </>
            )}
          </nav>

          <div style={S.sbUser}>
            <div style={S.av}>{isTeacher ? "P" : "É"}</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>
                {`${user.prenom} ${user.nom}`}
              </div>
              <div style={{ fontSize: 13, color: "#9CA3AF", marginTop: 2 }}>
                {roleLabel}
              </div>
            </div>
          </div>
        </aside>

        <section style={S.convPanel}>
          <div style={S.panelHead}>
            <div style={S.panelTitle}>
              {isTeacher ? "Mes élèves" : "Mes professeurs"}
            </div>
            <div style={S.panelSub}>
              Cliquez sur une conversation pour afficher les détails du chat.
            </div>
          </div>

          <div style={S.convList}>
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedConversationId(conv.id)}
                style={
                  selectedConversationId === conv.id
                    ? S.convCardActive
                    : S.convCard
                }
              >
                <div style={S.convTop}>
                  <div style={S.convName}>{conv.name}</div>
                  <div style={S.convTime}>{conv.time}</div>
                </div>
                <div style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 6 }}>
                  {conv.subtitle}
                </div>
                <div style={S.convPreview}>{conv.preview}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={S.main}>
          {currentConversation ? (
            <>
              <div style={S.chatHead}>
                <div style={S.chatHeadLeft}>
                  <div style={S.av}>
                    {currentConversation.name?.charAt(0)?.toUpperCase() || "C"}
                  </div>
                  <div>
                    <div style={S.chatName}>{currentConversation.name}</div>
                    <div style={S.chatSub}>
                      {currentConversation.subtitle} • Conversation ouverte
                    </div>
                  </div>
                </div>

                {isTeacher ? (
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <select
                      value={selectedFormula}
                      onChange={(e) => setSelectedFormula(e.target.value)}
                      style={S.select}
                    >
                      {formulas.map((formula) => (
                        <option key={formula.label} value={formula.label}>
                          {formula.label}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={handleProposeFormula}
                      style={{ ...S.btn, ...S.btnWarning }}
                    >
                      Proposer une formule
                    </button>
                  </div>
                ) : null}
              </div>

              <div style={S.chatBody}>
                {currentConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    style={message.sender === "me" ? S.bubbleMe : S.bubbleOther}
                  >
                    {message.content}
                  </div>
                ))}

                {currentConversation.formula ? (
                  <div style={S.formulaBox}>
                    <div style={S.formulaTitle}>Formule proposée</div>
                    <div style={S.formulaDesc}>
                      Vous avez reçu une proposition de formule dans cette conversation.
                    </div>

                    <div style={S.formulaGrid}>
                      <div style={S.formulaItem}>
                        <div style={S.formulaLabel}>Type</div>
                        <div style={S.formulaValue}>
                          {currentConversation.formula.type}
                        </div>
                      </div>

                      <div style={S.formulaItem}>
                        <div style={S.formulaLabel}>Durée</div>
                        <div style={S.formulaValue}>
                          {currentConversation.formula.duration}
                        </div>
                      </div>

                      <div style={S.formulaItem}>
                        <div style={S.formulaLabel}>Volume</div>
                        <div style={S.formulaValue}>
                          {currentConversation.formula.hours}
                        </div>
                      </div>

                      <div style={S.formulaItem}>
                        <div style={S.formulaLabel}>Prix</div>
                        <div style={S.formulaValue}>
                          {currentConversation.formula.price}
                        </div>
                      </div>
                    </div>

                    <div style={S.btnRow}>
                      {!isTeacher &&
                      currentConversation.formula.status === "proposee" ? (
                        <button
                          type="button"
                          onClick={handleAcceptFormula}
                          style={{ ...S.btn, ...S.btnSuccess }}
                        >
                          Accepter et payer
                        </button>
                      ) : null}

                      <span
                        style={{
                          ...S.btn,
                          ...(currentConversation.formula.status === "acceptee"
                            ? S.btnGhost
                            : S.btnWarning),
                          cursor: "default",
                        }}
                      >
                        {currentConversation.formula.status === "acceptee"
                          ? "Formule acceptée"
                          : "En attente de réponse"}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>

              <div style={S.inputArea}>
                <form onSubmit={handleSendMessage}>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Écrivez votre message..."
                    style={S.textarea}
                  />

                  <div style={S.btnRow}>
                    <button type="submit" style={{ ...S.btn, ...S.btnPrimary }}>
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div style={S.empty}>
              Sélectionnez une conversation pour afficher le détail du chat.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Chat;