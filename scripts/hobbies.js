document.addEventListener("DOMContentLoaded", function () {
    const hobbies = document.querySelectorAll(".hobby");

    hobbies.forEach(hobby => {
        let randomDelay = (Math.random() * 1.5 + 0.5).toFixed(2) + "s"; // Between 0.5s and 2s
        hobby.style.setProperty("--fade-delay", randomDelay);
    });
});
setTimeout(()=>{
    document.getElementById('preloader').style.display = 'none';
},1500);
document.getElementById('open-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '0px';
});
document.getElementById('close-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '-1000px';
});
