const removeDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) == index);

module.exports = removeDuplicates;