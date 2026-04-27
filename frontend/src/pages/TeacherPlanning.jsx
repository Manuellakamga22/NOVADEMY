import React, { useMemo, useState } from "react";

const S = {
  wrap: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: "100vh",
    background: "#F9FAFB",
  },

  logo: {
    fontSize: 24,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },

  logoEm: {
    color: "#2563EB",
  },

  dash: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
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
    padding: "26px 22px",
    borderBottom: "1px solid #E5E7EB",
  },

  sbRole: {
    display: "inline-block",
    marginTop: 10,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    padding: "5px 12px",
    borderRadius: 20,
    background: "#EFF6FF",
    color: "#2563EB",
  },

  sbNav: {
    padding: 14,
    flex: 1,
  },

  sbLabel: {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    color: "#9CA3AF",
    padding: "0 10px",
    margin: "18px 0 8px",
    display: "block",
  },

  sbLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 15px",
    borderRadius: 10,
    fontSize: 17,
    fontWeight: 500,
    color: "#4B5563",
    textDecoration: "none",
    marginBottom: 4,
  },

  sbLinkActive: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 15px",
    borderRadius: 10,
    fontSize: 17,
    fontWeight: 700,
    color: "#2563EB",
    background: "#EFF6FF",
    textDecoration: "none",
    marginBottom: 4,
  },

  sbBadge: {
    marginLeft: "auto",
    background: "#2563EB",
    color: "#fff",
    fontSize: 12,
    fontWeight: 700,
    padding: "3px 9px",
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
    width: 42,
    height: 42,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#2563EB,#1D4ED8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  },

  main: {
    padding: "30px 30px",
  },

  topBar: {
    marginBottom: 22,
  },

  smallTitle: {
    fontSize: 28,
    fontWeight: 800,
    color: "#111827",
    margin: 0,
  },

  smallSub: {
    fontSize: 17,
    color: "#6B7280",
    marginTop: 8,
    lineHeight: 1.7,
    maxWidth: "900px",
  },

  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 16,
    marginBottom: 22,
  },

  statAccent: {
    background: "#2563EB",
    border: "1px solid #2563EB",
    borderRadius: 16,
    padding: "22px 24px",
  },

  stat: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: "22px 24px",
  },

  statLabelW: {
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(255,255,255,.78)",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 10,
  },

  statLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: "#9CA3AF",
    textTransform: "uppercase",
    letterSpacing: ".06em",
    marginBottom: 10,
  },

  statValW: {
    fontSize: 32,
    fontWeight: 800,
    color: "#fff",
  },

  statVal: {
    fontSize: 32,
    fontWeight: 800,
    color: "#111827",
  },

  card: {
    background: "#fff",
    border: "1px solid #E5E7EB",
    borderRadius: 16,
    padding: "22px 24px",
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: 800,
    marginBottom: 14,
    color: "#111827",
  },

  noteBox: {
    background: "#EFF6FF",
    border: "1px solid #BFDBFE",
    color: "#1D4ED8",
    borderRadius: 12,
    padding: "15px 16px",
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: 16,
  },

  fieldGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginBottom: 16,
  },

  label: {
    display: "block",
    fontSize: 16,
    fontWeight: 700,
    color: "#374151",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    padding: "13px 14px",
    borderRadius: 10,
    border: "1.5px solid #E5E7EB",
    fontFamily: "inherit",
    fontSize: 16,
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
  },

  daysRow: {
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    gap: 10,
    marginBottom: 18,
  },

  dayBtn: {
    minHeight: "62px",
    borderRadius: 12,
    border: "1.5px solid #E5E7EB",
    background: "#fff",
    color: "#4B5563",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },

  dayBtnActive: {
    minHeight: "62px",
    borderRadius: 12,
    border: "1.5px solid #2563EB",
    background: "#EFF6FF",
    color: "#2563EB",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
  },

  timeNav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 16,
    flexWrap: "wrap",
  },

  navBtn: {
    border: "none",
    borderRadius: 10,
    background: "#F3F4F6",
    color: "#374151",
    fontSize: 15,
    fontWeight: 700,
    padding: "10px 14px",
    cursor: "pointer",
  },

  timeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 12,
    marginBottom: 18,
  },

  slotBtn: {
    minHeight: "64px",
    borderRadius: 12,
    border: "1.5px solid #E5E7EB",
    background: "#fff",
    color: "#4B5563",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
  },

  slotBtnActive: {
    minHeight: "64px",
    borderRadius: 12,
    border: "1.5px solid #2563EB",
    background: "#EFF6FF",
    color: "#2563EB",
    fontSize: 15,
    fontWeight: 800,
    cursor: "pointer",
  },

  btnRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 8,
  },

  btn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "inherit",
    fontSize: 15,
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

  list: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  planningItem: {
    background: "#F9FAFB",
    border: "1px solid #E5E7EB",
    borderRadius: 14,
    padding: 18,
  },

  itemTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  itemTitle: {
    margin: 0,
    fontSize: 18,
    fontWeight: 800,
    color: "#111827",
  },

  itemSub: {
    margin: "8px 0 0 0",
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 1.6,
  },

  pillRow: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap",
    marginBottom: 10,
  },

  pill: {
    fontSize: 12,
    fontWeight: 700,
    padding: "5px 11px",
    borderRadius: 999,
    display: "inline-block",
  },

  itemInfo: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 1.7,
  },

  empty: {
    textAlign: "center",
    padding: "34px 20px",
    color: "#9CA3AF",
  },

  emptyIcon: {
    fontSize: 34,
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 16,
    lineHeight: 1.7,
  },
};

function TeacherPlanning() {
  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const allHours = [
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
    "19:00-20:00",
  ];

  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedHour, setSelectedHour] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseType, setCourseType] = useState("cours_essai");
  const [availabilities, setAvailabilities] = useState([]);
  const [timePage, setTimePage] = useState(0);

  const visibleHours = useMemo(() => {
    const pageSize = 4;
    const start = timePage * pageSize;
    return allHours.slice(start, start + pageSize);
  }, [timePage]);

  const maxPage = Math.ceil(allHours.length / 4) - 1;

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((item) => item !== day)
        : [...prev, day]
    );
  };

  const resetForm = () => {
    setSelectedDays([]);
    setSelectedHour("");
    setCourseTitle("");
    setCourseType("cours_essai");
  };

  const handleAddAvailability = (e) => {
    e.preventDefault();

    if (!courseTitle || !courseType || selectedDays.length === 0 || !selectedHour) {
      alert("Veuillez compléter les informations du créneau.");
      return;
    }

    const newItem = {
      id: Date.now(),
      title: courseTitle,
      type: courseType,
      days: selectedDays,
      hour: selectedHour,
      status: "disponible",
    };

    setAvailabilities((prev) => [newItem, ...prev]);
    resetForm();
  };

  return (
    <div style={S.wrap}>
      <div style={S.dash}>
        <aside style={S.sidebar}>
          <div style={S.sbBrand}>
            <div style={{ ...S.logo, fontSize: 20 }}>
              NOVA<span style={S.logoEm}>DEMY</span>
            </div>
            <span style={S.sbRole}>Professeur</span>
          </div>

          <nav style={S.sbNav}>
            <span style={S.sbLabel}>Principal</span>
            <a style={S.sbLink} href="/teacher/dashboard">
              🏠 Tableau de bord
            </a>
            <a style={S.sbLink} href="/teacher/profile">
              👤 Mon profil
            </a>
            <a style={S.sbLink} href="/teacher/announcements">
              📢 Annonces
            </a>

            <span style={S.sbLabel}>Organisation</span>
            <a style={S.sbLinkActive} href="/teacher/planning">
              📅 Planning
            </a>
            <a style={S.sbLink} href="/teacher/requests">
              📬 Demandes <span style={S.sbBadge}>0</span>
            </a>
            <a style={S.sbLink} href="/teacher/formulas">
              📦 Nos formules
            </a>
            <a style={S.sbLink} href="/chat">
              💬 Messages <span style={S.sbBadge}>0</span>
            </a>

            <span style={S.sbLabel}>Compte</span>
            <a style={S.sbLink} href="/teacher/revenue">
              💳 Revenus
            </a>
          </nav>

          <div style={S.sbUser}>
            <div style={S.av}>P</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>
                {user ? `${user.prenom} ${user.nom}` : "Prénom Nom"}
              </div>
              <div style={{ fontSize: 14, color: "#9CA3AF", marginTop: 2 }}>
                Professeur
              </div>
            </div>
          </div>
        </aside>

        <main style={S.main}>
          <div style={S.topBar}>
            <div>
              <p style={S.smallTitle}>Mon planning</p>
              <div style={S.smallSub}>
                Sélectionnez un ou plusieurs jours, puis choisissez un créneau
                précis. Les élèves verront ensuite ces créneaux séparément.
              </div>
            </div>
          </div>

          <div style={S.stats}>
            <div style={S.statAccent}>
              <div style={S.statLabelW}>Créneaux définis</div>
              <div style={S.statValW}>{availabilities.length}</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Jours sélectionnés</div>
              <div style={S.statVal}>{selectedDays.length}</div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Cours d’essai</div>
              <div style={S.statVal}>
                {availabilities.filter((a) => a.type === "cours_essai").length}
              </div>
            </div>

            <div style={S.stat}>
              <div style={S.statLabel}>Cours classiques</div>
              <div style={S.statVal}>
                {availabilities.filter((a) => a.type === "cours").length}
              </div>
            </div>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Ajouter une disponibilité</div>

            <div style={S.noteBox}>
              Nouveau fonctionnement : vous choisissez les jours, puis vous
              naviguez avec les flèches pour afficher les horaires disponibles.
            </div>

            <form onSubmit={handleAddAvailability}>
              <div style={S.fieldGrid}>
                <div>
                  <label style={S.label}>Intitulé du cours</label>
                  <input
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                    placeholder="Ex : Cours d’essai informatique"
                    style={S.input}
                  />
                </div>

                <div>
                  <label style={S.label}>Type de cours</label>
                  <select
                    value={courseType}
                    onChange={(e) => setCourseType(e.target.value)}
                    style={S.input}
                  >
                    <option value="cours_essai">Cours d’essai</option>
                    <option value="cours">Cours</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={S.label}>Jours disponibles</label>
                <div style={S.daysRow}>
                  {days.map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      style={selectedDays.includes(day) ? S.dayBtnActive : S.dayBtn}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={S.label}>Choix du créneau</label>

                <div style={S.timeNav}>
                  <button
                    type="button"
                    onClick={() => setTimePage((prev) => Math.max(prev - 1, 0))}
                    style={S.navBtn}
                  >
                    ← Créneaux précédents
                  </button>

                  <div style={{ fontSize: 15, fontWeight: 700, color: "#4B5563" }}>
                    Plage horaire {timePage + 1} / {maxPage + 1}
                  </div>

                  <button
                    type="button"
                    onClick={() => setTimePage((prev) => Math.min(prev + 1, maxPage))}
                    style={S.navBtn}
                  >
                    Créneaux suivants →
                  </button>
                </div>

                <div style={S.timeGrid}>
                  {visibleHours.map((hour) => (
                    <button
                      key={hour}
                      type="button"
                      onClick={() => setSelectedHour(hour)}
                      style={selectedHour === hour ? S.slotBtnActive : S.slotBtn}
                    >
                      {hour}
                    </button>
                  ))}
                </div>
              </div>

              <div style={S.btnRow}>
                <button type="submit" style={{ ...S.btn, ...S.btnPrimary }}>
                  Ajouter au planning
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  style={{ ...S.btn, ...S.btnGhost }}
                >
                  Réinitialiser
                </button>
              </div>
            </form>
          </div>

          <div style={S.card}>
            <div style={S.cardTitle}>Mes disponibilités</div>

            {availabilities.length === 0 ? (
              <div style={S.empty}>
                <div style={S.emptyIcon}>📅</div>
                <div style={S.emptyText}>
                  Aucune disponibilité ajoutée pour le moment.
                </div>
              </div>
            ) : (
              <div style={S.list}>
                {availabilities.map((item) => (
                  <div key={item.id} style={S.planningItem}>
                    <div style={S.itemTop}>
                      <div>
                        <h4 style={S.itemTitle}>{item.title}</h4>
                        <p style={S.itemSub}>
                          {item.hour} • {item.type === "cours_essai" ? "Cours d’essai" : "Cours"}
                        </p>
                      </div>

                      <span
                        style={{
                          ...S.pill,
                          background: "#ECFDF5",
                          color: "#059669",
                        }}
                      >
                        Disponible
                      </span>
                    </div>

                    <div style={S.pillRow}>
                      {item.days.map((day) => (
                        <span
                          key={day}
                          style={{
                            ...S.pill,
                            background: "#EFF6FF",
                            color: "#2563EB",
                          }}
                        >
                          {day}
                        </span>
                      ))}
                    </div>

                    <div style={S.itemInfo}>
                      Ces créneaux seront proposés séparément aux élèves pour la
                      réservation des cours d’essai ou des cours payés.
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default TeacherPlanning;