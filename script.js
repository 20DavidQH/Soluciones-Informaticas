/* =========================================================
   CONFIGURACIÓN — edita estos datos con los tuyos
   ========================================================= */
const CONFIG = {
  // Número de WhatsApp en formato internacional, SIN "+", SIN espacios ni guiones.
  // Ejemplo Perú: 51987654321   |   Ejemplo Colombia: 573001234567
  whatsappNumber: "51929496405",

  // Texto que aparecerá visible en la sección de contacto
  whatsappDisplay: "+51 929 496 405",

  // Mensaje que llega ya escrito cuando alguien presiona los botones de WhatsApp
  whatsappMessage: "Hola 👋 Vi tu página web y me interesaron tus servicios de sistemas. 💻 ¿Podrías brindarme más información?"
};

document.addEventListener("DOMContentLoaded", () => {
  // Construye el enlace de WhatsApp y lo aplica a todos los botones
  const link = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  document.querySelectorAll(".js-whatsapp-link").forEach((el) => {
    el.setAttribute("href", link);
  });

  // Muestra el número configurado en la sección de contacto
  document.querySelectorAll(".js-whatsapp-display").forEach((el) => {
    el.textContent = CONFIG.whatsappDisplay;
  });

  // Año dinámico en el pie de página
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menú móvil
  const toggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  if (toggle && navList) {
    toggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    navList.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
