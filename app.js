/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var active_player, scores, round_score;
var button_roll = document.querySelector('.btn-roll');


init();


button_roll.addEventListener('click',function(){
    var playerScorCurrentDOM = document.querySelector('#current-'+active_player);
    var dice =  Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+dice+'.png'; 
    if (dice !== 1){
        round_score += dice;
        playerScorCurrentDOM.textContent = round_score;
    }else{
        playerScorCurrentDOM.textContent = 0;
        nextPlayer();
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[active_player] += round_score;
    
    
    document.getElementById('score-'+active_player).textContent = scores[active_player];
    
    if (scores[active_player]>20){
        document.querySelector('#name-'+active_player).textContent = "Winner";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+active_player+'-panel').classList.add('winner');
        document.querySelector('.player-'+active_player+'-panel').classList.remove('active');
        document.querySelector(".btn-roll").disabled = true; 
        document.querySelector(".btn-hold").disabled = true; 
    }else{
    nextPlayer();    
    }
    
});


document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer(){
    round_score = 0;
    active_player === 0 ? active_player = 1 : active_player = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
}


function init(){
    scores = [0,0];
    active_player = 0;
    round_score = 0;  
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector(".btn-roll").disabled = false; 
    document.querySelector(".btn-hold").disabled = false; 
}











