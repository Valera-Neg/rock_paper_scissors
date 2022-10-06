const rps = (p1, p2) => {
  if(p1 === p2) {
    return 'Draw!'
  }; 
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}





console.log(rps('rock', 'scissors')) //> Player 1 won!
console.log(rps('scissors', 'paper')) //> Player 1 won!
console.log(rps('paper', 'rock')) //> Player 1 won!
console.log(rps('scissors', 'rock')) //> Player 2 won!
console.log(rps('paper', 'scissors')) //> Player 2 won!
console.log(rps('rock', 'paper')) //> Player 2 won!
console.log(rps('rock', 'rock')) //> 'Draw!'
console.log(rps('scissors', 'scissors')) //> 'Draw!'
console.log(rps('paper', 'paper')) //> 'Draw!'