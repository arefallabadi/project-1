let Q = [
  { "From how many colors a rainbow is made of ?": 7 },
  { "How many letters in the English language ?": 26 },
  { "What is the square root of 144 ?": 12 },
  { "How much a heart for an octopus ?": 3 },
  { "How many prostrations in the Koran ?": 15 },
  { "How many players does a basketball team make ?": 5 },
  { "When did the First World War take place ?": 1914 },
  { "When did the Second World War take place ?": 1939 },
  { "When did America gain independence ?": 1776 },
  { "When was the first time the Al-Aqsa Mosque was burned?": 1969 },
];

let answerN = [10, 0, 1, 22, 35, , 11, 13, 36, 45, 6];
let answerY = [1999, 1545, 2003, 1852, 1962, 1400, 1752, 1325, 1977, 1235];

const randomAnswerN = function (array) {
  array = answerN[Math.floor(Math.random() * 10)];
  if (array !== undefined) {
    return array;
  } else {
    return 0;
  }
};

const randomAnswerY = function (array) {
  array = answerY[Math.floor(Math.random() * 10)];
  if (array !== undefined) {
    return array;
  } else {
    return 1925;
  }
};

const q = document.querySelector("#q");
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const d = document.querySelector("#d");

let indexQ = 0;
const play1 = document.querySelector("#aa");
paly1.addEventListener("click", () => {
  alert("The Game Will Start");
});

const play = (Q) => {
  q.innerHTML = "";
  q.innerHTML = Object.keys(Q[indexQ]);
  a.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
  b.innerHTML = randomAnswerN();
  c.innerHTML = randomAnswerN();
  d.innerHTML = randomAnswerN();
};

const nextQ = (Q, indexQ) => {
  indexQ += 1;
  q.innerHTML = Object.keys(Q[indexQ]);
  if (indexQ <= 6) {
    a.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
    b.innerHTML = randomAnswerN();
    c.innerHTML = randomAnswerN();
    d.innerHTML = randomAnswerN();
  }
  if (indexQ <= Q.length) {
    a.innerHTML = randomAnswerY();
    b.innerHTML = randomAnswerY();
    c.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
    d.innerHTML = randomAnswerY();
  }

  // for (let i = 0; i < Q.length; i++) {
  //   q.innerHTML = Object.keys(Q[i]);
  //   a.innerHTML = Q[i][Object.keys(Q[i])];
  // }
};
const inputAn = document.querySelector("#inputAn");
const point = document.querySelector("#dpoint");
let points = 0;

const inputA = () => {
  if (inputAn.innerHTML === Q[indexQ][Object.keys(Q[indexQ])]) {
    points += 1;
    point.innerHTML = points;
  } else {
    points += 0;
  }
};
