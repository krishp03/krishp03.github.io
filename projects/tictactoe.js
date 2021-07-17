const player1 = {
    name : "Krish",
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
  
  const player2 = {
    name : "Ethan",
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
  
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", ()=>{
    window.location.reload(true);
  })
  
  let turn = "player1";
  let turns = 0;
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    
    cell.addEventListener("click", 
      ()=>{
        if(cell.classList.contains("unused")){
          const cellText = cell.querySelector("h1")
          if(turn === "player1"){
            cellText.innerHTML = player1.icon;
            turn = "player2"
            document.querySelector("#player").innerHTML = player2.name
          }
          else{
            cellText.innerHTML = player2.icon;
            turn = "player1"
            document.querySelector("#player").innerHTML = player1.name
          }
          cell.classList.remove("unused")
          cell.classList.add("used")
          console.log(cell.classList)
        }
        if(player1.hasWon())
          console.log(player1.name+" won!")

        else if(player2.hasWon())
          console.log(player2.name+" won!")
        
      })
    
  })
  
  