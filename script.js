let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let usersco=document.querySelector("#user-score");
let compsco=document.querySelector("#comp-score");
const getcompchoice = ()=>{
    const arr=["rock", "paper", "scissors"];
    const i=Math.floor(Math.random()*3);
    return arr[i];
}
const drawgame=()=>{
    console.log("Game is Draw");
    msg.innerText="Game is Drawn";
    msg.style.backgroundColor="#081b31";
}
const showwin =(userwin)=>{
    if(userwin===true){
        console.log("You Win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
        userscore++;
        console.log("userscore:",userscore);
        usersco.innerText=userscore;
    }
    else{
        console.log("OOPS,You Loose!")
        msg.innerText="OOPS!You loose, Try again";
        msg.style.backgroundColor="red";
        compscore++;
        console.log("compscore:",compscore);
        compsco.innerText=compscore;
    }
}
const playgame=(userchoice)=>{
    console.log("Your Choice:",userchoice);
    const compchoice=getcompchoice();
    console.log("Computer choice:",compchoice);
    if(userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice===paper?true:false;
        }
        else if(userchoice==="paper") {
            userwin=compchoice==="stone"?true:false;
        }
        else{
            userwin=compchoice==="paper"?true:false;
        }
        showwin(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})
