const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
let currentLang = "ar";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
    const value = el.dataset[lang];
    if (value !== undefined) el.innerHTML = value;
  });
  langToggle.textContent = lang === "ar" ? "English" : "العربية";
  document.title = lang === "ar"
    ? "ورشة الدرب | صيانة مواتير الكهرباء والمعدات الخفيفة"
    : "Al Darb Workshop | Electric Motor & Light Equipment Repair";
  document.getElementById("visitorName").placeholder = lang === "ar" ? "اكتب اسمك" : "Your name";
  document.getElementById("visitorPhone").placeholder = lang === "ar" ? "05xxxxxxxx" : "05xxxxxxxx";
  document.getElementById("visitorMessage").placeholder = lang === "ar" ? "اكتب تفاصيل العطل أو الخدمة المطلوبة..." : "Describe the issue or service you need...";
}
langToggle.addEventListener("click", () => setLanguage(currentLang === "ar" ? "en" : "ar"));
menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mainNav.classList.remove("open")));

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("visitorName").value.trim();
  const phone = document.getElementById("visitorPhone").value.trim();
  const message = document.getElementById("visitorMessage").value.trim();
  if (!name || !message) return;
  const text = currentLang === "ar"
    ? `مرحباً ورشة الدرب، اسمي ${name}${phone ? `، ورقم التواصل ${phone}` : ""}.\nالاستفسار: ${message}`
    : `Hello Al Darb Workshop, my name is ${name}${phone ? `, my phone number is ${phone}` : ""}.\nEnquiry: ${message}`;
  window.open(`https://wa.me/966562746244?text=${encodeURIComponent(text)}`, "_blank", "noopener");
});
setLanguage("ar");
