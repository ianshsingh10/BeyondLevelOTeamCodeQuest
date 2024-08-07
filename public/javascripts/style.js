
const cursor=document.querySelector(".blur");

window.addEventListener("mousemove", function(e){
    const posX=e.clientX;
    const posY=e.clientY;
    cursor.style.left=`${posX-100}px`;
    cursor.style.top=`${posY-100}px`;
})