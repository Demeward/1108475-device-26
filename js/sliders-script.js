var toggleSlide = document.querySelectorAll(".promo__toggle");
var showSlide = document.querySelectorAll(".promo__item");

function currentSlide(index) {
  for (var i = 0; i < showSlide.length; i++) {
    showSlide[i].classList.remove("promo__item--active");
  }
  for (var i = 0; i < toggleSlide.length; i++) {
    toggleSlide[i].classList.remove("promo__toggle--active");
  }
  toggleSlide[index - 1].classList.add("promo__toggle--active");
  showSlide[index - 1].classList.add("promo__item--active");
};
toggleSlide.forEach((item, index) =>  {
  item.addEventListener("click", () => {
    currentSlide(index + 1)
  });
});

var toggleTab = document.querySelectorAll(".services__tab-button");
var activeTab = document.querySelectorAll(".services__tab");
var showTab = document.querySelectorAll(".services__item");

function currentTab(index) {
  for (var i = 0; i < showTab.length; i++) {
    showTab[i].classList.remove("services__item--active");
  }
  for (var i = 0; i < activeTab.length; i++) {
    activeTab[i].classList.remove("services__tab--active");
  }
  activeTab[index - 1].classList.add("services__tab--active");
  showTab[index - 1].classList.add("services__item--active");
}
toggleTab.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentTab(index + 1)
  })
})
