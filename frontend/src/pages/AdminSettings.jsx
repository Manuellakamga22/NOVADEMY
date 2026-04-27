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
card:{background:"#fff",padding:20,borderRadius:12,border:"1px solid #E5E7EB",marginTop:20},
label:{fontSize:14,fontWeight:600,marginBottom:6},
input:{width:"100%",padding:10,border:"1px solid #E5E7EB",borderRadius:8,marginBottom:12},
btn:{background:"#2563EB",color:"#fff",padding:12,border:"none",borderRadius:8,fontWeight:700}
};

function AdminSettings(){
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
<a href="/admin/stats" style={S.sbLink}>Statistiques</a>
<a href="/admin/settings" style={S.sbLinkActive}>Paramètres</a>
</nav>
</aside>

<main style={S.main}>
<div style={S.title}>Paramètres plateforme</div>

<div style={S.card}>
<div style={S.label}>Commission débutant (%)</div>
<input style={S.input} defaultValue="15"/>

<div style={S.label}>Commission intermédiaire (%)</div>
<input style={S.input} defaultValue="12"/>

<div style={S.label}>Commission avancé (%)</div>
<input style={S.input} defaultValue="7"/>

<div style={S.label}>Commission expert (%)</div>
<input style={S.input} defaultValue="3"/>

<button style={S.btn}>Enregistrer</button>
</div>

<div style={S.card}>
<div style={S.label}>Seuil classe collective</div>
<input style={S.input} defaultValue="5 élèves"/>

<button style={S.btn}>Mettre à jour</button>
</div>

</main>
</div>
</div>
);
}

export default AdminSettings;