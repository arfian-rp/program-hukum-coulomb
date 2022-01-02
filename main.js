MCToC = (a) => {
  return a / 1000000;
};
CMToM = (a) => {
  return a / 100;
};

//F = 9*(10**9) * a * b / (c**2)
F = (a, b, R) => {
  return (9 * 10 ** 9 * a * b) / R ** 2;
};

console.log(F(MCToC(10), MCToC(10), CMToM(3)));

//r = sqrt(9*(10**9) * a * b / c)
R = (a, b, F) => {
  return Math.sqrt((9 * 10 ** 9 * a * b) / F);
};

// console.log(R(MCToC(8), MCToC(4), 8000));

// //test
// console.log(F(MCToC(20), MCToC(24), CMToM(12)));
// console.log(F(MCToC(3), MCToC(3), CMToM(3)), F(MCToC(3), MCToC(27), CMToM(9)));

console.log(F(MCToC(12), MCToC(-4), 3));
