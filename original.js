// Original function to capitalize first letter of each word in a string

function capitalizeWords(str) {
  if (str === "") return "";
  let words = str.split(" ");
  let result = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      result += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + " ";
    }
  }
  return result.trim();
}

module.exports = capitalizeWords;
