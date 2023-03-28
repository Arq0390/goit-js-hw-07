import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
let galleryMarkup = "";

galleryItems.forEach((item) => {
  galleryMarkup += `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `;
});

galleryList.innerHTML = galleryMarkup;

galleryList.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalUrl = event.target.dataset.source;
  const lightbox = basicLightbox.create(`
    <img src="${originalUrl}">`);
  lightbox.show();
});

window.addEventListener("keydown", handleKeyDown);
const handleKeyDown = (event) => {
  if (event.key === "Escape") {
    lightbox.close();
    window.removeEventListener("keydown", onEscKeyPress);
  }
};
