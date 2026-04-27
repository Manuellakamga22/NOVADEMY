import React, { useEffect, useState } from "react";

function StudentChat() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const isTeacher = user?.role === "teacher";

  const [messages, setMessages] = useState([]);
  const [formula, setFormula] = useState(null);
  const [trials, setTrials] = useState([]);

  useEffect(() => {
    fetchMessages();
    fetchFormula();
    fetchTrials();
  }, []);

  const fetchTrials = async () => {
    try {
      const endpoint = isTeacher
        ? `http://localhost:5000/api/trials/teacher/${user.id}`
        : `http://localhost:5000/api/trials/student/${user.id}`;
      const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const data = await res.json();
      if (Array.isArray(data)) setTrials(data);
    } catch {}
  };

  // je récupère le nom du contact depuis le premier essai accepté
  const getContactName = () => {
    const t = trials.find((tr) => tr.status === "accepted") || trials[0];
    if (!t) return "Contact";
    return isTeacher
      ? `${t.student_prenom} ${t.student_nom}`
      : `${t.teacher_prenom} ${t.teacher_nom}`;
  };

  const fetchMessages = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/chat/${user.id}`);
      const data = await res.json();
      setMessages(data);
    } catch {
      alert("Erreur chargement messages");
    }
  };

  const fetchFormula = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/formulas/student/${user.id}`);
      const data = await res.json();

      if (data) setFormula(data);
    } catch {}
  };

  const acceptFormula = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/formulas/accept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          proposal_id: formula.id,
          student_id: user.id
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Formule acceptée");

      window.location.href = `/payment?formula_id=${formula.formula_id}`;
    } catch {
      alert("Erreur acceptation");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Chat avec {getContactName()}</h2>

      {messages.map(m => (
        <div key={m.id}>
          <b>{m.sender}</b>
          <p>{m.message}</p>
        </div>
      ))}

      {formula && (
        <div style={{
          border: "2px solid #2563EB",
          padding: 20,
          borderRadius: 10,
          marginTop: 20
        }}>
          <h3>Formule proposée</h3>
          <p>Type : {formula.type}</p>
          <p>Durée : {formula.duration_months} mois</p>
          <p>Prix : {formula.price} €</p>

          <button onClick={acceptFormula}>
            Accepter la formule
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentChat;