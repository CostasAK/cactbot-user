"use strict";

if (!Options.UserFunctions) {
  Options.UserFunctions = {};
}

Options.UserFunctions.random_integer = (num) => Math.floor(Math.random() * num);

Options.UserFunctions.random_array_element = (arr) => {
  if (arr.every((e) => e.length === 2 && Number.isInteger(e[1]) && e[1] >= 0)) {
    const chances = arr.map((e, i) => Array(e[1]).fill(i)).flat(1);
    return arr[
      chances[Options.UserFunctions.random_integer(chances.length)]
    ][0];
  }
  return arr[Options.UserFunctions.random_integer(arr.length)];
};
