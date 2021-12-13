const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};
function play(e){
    restart.style.display='inline-block'
    const playerchoice=e.target.id;
    const computerchoice=compchoice();
    const winner=getWinner(playerchoice,computerchoice);
    showWinner(winner,computerchoice);
    console.log(computerchoice,winner);

}
function compchoice(){
  const ran=Math.random();
  if(ran<0.34) 
  {
    return 'rock';
  }
  else if(ran <=0.67)
  return 'paper'
  else
   return 'scissors';

  

}
function getWinner(p,c)
{
  if(p=='rock'){
    if(c=='rock')
    return 'draw';
    else if(c=='paper')
    return 'computer';
    else
    return 'player';
  }
  else if(p=='paper'){
    if(c=='rock')
    return 'player';
  
    else if(c=='paper')
    return 'draw';
    else
    return 'computer';
  }
  else if(p=='scissors'){
    if(c=='rock')
    return 'computer';
  
    else if(c=='paper')
    return 'player';
    else
    return 'draw';
  }


}
function showWinner(winner,computer){
  if(winner==='player'){
    scoreboard.player++;
    result.innerHTML=`<h1 style="color:green"> You Win!</h1>
    <i class="fas fa-hand-${computer} fa-10x"></i>
    <P> Computer Chose <strong>${computer}</strong></p>`;

  }else if (winner === 'computer') {
    // Inc computer score
    scoreboard.computer++;
    // Show modal result
    result.innerHTML = `
      <h1 style="color:red">You Lose</h1>
      <i class="fas fa-hand-${computer} fa-10x"></i>
      <P> Computer Chose <strong>${computer}</strong></p>`;
  }
  else{
    result.innerHTML = `
    <h1 style="color:blue">It's A Draw</h1>
    <i class="fas fa-hand-${computer} fa-10x"></i>
    <P> Computer Chose <strong>${computer}</strong></p>`
  }
  score.innerHTML=`
  <p>You: ${scoreboard.player} 
  <p>Computer: ${scoreboard.computer}`
  modal.style.display="block";
  
}
function clearModal(e){
  if(e.target===modal){
    modal.style.display="none";
  }

}
function restartGame(){
  scoreboard.player=0;
  scoreboard.computer=0;
  score.innerHTML=`
  <p>You: ${scoreboard.player} 
  <p>Computer: ${scoreboard.computer}`

  restart.style.display="none";
}

choices.forEach(choice=>choice.addEventListener('click',play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);