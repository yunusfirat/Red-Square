const link = document.getElementById('grid-link')
const header = document.querySelector('.header')
function fade(){
    header.style.opacity = '.1'
}

function back(){
    header.style.opacity = '1'
}


link.addEventListener('mouseenter',fade);
link.addEventListener('mouseleave',back);