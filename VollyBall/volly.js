let h2 = document.querySelector("h2");
let A2P = document.querySelector("#A2P");
let A3P = document.querySelector("#A3P");
let teamA= document.querySelector(".teamA");
let B= document.querySelector(".B");
let count = 0;
A2P.addEventListener("click",(e)=>{
    count+=2;
    h2.innerHTML = count;
});
A3P.addEventListener("click",(e)=>{
    count+=3;
    h2.innerHTML = count;
});
teamA.addEventListener("click",(e)=>{
    A2P.disabled  = true;
    A3P.disabled = true;
});
let B2P = document.querySelector("#B2P");
let B3P = document.querySelector("#B3P");
let teamB = document.querySelector(".teamB");
let counts = 0;
B2P.addEventListener("click",(e)=>{
    counts+=2;
    B.innerHTML = counts;
});
B3P.addEventListener("click",(e)=>{
    counts+=3;
    B.innerHTML = counts;
});
teamB.addEventListener("click",(e)=>{
    B2P.disabled  = true;
    B3P.disabled = true;
});
let result = document.querySelector(".result");
let para = document.querySelector("p")
result.addEventListener("click",(e)=>{
    let teamAScore = parseInt(h2.innerHTML);
    let teamBScore = parseInt(B.innerHTML);
    A2P.disabled  = true;
    A3P.disabled = true;
    B2P.disabled  = true;
    B3P.disabled = true;
    console.log(teamAScore,teamBScore)
    if (teamAScore > teamBScore) {
        para.innerHTML = "Team A WON";
    } else if(teamAScore < teamBScore){
        para.innerHTML = "Team B WON";
    }
    else{
        para.innerHTML = "Match Draw!!!";   
    }
});