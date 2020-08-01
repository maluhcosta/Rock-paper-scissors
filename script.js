let scoreUser = 0
let scoreHouse = 0
let rePlay = 0
let choiceUser;



function choiceRock() {
  choiceUser = 0;
  
}

function choicePaper() {
  choiceUser = 1;
  
}

function choiceScissors() {
  choiceUser = 2;
  
}

// tela comparar



function compareResult() {
  
  document.querySelector("#you").innerHTML = scoreUser;
  document.querySelector("#house").innerHTML = scoreHouse;
    
  
  let computerChoice = Math.floor(Math.random()*3);

  
  // score

  if (choiceUser === 0) { // lógica para pedra
    
    document.querySelector(".icon").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-rock.svg?v=1595196430887";
    document.querySelector(".icon").style.border = "20px solid #ffc43d";
    document.querySelector("#img-result").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-rock.svg?v=1595196430887";
    document.querySelector(".user").style.border = "20px solid #ffc43d";
    document.querySelector(".choice-user").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-rock.svg?v=1595196430887";
    
      if (computerChoice === 1) { // papel
        // you lose 
        
          document.querySelector("#result-game").innerText = "You lose!";
          document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-paper.svg?v=1595196429821";
          document.querySelector(".win").style.border = "20px solid #06d6a0";
          scoreHouse = scoreHouse + 1;
        
          document.querySelector(".win").style.boxShadow = "0 0 0 25px hsl(229, 25%, 31%), 0 0 0 50px hsl(228, 29%, 26%),0 0 0 75px hsl(228, 36%, 25%),0 0 0 100px hsl(229, 42%, 22%)";
        

      } else if (computerChoice == 2) { // tesoura
        // you win

          document.querySelector("#result-game").innerText = "You win!";
          document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-scissors.svg?v=1595196432406";
          document.querySelector(".win").style.border = "20px solid #ef476f";
          scoreUser = scoreUser + 1;
        
          document.querySelector(".user").style.boxShadow = "0 0 0 25px hsl(229, 25%, 31%), 0 0 0 50px hsl(228, 29%, 26%),0 0 0 75px hsl(228, 36%, 25%),0 0 0 100px hsl(229, 42%, 22%)";


      } else {
        // draw

           document.querySelector("#result-game").innerText = "Draw!";
           document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-rock.svg?v=1595196430887";
           document.querySelector(".win").style.border = "20px solid #ffc43d";

      }
      
    
  } else if (choiceUser === 1) { // lógica para papel
    
    document.querySelector(".icon").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-paper.svg?v=1595196429821";
    document.querySelector(".icon").style.border = "20px solid #06d6a0";
    document.querySelector("#img-result").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-paper.svg?v=1595196429821";
    document.querySelector(".user").style.border = "20px solid #06d6a0";
    document.querySelector(".choice-user").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-paper.svg?v=1595196429821";
    
      if (computerChoice == 2) { // tesoura
        // you lose
             
          document.querySelector("#result-game").innerText = "You lose!";
          document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-scissors.svg?v=1595196432406";
          document.querySelector(".win").style.border = "20px solid #ef476f";
        
          scoreHouse = scoreHouse + 1;
        
          document.querySelector(".win").style.boxShadow = "0 0 0 25px hsl(229, 25%, 31%), 0 0 0 50px hsl(228, 29%, 26%),0 0 0 75px hsl(228, 36%, 25%),0 0 0 100px hsl(229, 42%, 22%)";

      } else if (computerChoice == 0) { // pedra
        //  you win
              
          document.querySelector("#result-game").innerText = "You win!";
          document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-rock.svg?v=1595196430887";
          document.querySelector(".win").style.border = "20px solid #ffc43d";
          scoreUser = scoreUser + 1;
        
          document.querySelector(".user").style.boxShadow = "0 0 0 25px hsl(229, 25%, 31%), 0 0 0 50px hsl(228, 29%, 26%),0 0 0 75px hsl(228, 36%, 25%),0 0 0 100px hsl(229, 42%, 22%)";
        
      } else {
        // draw  
          document.querySelector("#result-game").innerText = "Draw!";
          document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-paper.svg?v=1595196429821";
          document.querySelector(".win").style.border = "20px solid #06d6a0";
      }

     
  } else if (choiceUser == 2) { // lógica para tesoura 
    
    document.querySelector(".icon").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-scissors.svg?v=1595196432406";
    document.querySelector(".icon").style.border = "20px solid #ef476f";
    document.querySelector("#img-result").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-scissors.svg?v=1595196432406";
    document.querySelector(".win").style.border = "20px solid #ef476f";
    document.querySelector(".user").style.border = "20px solid #ef476f";
    document.querySelector(".choice-user").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-scissors.svg?v=1595196432406";
      
      if (computerChoice === 0) { // pedra
      // you lose  

        document.querySelector("#result-game").innerText = "You lose!";
        document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-rock.svg?v=1595196430887";
        document.querySelector(".win").style.border = "20px solid #ffc43d";
        
        scoreHouse = scoreHouse + 1;
        
        document.querySelector(".win").style.boxShadow = "0 0 0 25px hsl(229, 25%, 31%), 0 0 0 50px hsl(228, 29%, 26%),0 0 0 75px hsl(228, 36%, 25%),0 0 0 100px hsl(229, 42%, 22%)";
      
    } else if (computerChoice == 1) { // papel
      // you win
      
        document.querySelector("#result-game").innerText = "You win!";
        document.querySelector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-paper.svg?v=1595196429821";
        document.querySelector(".win").style.border = "20px solid #06d6a0";
        document.querySelector(".icon").style.border = "20px solid #06d6a0";
        
        document.querySelector(".user").style.boxShadow = "0 0 0 25px hsl(229, 25%, 31%), 0 0 0 50px hsl(228, 29%, 26%),0 0 0 75px hsl(228, 36%, 25%),0 0 0 100px hsl(229, 42%, 22%)";

        scoreUser = scoreUser + 1;
      
    } else {
      // draw
         document.querySelector("#result-game").innerText = "Draw!";
         document.querySElector("#img-house").src = "https://cdn.glitch.com/2fd08c07-965d-4fe4-ac3e-aa8d0ff79be1%2Ficon-scissors.svg?v=1595196432406";
         document.querySelector(".win").style.border = "20px solid #ef476f";
      
    }
 }
  
  document.querySelector("#primary-container").style.display = "none";
  document.querySelector("#choice").style.display = "block";
  
  window.setTimeout('windowResult()', 1500);
  
}

function windowResult() {
  
  document.querySelector("#primary-container").style.display = "none";
  document.querySelector("#choice").style.display = "none";
  document.querySelector("#result").style.display = "block";
  
  document.querySelector("#you").innerHTML = scoreUser;
  document.querySelector("#house").innerHTML = scoreHouse;
    
}


function playAgain() {
  
  document.querySelector("#primary-container").style.display = "flex";
  document.querySelector("#result").style.display = "none"
  
  let rePlay = 1
  
  while (rePlay === 1) {
    
   let choiceUser = document.querySelector(".btn-choice").addEventListener("click", choiceRock, choicePaper, choiceScissors);
    rePlay++
  
}
}
  
function resetGame() { 
  
  scoreUser = 0
  scoreHouse = 0
  
  document.querySelector("#you").innerHTML = scoreUser;
  document.querySelector("#house").innerHTML = scoreHouse;
  
  document.querySelector("#primary-container").style.display = "flex";
  document.querySelector("#result").style.display = "none"
  let choiceUser = document.querySelector(".btn-choice").addEventListener("click", choiceRock, choicePaper, choiceScissors);
  
}
  


      