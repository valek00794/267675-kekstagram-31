function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max, noUniq) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomInteger(min, max);
    if (!noUniq || undefined) {
      if (previousValues.length >= (max - min + 1)) {
        return null;
      }
      while (previousValues.includes(currentValue)) {
        currentValue = getRandomInteger(min, max);
      }
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

export {createRandomIdFromRangeGenerator};
