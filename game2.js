const choices=document.querySelectorAll(".option");
const result=document.querySelector("#move");
const scoreu=document.querySelector("#scoreu");
const scorec=document.querySelector("#scorec");


const gencompchoice=()=>{
    // generating random choice
    const option=["stone","paper","scissor"];
    const ranidx= Math.floor(Math.random()*3);
    // to obtain a index from 1 to 3 1 for stone and vice versa
    return option[ranidx];

}

const playgame= (userchoice)=>{
    
    let userscore=0;
    let compscore=0;

    console.log("user choice=" ,userchoice);
    //function to show ur choice
    const compchoice= gencompchoice();
    console.log("comp choice=" ,compchoice);
    if (userchoice==compchoice){
        result.innerText="DRAW,TRY AGAIN!";
        result.style.backgroundColor="white";
        return draw();

    }else if(userchoice=="stone"&& compchoice=="scissor"){
        console.log("user wins");
        result.innerText="YOU WIN,GOOD WORK!";
        result.style.backgroundColor="green";
        userscore++;
        scoreu.innerText=userscore;

    }else if(userchoice=="paper"&& compchoice=="stone"){
        console.log("user wins");
        result.innerText="YOU WIN,GOOD WORK!";
        result.style.backgroundColor="green";
        userscore++;
        scoreu.innerText=userscore;

    }else if(userchoice=="scissor"&& compchoice=="paper"){
        console.log("user wins");
        result.innerText="YOU WIN,GOOD WORK!";
        result.style.backgroundColor="green";
        userscore++;
        scoreu.innerText=userscore;

    }else{
        console.log("comp wins")
        result.innerText="COMP WIN,TRY AGAIN!";
        result.style.backgroundColor="red";
        compscore++;
        scorec.innerText=compscore;
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
        // shows which choice u clicked
    });
})

const draw=()=>{
    console.log("draw game");
}