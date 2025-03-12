setTimeout(()=>{
    document.getElementById('preloader').style.display = 'none';
},1500);
document.getElementById('open-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '0px';
});
document.getElementById('close-menu').addEventListener('click',()=>{
    document.getElementById('burger-menu').style.top = '-1000px';
});

const image = document.getElementById("me-img");
const maxMove = 50; // Maximum movement in pixels

document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;

            // Calculate movement offset
            const offsetX = ((clientX - innerWidth / 2) / innerWidth) * maxMove;
            const offsetY = ((clientY - innerHeight / 2) / innerHeight) * maxMove;

            image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});