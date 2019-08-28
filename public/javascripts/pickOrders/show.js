let picks = document.querySelectorAll('.pick');

picks.forEach(pick => {
    pick.addEventListener('mouseenter', handleMouseEnter);
    pick.addEventListener('mouseleave', handleMouseLeave);
});

function handleMouseEnter(evt) {
    evt.target.childNodes[1].className = 'show-img';
    evt.target.className += ' highlight'
}

function handleMouseLeave(evt) {
    evt.target.childNodes[1].className = 'hidden-img';
    evt.target.className = evt.target.className.replace(' highlight', '');
}