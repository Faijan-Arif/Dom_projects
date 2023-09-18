
let storyArr = [
    {
        dp:"https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", instaStatus : "https://images.unsplash.com/photo-1550403648-c1a73c1ebb94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1693336431208-91098a90e155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", instaStatus : "https://images.unsplash.com/photo-1668120097101-6ac420cdab3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    
    {
        dp:"https://plus.unsplash.com/premium_photo-1691588961812-63f321c8af62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", instaStatus : "https://images.unsplash.com/photo-1682685796852-aa311b46f50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1693438725534-48067d85f3d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", instaStatus : "https://images.unsplash.com/photo-1693249646175-8b21fe05acc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1682523597948-2ae25d2afc7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80", instaStatus : "https://images.unsplash.com/photo-1692736918030-1e3a6eb640b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80"
    },
]

let stories = document.querySelector("#stories")
let clutter = "";

storyArr.forEach(function (element, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${element.dp}" alt="image">
    </div>`;
    
});
    stories.innerHTML = clutter ; 
    stories.addEventListener("click", function(details){
        document.querySelector("#full-screen").style.display = "block"
        document.querySelector("#full-screen").style.backgroundImage = `url(${storyArr[details.target.id].story})`

        setTimeout( function (){
        document.querySelector("#full-screen").style.display = "none"

        },5000)
        
    });

