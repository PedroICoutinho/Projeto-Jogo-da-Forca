
const celulas = document.querySelectorAll(".cell")

let isCircleTurn = true;




function checkForWin(currentPlayer) {

                                            /*Win para o X*/
    /*Horizontal*/
    if(celulas[0].innerText === "X" && celulas[1].innerText === "X" && celulas[2].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)   
    }
    if(celulas[3].innerText === "X" && celulas[4].innerText === "X" && celulas[5].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)     
    }
    if(celulas[6].innerText === "X" && celulas[7].innerText === "X" && celulas[8].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)   
    }
    /*Vertical*/
    if(celulas[0].innerText === "X" && celulas[3].innerText === "X" && celulas[6].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)    
    }
    if(celulas[1].innerText === "X" && celulas[4].innerText === "X" && celulas[7].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)     
    }
    if(celulas[2].innerText === "X" && celulas[5].innerText === "X" && celulas[8].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)     
    }
    /*Diagonal*/
    if(celulas[0].innerText === "X" && celulas[4].innerText === "X" && celulas[8].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10)    
    }
    if(celulas[2].innerText === "X" && celulas[4].innerText === "X" && celulas[6].innerText === "X"){
        setTimeout(function() {
            window.alert("X ganhou!");
          }, 10) 
    }
                                        /*WIN PARA O*/

     /*Horizontal*/
     if(celulas[0].innerText === "O" && celulas[1].innerText === "O" && celulas[2].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)     
    }
    if(celulas[3].innerText === "O" && celulas[4].innerText === "O" && celulas[5].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)    
    }
     if(celulas[6].innerText === "O" && celulas[7].innerText === "O" && celulas[8].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)     
    }
     /*Vertical*/
     if(celulas[0].innerText === "O" && celulas[3].innerText === "O" && celulas[6].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)     
     }
    if(celulas[1].innerText === "O" && celulas[4].innerText === "O" && celulas[7].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)   
    }
     if(celulas[2].innerText === "O" && celulas[5].innerText === "O" && celulas[8].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)    
    }
    /*Diagonal*/
    if(celulas[0].innerText === "O" && celulas[4].innerText === "O" && celulas[8].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)     
    }
     if(celulas[2].innerText === "O" && celulas[4].innerText === "O" && celulas[6].innerText === "O"){
        setTimeout(function() {
            window.alert("O ganhou!");
          }, 10)   
    }
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
    const toAdd = isCircleTurn? "X" : "O"
    const newElement = document.createElement("p")
    newElement.innerHTML = toAdd;
   

    if(toAdd === "X"){
        fazendoX(event.target)
    } else {
        fazendoO(event.target)
    }

    
    checkForWin(toAdd)

    swapTurns();
    

}



for(const cell of celulas){
    cell.addEventListener("click", jogada, {once: true});
}