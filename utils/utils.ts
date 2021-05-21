const stringAndIndexToHash = (string, index) => {
  let hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    const char = string.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }

  return hash * index;
};

const createEnum = (obj) => {
  return Object.freeze({ ...obj });
};

export { createEnum, stringAndIndexToHash };
