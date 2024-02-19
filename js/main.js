function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

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

const START_ID = 1;

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


const generateComments = (count) => {
  const comments = [];
  const generateCommentId = createRandomIdFromRangeGenerator(START_ID, count);
  const generateAvatarId = createRandomIdFromRangeGenerator(AVATAR_ID_RANGE.min, AVATAR_ID_RANGE.max);
  const id = generateCommentId();
  for (let i = 1; i <= count; i++) {
    comments.push(
      {
        id: id,
        avatar: `../img/avatar-${generateAvatarId()}.svg`,
        message: Math.floor(Math.random() * photoMessageMock.length),
        name: Math.floor(Math.random() * commentNamesMock.length),
      }
    );
  }
  return comments;
};

const generatePhotoDescription = () => {
  const descriptions = [];
  const generateLikesCount = createRandomIdFromRangeGenerator(LIKES_COUNT_RANGE.min, LIKES_COUNT_RANGE.max);
  const generateCommentsCount = createRandomIdFromRangeGenerator(LIKES_COUNT_RANGE.min, LIKES_COUNT_RANGE.max);
  for (let i = PHOTO_ID_RANGE.min; i <= PHOTO_ID_RANGE.max; i++) {
    descriptions.push(
      {
        id: i,
        url: `../photos/${i}`,
        description: Math.floor(Math.random() * photoMessageMock.length),
        likes: generateLikesCount(),
        comments: generateCommentsCount === null ? [] : generateComments(generateCommentsCount),
      }
    );
  }
  return descriptions;
};

const photoDescriptions = generatePhotoDescription();
console.log(photoDescriptions);
