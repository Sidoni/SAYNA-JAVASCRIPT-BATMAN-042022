let footericones = document.getElementsByClassName('footer-icones');

for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'yellow';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'white';

    });
}


let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'underline';
    });
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none';
    });

});

//animation des titres

$(document).ready(function() {
    $(".titre").fadeIn(),
        $(".titre").animate({
            left: "5px"
        })
});