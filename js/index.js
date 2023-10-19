const openInstructions = document.querySelector("#instructions");
const modalOverlay = document.querySelector(".instruction-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

openInstructions.addEventListener("click", () => {
  modalOverlay.classList.toggle("active");
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modalOverlay.classList.toggle("active");
  modal.classList.toggle("active");
});
