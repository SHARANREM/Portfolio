setTimeout(()=>{
    document.getElementById('preloader').style.display = 'none';
},1500);
document.getElementById('open-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '0px';
});
document.getElementById('close-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '-1000px';
});
