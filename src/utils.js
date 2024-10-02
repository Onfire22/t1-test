export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateId = (count = 0) => {
  return () => {
    return count += 1;
  };
};

export const getRandomId = generateId();
