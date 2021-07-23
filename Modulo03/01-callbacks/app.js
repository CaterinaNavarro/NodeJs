/* eslint-disable no-console */
const arr = [];

const addArray = (value, callback) => {
  setTimeout(() => {
    console.log(`\nElement ${value} is added.`);
    arr.push(value);
    callback();
  }, 5000);
};

const readArray = () => {
  console.log('Array elements:');
  arr.forEach((item) => console.log(`${item}`));
};

const initCallback = () => {
  addArray(7, readArray);
  addArray(6, readArray);
  addArray(5, readArray);
  addArray(4, readArray);
  addArray(3, readArray);
};

initCallback();
