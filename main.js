let Q = [
  {},
  { "From how many colors a rainbow is made of ?": "7" },
  { "How many letters in the English language ?": "26" },
  { "What is the square root of 144 ?": "12" },
  { "How much a heart for an octopus ?": "3" },
  { "How many prostrations in the Koran ?": "15" },
  { "How many players does a basketball team make ?": "5" },
  { "When did the First World War take place ?": "1914" },
  { "When did the Second World War take place ?": "1939" },
  { "When did America gain independence ?": "1776" },
  { "When was the first time the Al-Aqsa Mosque was burned?": "1969" },
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



let indexQ = 0;
// indexQ += 1;
const play = () => {

  // q.innerHTML = "";
  // q.innerHTML = Object.keys(Q[0]);
  // a.innerHTML = Q[0][Object.keys(Q[0])];
  // b.innerHTML = randomAnswerN();
  // c.innerHTML = randomAnswerN();
  // d.innerHTML = randomAnswerN();

};
// const inputAn = document.querySelector("#inputAn");
// const point = document.querySelector("#dpoint");
// let points = 0;

const changeBackG = (string) =>{
  if(string === "a"){
    a.style.backgroundColor = "yellow"
    b.style.backgroundColor = "gray"
    c.style.backgroundColor = "gray"
    d.style.backgroundColor = "gray"
    inputAn.value = a.innerHTML
  }
  else if(string === "b"){
    a.style.backgroundColor = "gray"
    b.style.backgroundColor = "yellow"
    c.style.backgroundColor = "gray"
    d.style.backgroundColor = "gray"
    inputAn.value = b.innerHTML
  }
  else if(string === "c"){
    a.style.backgroundColor = "gray"
    b.style.backgroundColor = "gray"
    c.style.backgroundColor = "yellow"
    d.style.backgroundColor = "gray"
    inputAn.value = c.innerHTML
  }
  else if(string === "d"){
    a.style.backgroundColor = "gray"
    b.style.backgroundColor = "gray"
    c.style.backgroundColor = "gray"
    d.style.backgroundColor = "yellow"
    inputAn.value = d.innerHTML
  }
}

let points = 0;
const nextQ = () => {
  a.style.backgroundColor = "white"
  b.style.backgroundColor = "white"
  c.style.backgroundColor = "white"
  d.style.backgroundColor = "white"



  // console.log ("a", [Object.keys(Q[indexQ])])
//  console.log("b" , Q[indexQ+1])
//   console.log( Q[indexQ][Object.keys(Q[indexQ])[0]])
// const point = document.querySelector("#dpoint");
console.log(Q[indexQ])
if(indexQ !== 0) {indexQ -=1}

if(inputAn.value === Q[indexQ][Object.keys(Q[indexQ])[0]]){
  points += 1;
    point.innerHTML = points;
    setTimeout (function(){
    a.style.backgroundColor = "green"
  b.style.backgroundColor = "red"
  c.style.backgroundColor = "red"
  d.style.backgroundColor = "red"
       },500)
 }else{
  setTimeout (function(){
    a.style.backgroundColor = "green"
  b.style.backgroundColor = "red"
  c.style.backgroundColor = "red"
  d.style.backgroundColor = "red"
       },500)
 }
 

 indexQ +=1
  setTimeout (function(){
    
    if(indexQ +1<Q.length ){q.innerHTML = "";
    
    q.innerHTML = Object.keys(Q[indexQ])[0];
    console.log(q.innerHTML)
    if (indexQ < 6) {
      a.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
      b.innerHTML = randomAnswerN();
      c.innerHTML = randomAnswerN();
      d.innerHTML = randomAnswerN();
    }
    if (indexQ <= Q.length && indexQ>6) {
      a.innerHTML = randomAnswerY();
      b.innerHTML = randomAnswerY();
      c.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
      d.innerHTML = randomAnswerY();
    }}
    else{
      q.innerHTML = "====> The Game Was End <===="
      a.innerHTML = "Good Luck";
      b.innerHTML = "Good Luck";
      c.innerHTML = "Good Luck";
      d.innerHTML = "Good Luck";
      bn.innerHTML = "Good Luck"
    }
    
    a.style.backgroundColor = "white"
    b.style.backgroundColor = "white"
    c.style.backgroundColor = "white"
    d.style.backgroundColor = "white"
    indexQ +=1
    
  },2000)
  

  // for (let i = 0; i < Q.length; i++) {
  //   q.innerHTML = Object.keys(Q[i]);
  //   a.innerHTML = Q[i][Object.keys(Q[i])];
  // }
};


// const inputA = () => {
//   const inputAn = document.querySelector("#inputAn");
// let points = 0;
// console.log(inputAn.value)
//   if (inputAn.value == Q[indexQ][Object.keys(Q[indexQ])[0]]) {
//     console.log(points)
//     points += 1;
//     point.innerHTML = points;}

// };

// const inputNumber = document.querySelector("#inputNumber")  
// const done = document.querySelector("#done")
let lengthQ = 0 
const saveNum =()=>{
  lengthQ = inputNumber.value
Q =[]
}
// const newQ = document.querySelector("#newQ")
// const correct = document.querySelector("#correct")
const addQ =()=>{
  lengthQ -=1
  newQuestion = newQ.value
  correctAnswer = correct.value
  Q.push({newQuestion : correctAnswer})
}
