
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

const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";


for (const image of images) {
  // Create a new image element
  const newImage = document.createElement("img");
  // Set the source and alt text for the image
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // Make the image focusable via the keyboard
  newImage.tabIndex = "0";
  // Append the image as a child of the thumbBar
  thumbBar.appendChild(newImage);
  // Update the display to show the image full size when a thumb is clicked
  newImage.addEventListener("click", updateDisplayedImage);
  // Update the display to show the image full size when the "Enter" key
  // is pressed after it has been focused
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}


function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () => {
    
  btn.classList.toggle("dark");
  // If the button has a "dark" class set then you will change the text to Lighten and change its functionality
  if (btn.classList.contains("dark")) {
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // Else, change text to "Darken" and make the overlay brighter
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  
});