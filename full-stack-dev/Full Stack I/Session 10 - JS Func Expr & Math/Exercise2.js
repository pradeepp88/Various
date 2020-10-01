var calculatePoints = function (wins, draws, losses) {
  return wins * 3 + draws * 1 + losses * 0; //wins*3 + draws;
};

calculatePoints(3, 4, 2); // => 13
calculatePoints(5, 0, 2); // => 15
calculatePoints(0, 0, 1); // => 0


