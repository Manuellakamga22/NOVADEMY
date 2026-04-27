import React from "react";

const S = {
wrap:{fontFamily:"Segoe UI",minHeight:"100vh",background:"#F9FAFB"},
logo:{fontSize:20,fontWeight:800},
logoEm:{color:"#2563EB"},
dash:{display:"grid",gridTemplateColumns:"240px 1fr",minHeight:"100vh"},
sidebar:{background:"#fff",borderRight:"1px solid #E5E7EB",display:"flex",flexDirection:"column",height:"100vh"},
sbBrand:{padding:20,borderBottom:"1px solid #E5E7EB"},
sbRole:{fontSize:10,fontWeight:700,background:"#FEF2F2",color:"#DC2626",padding:"2px 10px",borderRadius:20},
sbNav:{padding:12,flex:1},
sbLink:{padding:"10px 12px",display:"block",textDecoration:"none",color:"#4B5563"},
sbLinkActive:{padding:"10px 12px",display:"block",background:"#EFF6FF",color:"#2563EB",fontWeight:600,textDecoration:"none"},
main:{padding:30},
title:{fontSize:26,fontWeight:800},
grid:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginTop:25},
card:{background:"#fff",padding:20,borderRadius:12,border:"1px solid #E5E7EB"},
stat:{fontSize:30,fontWeight:800},
label:{fontSize:12,color:"#9CA3AF",marginBottom:8}
};

function AdminStats(){
return(
<div style={S.wrap}>
<div style={S.dash}>

<aside style={S.sidebar}>
<div style={S.sbBrand}>
<div style={S.logo}>NOVA<span style={S.logoEm}>DEMY</span></div>
<div style={S.sbRole}>Admin</div>
</div>

<nav style={S.sbNav}>
<a href="/admin/dashboard" style={S.sbLink}>Dashboard</a>
<a href="/admin/announcements" style={S.sbLink}>Annonces</a>
<a href="/admin/trials" style={S.sbLink}>Essais</a>
<a href="/admin/payments" style={S.sbLink}>Paiements</a>
<a href="/admin/stats" style={S.sbLinkActive}>Statistiques</a>
<a href="/admin/settings" style={S.sbLink}>Paramètres</a>
</nav>
</aside>

<main style={S.main}>
<div style={S.title}>Statistiques plateforme</div>

<div style={S.grid}>
<div style={S.card}>
<div style={S.label}>Cours réalisés</div>
<div style={S.stat}>0</div>
</div>

<div style={S.card}>
<div style={S.label}>Essais validés</div>
<div style={S.stat}>0%</div>
</div>

<div style={S.card}>
<div style={S.label}>Revenus plateforme</div>
<div style={S.stat}>0 €</div>
</div>

<div style={S.card}>
<div style={S.label}>Heures prof</div>
<div style={S.stat}>0 h</div>
</div>

<div style={S.card}>
<div style={S.label}>Commission moyenne</div>
<div style={S.stat}>0%</div>
</div>

<div style={S.card}>
<div style={S.label}>Profs actifs</div>
<div style={S.stat}>0</div>
</div>

<div style={S.card}>
<div style={S.label}>Élèves actifs</div>
<div style={S.stat}>0</div>
</div>

<div style={S.card}>
<div style={S.label}>Classes collectives</div>
<div style={S.stat}>0</div>
</div>
</div>

</main>
</div>
</div>
);
}

export default AdminStats;