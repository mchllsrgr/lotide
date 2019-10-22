const letterPositions = function(sentence) {
  const results = {};
  const noSpaces = sentence.split(" ").join("");
  for (let index in noSpaces) {
    if (results[noSpaces[index]]) {
      results[noSpaces[index]].push(Number(index));
    } else {
      results[noSpaces[index]] = [Number(index)];
    }
  }
  return results;
};

module.exports = letterPositions;