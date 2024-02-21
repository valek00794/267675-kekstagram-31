import {createRandomIdFromRangeGenerator} from './utils.js';

const PHOTO_ID_RANGE = {
  min: 1,
  max: 25
};

const AVATAR_ID_RANGE = {
  min: 1,
  max: 6
};

const LIKES_COUNT_RANGE = {
  min: 15,
  max: 200
};

const COMMENTS_COUNT_RANGE = {
  min: 0,
  max: 30
};

const photoMessageMock = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const commentNamesMock = [
  'Кекс',
  'Буся',
  'Киса',
  'Ника'
];


const generateComments = () => {
  const generateCommentsCount = createRandomIdFromRangeGenerator(COMMENTS_COUNT_RANGE.min, COMMENTS_COUNT_RANGE.max)();
  const generateAvatarId = createRandomIdFromRangeGenerator(AVATAR_ID_RANGE.min, AVATAR_ID_RANGE.max, true);
  const comments = [];
  if (generateCommentsCount !== 0) {
    for (let i = 1; i <= generateCommentsCount; i++) {
      comments.push(
        {
          id: i,
          avatar: `../img/avatar-${generateAvatarId()}.svg`,
          message: photoMessageMock[Math.floor(Math.random() * photoMessageMock.length)],
          name: commentNamesMock[Math.floor(Math.random() * commentNamesMock.length)],
        }
      );
    }
  }
  return comments;
};

const generatePhotoDescription = () => {
  const descriptions = [];
  const generateLikesCount = createRandomIdFromRangeGenerator(LIKES_COUNT_RANGE.min, LIKES_COUNT_RANGE.max);

  for (let i = PHOTO_ID_RANGE.min; i <= PHOTO_ID_RANGE.max; i++) {
    descriptions.push(
      {
        id: i,
        url: `../photos/${i}.jpg`,
        description: photoMessageMock[Math.floor(Math.random() * photoMessageMock.length)],
        likes: generateLikesCount(),
        comments: generateComments(),
      }
    );
  }
  return descriptions;
};

export {generatePhotoDescription};
