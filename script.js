let mark = document.querySelector("#markread");

let noti = document.querySelectorAll(".unread");

// mark.addEventListener("click", e => {
//     noti.style.backgroundColor = "white";
// });
 

mark.addEventListener("click", e => {
    for (let i = 0; i < noti.length; i++) {
        noti[i].style.backgroundColor = "white";
    }
});
 