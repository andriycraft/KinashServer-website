const time = 1000
document.getElementById('main').style.filter = "blur(5px)";
setTimeout(function(){
    document.getElementById('main').style.filter = "blur(0px)";
}, time);

function redirecttogithub() {
    location.href = 'https://github.com/andriy332/KinashServer/';
}