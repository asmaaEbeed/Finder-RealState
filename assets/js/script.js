// let u = document.getElementById("langSwitcher");
// const setStorageTheme = (e, t) => localStorage.setItem(e, t);

// u.addEventListener("click", () => {
//   document.getElementById("langSwitcher").innerHTML === "Ar"
//     ? (u.innerHTML = "En")
//     : (u.innerHTML = "Ar");

//     document.getElementById("langSwitcher").innerHTML === "Ar"
//       ? setStorageTheme("direction", "rtl")
//       : setStorageTheme("direction", "ltr");
// });

// const e = (e) => localStorage.getItem(e)

// const a = e("direction") || "ltr";
// ((e) => {
//     document.documentElement.setAttribute("dir", e);
//     const t = document.getElementById("theme-styles"),
//       r = t.getAttribute("href");
//     "rtl" === e
//       ? t.setAttribute("href", r.replace("theme.min.css", "theme.rtl.min.css"))
//       : t.setAttribute("href", r.replace("theme.rtl.min.css", "theme.min.css"));
//   })(a),
//     window.addEventListener("DOMContentLoaded", () => {
//       const l = document.getElementById("customizer-styles"),
//         d = {
//           root: l.sheet.cssRules[0],
//           dark: l.sheet.cssRules[1],
//           primaryBtn: l.sheet.cssRules[2],
//           successBtn: l.sheet.cssRules[3],
//           warningBtn: l.sheet.cssRules[4],
//           dangerBtn: l.sheet.cssRules[5],
//           infoBtn: l.sheet.cssRules[6],
//           primaryOutlineBtn: l.sheet.cssRules[7],
//           successOutlineBtn: l.sheet.cssRules[8],
//           warningOutlineBtn: l.sheet.cssRules[9],
//           dangerOutlineBtn: l.sheet.cssRules[10],
//           infoOutlineBtn: l.sheet.cssRules[11],
//         },