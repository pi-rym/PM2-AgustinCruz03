(()=>{var e={501:e=>{e.exports=({title:e,year:t,director:r,duration:n,genre:a,rate:o,poster:i})=>{const s=document.createElement("div"),c=document.createElement("h3"),d=document.createElement("img"),l=document.createElement("div");c.innerHTML=`<a href="">${e}</a>`,d.src=i;const u=a.join(", ");l.innerHTML=`<p>Año: ${t}<br>\n      Director: ${r}<br>\n      Duration: ${n}<br>\n      Género: ${u}<br>\n      Calificación: ${o}\n      `,s.classList.add("target"),c.classList.add("titleTarget"),d.classList.add("imgTarget"),l.classList.add("descripcionTarget"),s.append(c,d,l),document.getElementById("sectionPeliculas").appendChild(s)}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{const e=r(501);$.get("https://students-api.2.us-1.fl0.io/movies",((t,r)=>{t.forEach(e)})),console.log("estoy probando que tengo que actualizar el bundle")})()})();