const clock = document.getElementById('clock')
// const clock = document.querySelector('clock') // another way



// for continue running or timewise set interval is used
setInterval (function() {
  let date = new Date();
  //console.log(date) not want to print on console but in screen
  clock.innerHTML = date.toLocaleTimeString();
},1000)