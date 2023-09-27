let mark = document.querySelector("#markread");
let badge = document.querySelector("#notification-badge")
let noti = document.querySelectorAll(".unread");


mark.addEventListener("click", e => {
    for (let i = 0; i < noti.length; i++) {
        noti[i].style.backgroundColor = "white";
    }
    
    badge.style.visibility = "hidden"

});
 
