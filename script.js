// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Data to populate card contents

// Define an array of card data
const cardData = [
    {
        img: "./assets/images/image-retro-pcs.jpg",
        number: "01",
        title: "Reviving Retro PCs",
        content: "What happens when old PCs are given modern upgrades?",
    },
    {
        img: "./assets/images/image-top-laptops.jpg",
        number: "02",
        title: "Top 10 Laptops of 2022",
        content: "Our best picks for various needs and budgets.",
    },
    {
        img: "./assets/images/image-gaming-growth.jpg",
        number: "03",
        title: "The Growth of Gaming",
        content: "How the pandemic has sparked fresh opportunities.",
    }
];

// Function to create a card component with populated content
function createCard(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    const imgElement = document.createElement("img");
    imgElement.src = card.img;
    cardElement.appendChild(imgElement);

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    const numberElement = document.createElement("p");
    numberElement.classList.add("post-number");
    numberElement.textContent = card.number;
    contentElement.appendChild(numberElement);

    const titleElement = document.createElement("h4");
    titleElement.classList.add("post-title");
    titleElement.textContent = card.title;
    contentElement.appendChild(titleElement);

    const contentTextElement = document.createElement("p");
    contentTextElement.classList.add("post-description");
    contentTextElement.textContent = card.content;
    contentElement.appendChild(contentTextElement);

    cardElement.appendChild(contentElement);

    return cardElement;
}

// Get the card section element
const cardSection = document.querySelector(".cards");

// Populate the cards dynamically
cardData.forEach((card) => {
    const cardElement = createCard(card);
    cardSection.appendChild(cardElement);
})