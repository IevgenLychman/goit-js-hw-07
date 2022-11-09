import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");

function createImageEl(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>`;
    })
    .join("");
}

const galleryMarkupTemplate = createImageEl(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkupTemplate);

galleryContainer.addEventListener("click", selectImg);

function selectImg(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
  <img src="${e.target.dataset.source}" width="800" height="600"> `);

  instance.show();

  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
    galleryContainer.removeEventListener;
    console.log(e.code);
  });
}
