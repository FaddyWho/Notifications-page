function mark_as_read() {
    let p_in_header = document.getElementById("markread")
    let number = document.getElementsByClassName("notification-badge")
    let unread_messages = document.getElementsByClassName("unread");
    for (let i = 0; i < unread_messages.length; i++) {
        // Check if the current message is marked comparing its background color.
        if (unread_messages[i].style.backgroundColor === "rgba(207, 221, 224, 0.572)") {
            // If marked as read, change the background color to white and update the button text.
            unread_messages[i].style.backgroundColor = "white";
            p_in_header.innerText = "Mark all as unread"
            // number.style.display = "none"; (not working!!)
        }
        else {
            // If marked as unread, change the background color to rgba(207, 221, 224, 0.572) and update the button text.
            unread_messages[i].style.backgroundColor = "rgba(207, 221, 224, 0.572)";
            p_in_header.innerText = "Mark all as read"

        }
    }
}
