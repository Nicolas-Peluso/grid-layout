var container = document.querySelector('.pop')
var conteudo = document.getElementById('content')
var form = document.getElementById('form')
var cookie = document.getElementById('cookie')
var marketing = document.getElementById('marketing')
var btn = document.getElementById('btn')


form.addEventListener("submit", function(event){
   event.preventDefault()
})
btn.addEventListener("click", function(){
    armazena() 
})



function armazena(){
    if(cookie.checked == true){
        cookies()
    }
    else{
        console.log("nao permitiu cookie")
    }
if(marketing.checked == true){
        mark()
    }
    else{
        console.log("nao permitiu mark")
    }
container.classList.add("remove_pop")
}

function cookies(){
    console.log('cookies')
}
function mark(){
    console.log("marketing")
}



const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anima]')
  
  
  function animeScroll() {
    const windowTop = window.pageYOffset +    ((window.innerHeight * 3) / 4)
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add("animado")
      } else {
        element.classList.remove("animado")
      }
    })
    console.log(windowTop)
  }
  
  animeScroll()
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll()
    }, 200))
  }