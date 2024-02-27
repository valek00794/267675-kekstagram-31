import {photoDescriptions} from './data.js';

//const userModalOpenElement = document.querySelectorAll('.pictures');
//const userModalCloseElement = document.querySelector('.setup-close');
const picturesContainer = document.querySelector('.pictures');
const bigPictureContainer = document.querySelector('.big-picture');
const closeBigPictureContainer = bigPictureContainer.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureContainer.querySelector('.big-picture__img img');

picturesContainer.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    const ptoho = photoDescriptions.find((photo) => photo.id === +evt.target.dataset.id);
    bigPictureContainer.classList.remove('hidden');
    bigPictureImg.src = ptoho.url;
  }
});

closeBigPictureContainer.addEventListener('click', () => {
  bigPictureContainer.classList.add('hidden');
});

