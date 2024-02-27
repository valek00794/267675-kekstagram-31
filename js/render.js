import {photoDescriptions} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();

photoDescriptions.forEach(({id, url, description, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').dataset.id = id;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.appendChild(pictureElement);
});

export {pictureFragment};
