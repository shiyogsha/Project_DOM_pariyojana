const form = document.querySelector('form')
// this usecase will give empty value
// const height = parseInt(document.querySelector('#height').value)
// now form when submit by two ways post or get type but when submit there value goes to url or browser so we have to stop that default action cause we dont want this to go server
// so event listener method called 'submit event'

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');
  const comments = document.querySelector('#comments');
  
  if (height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `"Please give a valid height" ${height}`;

  }if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `"Please give a valid weight" ${weight}`;
  }
  else{
  const bmi = weight /((height*height) / 10000).toFixed(2);
  //show the result
  results.innerHTML = `<span>${bmi}</span>`;
    if(bmi <= 18.6){
      comments.innerHTML = `<span>"You are Under Weight"</span>`
    }
    if(24.9 >= bmi || bmi > 18.6){
      comments.innerHTML = `<span>"You are in Normal Range"</span>`
    }
    if(bmi > 24.9 ){
      comments.innerHTML = `<span>"You are OverWeight"</span>`
    }
  
  }
});