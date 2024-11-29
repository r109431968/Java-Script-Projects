const buttons = document.querySelectorAll('.button');
// console.log(btns);

const body = document.querySelector('body'); 
// using only queryselector not querySelectorAll because body srf ek hai 
// mgr button bhot sare is liye button me querySelectorAll use kiya hai or 
// body me querySelector
// console.log(body);

// Hume nodeList mili hai to jo hmne github pr js ki repository bnayi hai,
// usme hmne padha hai "nodelist" pr foreach lgte hain ya lga skte hain.
buttons.forEach(function (btn) {
    //console.log(btn);

  // button pr kya hona hai ? answer color change
  // kese hona hai ? answer click kr k
  // To ab kya lgega ? answer click event.
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id === 'grey'){
            //body.style.backgroundColor = 'grey';
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            //body.style.backgroundColor = 'grey';
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            //body.style.backgroundColor = 'grey';
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            //body.style.backgroundColor = 'grey';
            body.style.backgroundColor = e.target.id;
        }
    })
});
