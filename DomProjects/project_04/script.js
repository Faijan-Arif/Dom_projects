
let mouse = document.querySelector("#main");
let pointer = document.querySelector(".cusror");


mouse.addEventListener("mousemove", function(mouseMovement){
    // console.log(mouseMovement.x, mouseMovement.y);
    pointer.style.left = mouseMovement.x +"px" //this line move x axis of window
    pointer.style.top = mouseMovement.y +"px" // this line move y axis of window
})