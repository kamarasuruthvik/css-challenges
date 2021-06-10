const icon= document.querySelector('.frame');
const lines= document.querySelectorAll('.line');
const cssVariables= document.querySelector(':root');
var rs=getComputedStyle(cssVariables);
const delayTime= rs.getPropertyValue('--animation-delay');

icon.addEventListener('click',()=>{
    console.log(lines);
    lines.forEach(line=>{
        line.classList.add('animate-line');
    })
})
