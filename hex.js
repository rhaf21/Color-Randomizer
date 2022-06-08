const btn = document.getElementById('btn');
const color = document.getElementById('color');
const body = document.querySelectorAll('body');
const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F']

btn.addEventListener('click', function () {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        let hexIndex = Math.floor(Math.random() * hexCode.length);
        hexColor += hexCode[hexIndex];
    }
    
    document.getElementById('hexValue').value = hexColor;
    document.body.style.background = hexColor;
    color.textContent = hexColor;
});

copy.addEventListener('click', function (){
    let hex = document.getElementById('hexValue');
    
    hex.select();
    hex.setSelectionRange(0, 99999); /* For mobile devices */

    navigator.clipboard.writeText(hex.value);
  
    alert("Copied the text: " + hex.value);
});