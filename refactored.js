// Refactored version using array methods and better variable names

/**
 * Capitalizes the first letter of each word in a string.
 * @param {string} input - The input string.
 * @returns {string} The capitalized string.
 */
function capitalizeWords(input) {
  if (!input) return "";
  return input
    .split(" ")
    .filter(word => word.length > 0)
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

module.exports = capitalizeWords;
