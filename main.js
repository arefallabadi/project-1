let Q

if(!!localStorage.getItem("questions")){
  Q =  JSON.parse(localStorage.getItem("questions"))

}else{Q= [
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
];}



 


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

const play = () => {
};
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

console.log(Q[indexQ])
if(indexQ !== 0) {indexQ -=1}

if(inputAn.value === Q[indexQ][Object.keys(Q[indexQ])[0]]){
  points += 1;
    point.innerHTML = points;
    setTimeout (()=>{
    a.style.backgroundColor = "green"
  b.style.backgroundColor = "red"
  c.style.backgroundColor = "red"
  d.style.backgroundColor = "red"
       },500)
 }else if(indexQ>0){
  setTimeout (()=>{
    a.style.backgroundColor = "green"
  b.style.backgroundColor = "red"
  c.style.backgroundColor = "red"
  d.style.backgroundColor = "red"
       },500)
 }
 

 indexQ +=1
  setTimeout (()=>{
    
    if(indexQ +1<=Q.length ){q.innerHTML = "";
    
    q.innerHTML = Object.keys(Q[indexQ])[0];
    console.log(q.innerHTML)
    if (indexQ <= 6) {
      a.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
      b.innerHTML = randomAnswerN();
      c.innerHTML = randomAnswerN();
      d.innerHTML = randomAnswerN();
    }
    if (indexQ <= Q.length && indexQ>6) {
      a.innerHTML = Q[indexQ][Object.keys(Q[indexQ])];
      b.innerHTML = randomAnswerY();
      c.innerHTML = randomAnswerY();
      d.innerHTML = randomAnswerY();
    }}
    else{
      q.innerHTML = "==> The Game Was End <=="
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
  
 
};


// const inputNumber = document.querySelector("#inputNumber")  
// const done = document.querySelector("#done")
let lengthQ = 0 
const saveNum =()=>{
  lengthQ = inputNumber.value
Q =[{}]
}
// const newQ = document.querySelector("#newQ")
// const correct = document.querySelector("#correct")
let x
const addQ =()=>{
  lengthQ -=1
  // newQuestion = newquestion.value
  // correctAnswer = correct.value
  // Q.push({ newQuestion : correctAnswer})
  let obj = {}
  key = newquestion.value
  obj[key] = correct.value
  console.log(newquestion.value)
  console.log(correct.value)
  console.log(obj)
  Q.push(obj)
  console.log(Q)
  localStorage.setItem("questions",JSON.stringify(Q))
  x = JSON.parse(localStorage.getItem("questions"))
}


function timedText() {
  setTimeout(()=>{ timer.value="20 seconds" }, 3000);
  setTimeout(()=>{ timer.value="19 seconds" }, 4000);
  setTimeout(()=>{ timer.value="18 seconds" }, 5000);
  setTimeout(()=>{ timer.value="17 seconds" }, 6000);
  setTimeout(()=>{ timer.value="16 seconds" }, 7000);
  setTimeout(()=>{ timer.value="15 seconds" }, 8000);
  setTimeout(()=>{ timer.value="14 seconds" }, 9000);
  setTimeout(()=>{ timer.value="13 seconds" }, 10000);
  setTimeout(()=>{ timer.value="12 seconds" }, 11000);
  setTimeout(()=>{ timer.value="11 seconds" }, 12000);
  setTimeout(()=>{ timer.value="10 seconds" }, 13000);
  setTimeout(()=>{ timer.value="9 seconds" }, 14000);
  setTimeout(()=>{ timer.value="8 seconds" }, 15000);
  setTimeout(()=>{ timer.value="7 seconds" }, 16000);
  setTimeout(()=>{ timer.value="6 seconds" }, 17000);
  setTimeout(()=>{ timer.value="5 seconds" }, 18000);
  setTimeout(()=>{ timer.value="4 seconds" }, 19000);
  setTimeout(()=>{ timer.value="3 seconds" }, 20000);
  setTimeout(()=>{ timer.value="2 seconds" }, 21000);
  setTimeout(()=>{ timer.value="1 seconds" }, 22000);
}

const newGame =()=>{
  if (x !== undefined)
  Q=x
}

// const newGame = ()=>{
//   if (questions !== undefined){
    
//   }

// }

const reSit =()=>{
  localStorage.removeItem("questions")
  setTimeout(()=>alert("The Game Was Resit"),2000)
} 
// localStorage.removeItem("questions")