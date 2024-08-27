const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const cards = document.querySelectorAll(".card");

const handleButtonClick = (e) => {
  const card = e.target.closest('.card');
  const targetSection = e.target.getAttribute("data-section");
  const section = card.querySelector(targetSection);
  targetSection !== "#about" ? card.classList.add("is-active") : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  const cardSections = card.querySelectorAll(".card-section");
  const cardButtons = card.querySelectorAll(".card-buttons button");
  cardSections.forEach((s) => s.classList.remove("is-active"));
  cardButtons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});
