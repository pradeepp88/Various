function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const helloWorlds = function (num) {
  if (!isNumeric(num)) {
    console.log("Goodbye World!");
  }
  for (var i = 0; i < num; i++) {
    console.log("Hello World!");
  }
};

helloWorlds(5);

helloWorlds(true); // Goodbye
helloWorlds("hello"); // Goodbye
helloWorlds(null); // Goodbye
helloWorlds(undefined); // Goodbye
