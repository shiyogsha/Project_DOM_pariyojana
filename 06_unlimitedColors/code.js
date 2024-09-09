// generate a random color
const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
  
    }
    return color;
  }
  // generate random value 
  console.log(randomColor());
  
  let intervalID;
  
  const startChangingColor = function(){
    if(!intervalID){
      intervalID = setInterval(changeBackgroundColor, 1000)
    } // makes efficient code 
  
    function changeBackgroundColor(){
      document.body.style.backgroundColor = randomColor();
    }
    
  }
  
  document.querySelector('#start').addEventListener('click', startChangingColor)
  
  const stopChangingColor = function(){
    clearInterval(intervalID);
    intervalID = null;
  }
  document.querySelector('#stop').addEventListener('click', stopChangingColor)