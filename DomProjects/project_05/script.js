
let image1 = document.querySelectorAll(".elem");
image1.forEach( (val) =>  {
    val.addEventListener("mouseenter", function(){
            val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0 
    })
    val.addEventListener("mousemove", function(data){
        val.childNodes[3].style.left = data.x + "px"
        // val.childNodes[3].style.top = data.y + "px"
    })
})