let Cookies = 0

const counter = 
   document.getElementById('counter')
const cookieButton = 
   document.getElementById('cookie-button')
   

cookieButton.addEventListener('click', 
    function() {
    Cookies= Cookies + 1
        counter.textContent =
    "Cookies: " + Cookies;
}
);