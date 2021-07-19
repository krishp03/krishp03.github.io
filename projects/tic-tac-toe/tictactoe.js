// player 1 name, icon, and functions that check for winning cases
const player1 = {
  name : "null",
  icon : "X",
  hasWon(){
    const cells = document.querySelectorAll(".cell")
    console.log(cells)
    if(this.row1Win(cells))
      return true
    if(this.row2Win(cells))
      return true
    if(this.row3Win(cells))
      return true
    if(this.col1Win(cells))
      return true
    if(this.col2Win(cells))
      return true
    if(this.col3Win(cells))
      return true
    if(this.diagDownWin(cells))
      return true
    if(this.diagUpWin(cells))
      return true
    return false
  },
  row1Win(cells){
    for(let i=0; i<=2; i++){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  row2Win(){
    for(let i=3; i<=5; i++){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  row3Win(){
    for(let i=6; i<=8; i++){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  col1Win(){
    for(let i=0; i<=6; i+=3){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },

  col2Win(cells){
    for(let i=1; i<=7; i+=3){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  col3Win(cells){
    for(let i=2; i<=8; i+=3){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  diagDownWin(){
    for(let i=0; i<=8; i+=4){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  diagUpWin(){
    for(let i=2; i<=6; i+=2){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true
  }

}

// player 2 name, icon, and functions that check for winning cases
const player2 = {
  name : "null",
  icon : "O",
  hasWon(){
    const cells = document.querySelectorAll(".cell")
    console.log(cells)
    if(this.row1Win(cells))
      return true
    if(this.row2Win(cells))
      return true
    if(this.row3Win(cells))
      return true
    if(this.col1Win(cells))
      return true
    if(this.col2Win(cells))
      return true
    if(this.col3Win(cells))
      return true
    if(this.diagDownWin(cells))
      return true
    if(this.diagUpWin(cells))
      return true
    return false
  },
  row1Win(cells){
    for(let i=0; i<3; i++){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    console.log("row1 case passed")
    return true;
  },
  row2Win(){
    for(let i=3; i<6; i++){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    console.log("row2 case passed")
    return true;
  },
  row3Win(){
    for(let i=6; i<9; i++){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    console.log("row3 case passed")
    return true;
  },
  col1Win(){
    for(let i=0; i<9; i+=3){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    console.log("col1 case passed")
    return true;
  },

  col2Win(cells){
    for(let i=1; i<9; i+=3){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    console.log("col2 case passed")
    return true;
  },
  col3Win(cells){
    for(let i=2; i<9; i+=3){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    console.log("col3 case passed")
    return true;
  },
  diagDownWin(){
    for(let i=0; i<9; i+=4){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true;
  },
  diagUpWin(){
    for(let i=2; i<9; i+=2){
      const this_h1 = cells[i].querySelector("h1")
      const thisIcon = this_h1.innerHTML;
      if(this_h1.getAttribute('id') != i || thisIcon != this.icon)
        return false;
    }
    return true
  }
}

let player1NameEntered = false;
const player1Input = document.querySelector("#player1Name");
// Event-handler for when player1 name is input
player1Input.addEventListener("change", ()=>{
  // Sets name in object
  player1.name = player1Input.value;
  player1NameEntered = true;
  
  // Removes input box and displays name
  document.querySelector("#player1").innerHTML=player1.name;
  
  //Updates "Player 1 is next" to reflect input name
  document.querySelector("#currPlayer").innerHTML = player1.name;

  // Shows turns
  if(player1NameEntered && player2NameEntered)
    document.querySelector("#status").classList.remove("not-visible");
})

let player2NameEntered = false;
const player2Input = document.querySelector("#player2Name");
// Event-handler for when player1 name is input
player2Input.addEventListener("change", ()=>{
  // Sets name in object
  player2.name = player2Input.value;
  player2NameEntered = true;

  // Removes input box and displays name
  document.querySelector("#player2").innerHTML=player2.name

  // Shows turns
  if(player1NameEntered && player2NameEntered)
    document.querySelector("#status").classList.remove("not-visible");
})

// Reloads the page to reset the game
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", ()=>{
  window.location.reload(true);
})

let turn = "player1";
let turns = 0;
let gameFinished = false;
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
  cell.addEventListener("click", ()=>{
    if (!player1NameEntered || !player2NameEntered){
      alert("Both names need to be entered to play!");
    }
    else if(gameFinished){
      if(confirm("You need to reset to play again. Would you like to?"))
        window.location.reload(true);
    }
    else if(cell.classList.contains("unused")){
      turns++;
      const cellText = cell.querySelector("h1")
      if(turn === "player1"){
        cellText.innerHTML = player1.icon;
        turn = "player2"
        document.querySelector("#currPlayer").innerHTML = player2.name
      }
      else{
        cellText.innerHTML = player2.icon;
        turn = "player1"
        document.querySelector("#currPlayer").innerHTML = player1.name
      }
      cell.classList.remove("unused")
      cell.classList.add("used")
      console.log(cell.classList)
    }
    if(player1.hasWon()){
      const status = document.querySelector("#status");
      status.innerHTML= `${player1.name} has won! Click "Reset" to start a new game.`
      status.style.color = "var(--green)";
      gameFinished = true;
    }
    else if(player2.hasWon()){
      const status = document.querySelector("#status");
      status.innerHTML= `${player2.name} has won! Click "Reset" to start a new game.`
      status.style.color = "var(--green)";
      gameFinished = true;
    }
    else if(turns == 9){
      const status = document.querySelector("#status");
      status.innerHTML= `DRAW! Click "Reset" to start a new game.`;
      status.style.color = "var(--yellow)";
      gameFinished = true;
    }
  })

})
  
  