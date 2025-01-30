let body = document.querySelector('body');
let daynight = document.getElementById('daynight');
let btn = document.getElementById('language');
let logo = document.getElementById('imglogo');
let p = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');


logo.addEventListener('click', () => {
        location.reload();
});

daynight.addEventListener('click', () =>{
  if(body.classList.toggle('dark-mode')){
    daynight.textContent = '☀️'
    daynight.style.backgroundColor = 'black'
    btn.style.backgroundColor = 'black'
    btn.style.color = 'white'
    p.style.color = 'black'
    p2.style.color = 'black'
    p3.style.color = 'black'
    languagemenu.style.backgroundColor = 'gray'
  }else{
    daynight.textContent = '🌙'
    daynight.style.backgroundColor = 'white'
    btn.style.backgroundColor = 'white'
    btn.style.color = 'black'
    p.style.color = 'black'
    p2.style.color = 'black'
    p3.style.color = 'black'
    languagemenu.style.backgroundColor = 'white'
  }
});
let languagemenu = document.getElementById('languagemenu');
btn.addEventListener('click', () => {
  if(languagemenu.classList.toggle('active')){
    languagemenu.style.display = 'block'
  }else{
    languagemenu.style.display = 'none'
  }
});