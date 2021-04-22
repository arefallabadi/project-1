let Q =[
{q1 : "a"},
{q2 : "b"},
{q3 : "c"},
{q4 : "d"},
{q5 : "e"},
{q6 : "f"},
{q7 : "g"},
{q8 : "h"},
{q9 : "i"},
{q10: "j"},
]

const q = document.querySelector("#q") 
const a = document.querySelector("#a")
const b = document.querySelector("#b")
const c = document.querySelector("#c")
const d = document.querySelector("#d")

  const play= (Q)=> {
  for(let i =0 ; i < Q.length ; i++ ){
      q.innerHTML=Object.keys(Q[i])
      a.innerHTML=Q[i][Object.keys(Q[i])]
  }
 }
 