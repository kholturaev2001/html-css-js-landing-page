const images = [
  "./assets/images/image 1.jpg",
  "./assets/images/image 2.jpg",
  "./assets/images/image 3.jpg",
  "./assets/images/image 4.jpg",
];

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

let currentImageIndex = 0;
let intervalRef;

function startInterval() {
  intervalRef = setInterval(() => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  }, 3500);
}

function setCurrentImageIndex(index) {
  const carouselImages = document.querySelectorAll(".carousel-image");
  const carouselIndicators = document.querySelectorAll(".carousel-indicator");

  carouselImages[currentImageIndex].classList.remove("active");
  carouselImages[index].classList.add("active");

  carouselIndicators[currentImageIndex].classList.remove("active");
  carouselIndicators[index].classList.add("active");

  currentImageIndex = index;
  resetInterval();
}

function handlePrevClick() {
  setCurrentImageIndex(
    currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
  );
}

function handleNextClick() {
  setCurrentImageIndex((currentImageIndex + 1) % images.length);
}

function handleButtonSelect(index) {
  setCurrentImageIndex(index);
}

function resetInterval() {
  clearInterval(intervalRef);
  startInterval();
}

startInterval();

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);

// increasing and descreasing functions

const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const productCount = document.getElementById("productCount");

incrementBtn.addEventListener("click", () => {
  let count = parseInt(productCount.textContent);
  count++;
  productCount.textContent = count;
});

decrementBtn.addEventListener("click", () => {
  let count = parseInt(productCount.textContent);
  if (count > 1) {
    count--;
    productCount.textContent = count;
  }
});





// burger function

const burger = document.getElementById("burger");
const navList = document.querySelector(".nav_list");

burger.addEventListener("click", () => {
  navList.classList.toggle("open");
  burger.classList.toggle("open");
});
