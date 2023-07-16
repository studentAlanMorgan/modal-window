// modal_code.js
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");
modal.style.display = "block";

function closeModalAndOpenKeenEye() {
    modal.style.display = "none";
    window.open("https://keeneye.be/", "_blank");
}
