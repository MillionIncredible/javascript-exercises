const palindromes = function (word) {
  const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedWord = cleaned.split("").reverse().join("");
  return cleaned === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
