
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
document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        if (document.getElementById('navlink').style.left === '0px') {
            hidemenu();
        } else {
            showmenu();
        }
    }
})