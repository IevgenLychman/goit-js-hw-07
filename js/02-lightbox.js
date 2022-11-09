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

const gallery = new SimpleLightbox(".gallery a");

// import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// const galleryEl = document.querySelector("ul.gallery");

// function makeGallery(arr) {
//   const galleryItemsMarkup = arr
//     .map(({ preview, original, description }) => {
//       return `<li><a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" title="${description}" /></a></li>`;
//     })
//     .join("");
//   return galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
// }

// makeGallery(galleryItems);
// const gallery = new SimpleLightbox("ul.gallery a");
// // console.log(galleryItems);
