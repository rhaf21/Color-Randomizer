const btn = document.getElementById('btn');
const color = document.getElementById('color');
const body = document.querySelectorAll('body');
const copy = document.getElementById('copy');

btn.addEventListener('click', function () {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgbColor = `RGB(${red},${green},${blue})`
    
    document.getElementById('rgbValue').value = rgbColor;
    document.body.style.background = rgbColor;
    color.textContent = rgbColor;
    
});

copy.addEventListener('click', function (){
    let rgb = document.getElementById('rgbValue');
    
    rgb.focus();
    rgb.setSelectionRange(0, 99999); /* For mobile devices */
    rgb.select();

    navigator.clipboard.writeText(rgb.value);
  
    alert("Copied the text: " + rgb.value);
});
    
