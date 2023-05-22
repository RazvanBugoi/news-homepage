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


// Function to create an aside section with populated content
function createAside(sidebar) {
    const aside = document.createElement("aside");
    aside.classList.add("right-column");

    const contentElement = document.createElement("div");
    contentElement.classList.add("article-wrapper");

    const titleElement = document.createElement("h3");
    titleElement.classList.add("article-title");
    titleElement.textContent = sidebar.title;
    contentElement.appendChild(titleElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("article-description");
    descriptionElement.textContent = sidebar.description;
    contentElement.appendChild(descriptionElement);

    return contentElement;
}


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
const asideSection = document.querySelector(".right-column");

// Fetch and parse the JSON data
fetch("news-2023-05-16.json")
    .then((response) => response.json())
    .then((data) => {
        data.sidebar.forEach((content) => {
            const asideElement = createAside(content);
            asideSection.appendChild(asideElement);
        })

        // Populate the cards dynamically
        data.cards.forEach((card) => {
            const cardElement = createCard(card);
            cardSection.appendChild(cardElement);
        });
    })
    .catch((error) => {
        console.log("Error loading card data:", error);
    })