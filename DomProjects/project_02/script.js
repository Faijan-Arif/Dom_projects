
let isStatus = document.querySelector("h5");
let btn = document.querySelector("#Add");
let checkStatus = 0;

btn.addEventListener("click", function(){
    if (checkStatus==0) {
        isStatus.innerHTML = "Friend"
        isStatus.style.color = "green"
        // btn.innerHTML = "Remove Friend"
        btn.innerHTML = " Unfollow"
        checkStatus = 1 
    } else {
        isStatus.innerHTML = "Stranger"
        // isStatus.style.color = "red"
        isStatus.style.color = "rgb(195, 91, 108)"
        // btn.innerHTML = "Add Friend"
        btn.innerHTML = "Follow"

        checkStatus = 0
        
    }
})