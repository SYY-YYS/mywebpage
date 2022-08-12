
$(document).ready(function() {
    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.about-me'
    });
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.project-items'
    });
    var scene3 = new ScrollMagic.Scene({
        triggerElement: '.intro'
    });
    scene1.setClassToggle('.about-me', 'show');
    scene1.addTo(controller);

    scene2.setClassToggle('.project-items', 'show');
    scene2.addTo(controller);

});

document.title = "Siu's Webpaage";

// function clickIcon(event) {
//     console.log(event.target);
//     let nav = event.target;
//     nav.style.left = '0px';
// }

function hidemenu() {
    document.getElementById('navlink').style.left = '-51vw';
}
function showmenu() {
    document.getElementById('navlink').style.left = '0px';
}
function stopball() {
    let check = getComputedStyle(document.getElementById('jumping-ball')).animationName;
    if (check === 'bouncing') {
        document.getElementById('jumping-ball').style.animationName = 'none';
    } else {
        document.getElementById('jumping-ball').style.animationName = 'bouncing';
    }
     
}
document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        if (document.getElementById('navlink').style.left === '0px') {
            hidemenu();
        } else {
            showmenu();
        }
    }
});
window.addEventListener('scroll', () => {
    var nav = document.querySelector('nav');
    nav.classList.toggle('turn', window.scrollY > 0);
});

// for scrolling animation

