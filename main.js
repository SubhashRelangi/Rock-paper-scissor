let score = JSON.parse(localStorage.getItem('score')) ||   {

            wins:0,

            loses:0,
            ties:0
          } 
             
        // if(!score){
        //   score={
        //     wins:0,
        //     loses:0,
        //     ties:0
        //   }
        // }
        
        
        
      let isauto=false;
      let intervalid;
      
      document.querySelector('#autoplay-button')
  .addEventListener('click', () => {
    autoplay();
  });
      
      function autoplay(){
        if(!isauto){
          intervalid = setInterval(function(){
            const playermove = click();
            game(playermove);
          },1000);
          isauto=true;
        }else{
          clearInterval(intervalid);
          isauto=false;
        }
      }
      
      document.querySelector('#rock-button')
      .addEventListener('click',() => {
        game('rock');
      });
      
      document.querySelector('#paper-button')
  .addEventListener('click', () => {
    game('paper');
  });
  
  document.querySelector('#scissor-button')
  .addEventListener('click', () => {
    game('scissor');
  });
  
  document.querySelector('#reset-button')
  .addEventListener('click', () => {
    print();
  });
  
   // document.body.addEventListener('keydown',() => {
     // console.log('keydown')
    //})
  
   function resetbutton(){
     score.wins = 0;
     score.loses = 0;
     score.ties = 0;
     localStorage.removeItem('score')
     updatescore();
   }

        function game(move){


              let computermove=click();
              let result='';
              if(move==='scissor')
              {
                if(computermove==='rock'){
                  result='YOU LOSE.';
                }else if(computermove==='paper'){
                  result='YOU WIN.';
                }else if(computermove==='scissor'){
                  result='TIE.';
                }   
              }
              else if(move==='rock'){
                if(computermove==='rock'){
                  result='TIE.';
                }else if(computermove==='paper'){
                  result='YOU LOSE.';
                }else if(computermove==='scissor'){
                  result='YOU WIN.';
                }
              }
               if(move==='paper'){
                if(computermove==='rock'){
                  result='YOU WIN.';
                }else if(computermove==='paper'){
                  result='TIE.';
                }else if(computermove==='scissor'){
                  result='YOU LOSE.';
                }
              }
              console.log(computermove);

                if(result==='YOU WIN.'){
                  score.wins += 1;
                }else if(result==='YOU LOSE.'){
                  score.loses += 1;
                }else if(result==='TIE.'){
                  score.ties += 1;
                }

                let variable = document.querySelector('.result');
                variable.innerHTML=`${result}`;

                document.querySelector('.choices')
                .innerHTML=`you pick 
                <img src="${move}-emoji.jpg" class="icon">- 
                computer picks 
                <img src="${computermove}-emoji.jpg" class="icon">`;

                updatescore();

                localStorage.setItem('score' , JSON.stringify(score));
          
//           alert(`you pick ${move}.computer picks ${computermove}.${result}
// wins:${score.wins},loses:${score.loses},ties:${score.ties}.`);
        }        

        function updatescore(){
              document.querySelector('.scores')
                .innerHTML=`wins:${score.wins},loses:${score.loses},ties:${score.ties}`
        }

        function click(){
            const randomnumber = Math.random();
            let computermove='';
          if(randomnumber>=0&&randomnumber<=1/3){
            computermove='rock';
          }else if(randomnumber>=1/3&&randomnumber<=2/3){
            computermove='paper';
          }else if(randomnumber>=2/3&&randomnumber<=1){
            computermove='scissor';
          }
          return computermove;
        }

    function print() {
    let var3 = '';
    let list = '';
    list = `<div>
       <p id="paragraph">Do You Want To Reset Your Score</p>
       <button id="yes-button">YES</button>
       <button id="no-button">NO</button>
    </div>`;
     document.querySelector('#div-button').innerHTML = list;
     document.querySelector('#yes-button').addEventListener('click',() => {
     resetbutton();
     }); 
     document.querySelector('#no-button').addEventListener('click',() => {
       document.querySelector('#div-button').innerHTML = var3;
     });
  
}