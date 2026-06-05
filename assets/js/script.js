// Bloom — Week Project Settimana V
//
// Aggiungi qui il codice JavaScript se serve (es. modale, scroll handler).
// Per la Versione Base spesso non serve niente: tutto si fa in CSS.

const header = document.getElementById("site-header");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });