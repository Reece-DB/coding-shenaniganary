let cookies = 0

const counter = 
   document.getElementById('counter')
const cookieButton = 
   document.getElementById('cookie-button')
   
cookieButton.addEventListener('click', 
    function() {
    cookies= cookies + 1
        counter.textContent =
    "cookies: " + cookies;
}
);

let clickPower = 1;

const multiplierBtn = document.getElementById('multiplier-btn');

multiplierBtn.addEventListener(
"click", function() {
    if (cookies >= 50) {
    cookies = cookies - 50;
      clickPower = clickPower + 1;
      counter.textContent =
"cookies: " + cookies;
}
}
);