var modalBtn = document.querySelector(".contacts__button");
var mapBtn = document.querySelector(".contacts__map-popup");
var modalForm = document.querySelector(".write-us");
var sendForm = document.querySelector(".write-us__form");
var mapPopup = document.querySelector(".map");
var closeForm = modalForm.querySelector(".write-us__close");
var closeMap = mapPopup.querySelector(".map__close");
var nameForm = modalForm.querySelector("[name=name]");
var emailForm = modalForm.querySelector("[name=e-mail]");
var letterForm = modalForm.querySelector("[name=letter]");


modalBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalForm.classList.add("write-us--show");
  nameForm.focus();
});

sendForm.addEventListener("submit", function(evt) {
  if (!nameForm.value || !emailForm.value || !letterForm.value) {
   evt.preventDefault();
   modalForm.classList.remove("write-us--error");
   modalForm.offsetWidth = modalForm.offsetWidth;
   modalForm.classList.add("write-us--error");   
  }
});


closeForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalForm.classList.remove("write-us--show");
  modalForm.classList.remove("write-us--error");
});

mapBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("map--show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map--show");
});

window.addEventListener("keydown",function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if(modalForm.classList.contains("write-us--show") || mapPopup.classList.contains("map--show")) {
      modalForm.classList.remove("write-us--show");
      modalForm.classList.remove("write-us--error");
      mapPopup.classList.remove("map--show");
    }
  }
});
