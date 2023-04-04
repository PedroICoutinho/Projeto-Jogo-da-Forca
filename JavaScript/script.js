
const celulas = document.querySelectorAll(".cell")
let isCircleTurn = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
   
const checkForWin = (currentPlayer)=>{
    return winningConditions.some((combination) =>{
        return combination.every((index) => {
            return celulas[index].textContent === currentPlayer;
        })
       
    })
}

const swapTurns = ()=>{
    isCircleTurn = !isCircleTurn
}

function fazendoX(celulaDaJogada){
    const x = document.createElement("p")
    x.innerHTML = "X"
    celulaDaJogada.appendChild(x)
}

function fazendoO(celulaDaJogada){
    const o = document.createElement("p")
    o.innerHTML = "O"
    celulaDaJogada.appendChild(o)
}

const jogada = (event)=>{ 
    const toAdd = isCircleTurn? "x" : "o"
    const newElement = document.createElement("p")
    newElement.innerHTML = toAdd;
   

    if(toAdd === "x"){
        fazendoX(event.target)
    } else {
        fazendoO(event.target)
    }

    const vitoria = checkForWin(toAdd);
    if (vitoria){
        console.log("winner")
    }


    swapTurns();
    

}



for(const cell of celulas){
    cell.addEventListener("click", jogada, {once: true});
}