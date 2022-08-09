
document.title = "Samuel Siu's Webpaage";

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
function stopball(e) {
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
})