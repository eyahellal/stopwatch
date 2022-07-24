//select elments
let startBTN=document.querySelector("#start")
let stopBTN=document.querySelector("#stop")
let resetBTN=document.querySelector("#reset")
let mintimer=document.querySelector("#minutes")
let sectimer=document.querySelector("#seconds")
let timer=document.querySelector(".timer")
let [sec,min] = [0,0];




//functions
function count(){
  
  {sec = sec + 1;
    if (sec == 60) {
      min = min + 1;
      sec = 0;}
      if( sec< 10){
        sectimer.innerHTML = "0" + sec;
      }
      
      else{
        sectimer.innerHTML = sec;
        
      } 
      
      if (min<10) {
        mintimer.innerHTML="0"+min;}
        
      
      else {
        mintimer.innerHTML = min;
      }
       
      

  
}
}
startBTN.onclick = function() {
   Interval = setInterval(count, 1000);
}

  stopBTN.onclick = function() {
     clearInterval(Interval);
}


resetBTN.onclick = function() {
 
  sec=0;
  min=0;
  sectimer.innerHTML="0"+sec;
  mintimer.innerHTML="0"+min;
  clearInterval(Interval)
  
  
}

    
      

  
  
  





