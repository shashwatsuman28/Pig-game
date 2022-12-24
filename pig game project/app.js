/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var  scroes,roundscroes,activeplayer,dice,gameplaying;

init();
 
 


//document.querySelector('#current-'+activeplayer).textContent=dice;
//document.querySelector('#current-'+activeplayer).innerHTML='<em>'+dice+'</em>'


//var x= document.querySelector('#score-0').textContent;
//console.log(x);


    document.querySelector('.btn-roll').addEventListener('click' ,function(){
        if(gameplaying){
            
    var dice = Math.floor(Math.random()*6+1);
    
    var dicedom = document.querySelector('.dice')
    
    dicedom.style.display='block';
    dicedom.src = 'dice-'+dice+'.png';
    
    if(dice !== 1){
        roundscroes +=dice;
        document.querySelector('#current-'+ activeplayer).textContent = roundscroes;
    }else{
       nextplayer()
       
        
    }
        }
       
});

    




document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
        scroes[activeplayer]  = scroes[activeplayer]+roundscroes
    document.querySelector('#score-'+activeplayer).textContent = scroes[activeplayer];
   
     
   if(scroes[activeplayer]>=100){
       document.querySelector('#name-'+activeplayer).textContent='winner!'
       document.querySelector('.dice').style.display='none'
       document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner')
       document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active')
       gameplaying=false;
       
   }else{
       nextplayer()
   }
    }
   
});


function nextplayer(){
     activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscroes=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
               
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
        document.querySelector('.dice').style.display='none';
}



document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});

function init(){
    scroes=[0,0];
    roundscroes=0;
    activeplayer=0;
    gameplaying=true;
    
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.dice').style.display='none';
    document.querySelector('#name-0').textContent='Player 1';
    document.querySelector('#name-1').textContent='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


