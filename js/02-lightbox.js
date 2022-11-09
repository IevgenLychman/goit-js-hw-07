import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkupTemplate = createImageEl(galleryItems);

function createImageEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>`;
    })
    .join("");
}
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkupTemplate);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
