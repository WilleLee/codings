const solution = function (arr) {
  const result = [];
  const map = new Map();
  arr
    .sort((a, b) => a - b)
    .map((num) => {
      !map.has(num) ? map.set(num, 1) : map.set(num, map.get(num) + 1);
    });
  map.forEach((value) => {
    if (value >= 2) result.push(value);
  });
  return result.length ? result : [-1];
};
