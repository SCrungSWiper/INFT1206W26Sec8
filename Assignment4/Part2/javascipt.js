
//    Name: Lucas Gilmour
//    Filename: javascript.js
//    Current date: 2026-04-04
//    description: Assignment 4, Image Gallery


const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");


const images = [
  { filename: "pic1.jpg", alt: "Closeup of a human eye" },
  { filename: "pic2.jpg", alt: "Rock that looks like a wave" },
  { filename: "pic3.jpg", alt: "Purple and white pansies" },
  { filename: "pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
  { filename: "pic5.jpg", alt: "Large moth on a leaf" },
];


function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () => {
  // If the button has a "dark" class set then you will change the text to Lighten and change its functionality
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Else, change text to "Darken" and make the overlay brighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // Toggle the class ready for the next button press
  btn.classList.toggle("dark");
});