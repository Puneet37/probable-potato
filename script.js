var colorContainer = document.getElementById("colorCode");
var genButton = document.getElementById("getNewBtn");
var Symbols = "0123456789ABCDEF";
var color = "";
genButton.addEventListener('click', function (){
    for(var i=0;i<6;i++) {
        color += Symbols[Math.floor(Math.random()*16)]
        // console.log();
    }
    colorContainer.innerHTML= "#" + color;
    document.body.style.background = "#"+color;
    color = "";
});

const loader = document.querySelector('.loader');
window.addEventListener('load', () => {
    loader.classList.add('hide');
});