const unRead = document.querySelectorAll(".unread");
const notificationCount = document.getElementById("notifCount");
const markAll = document.querySelector(".markAll");


notificationCount.innerText = unRead.length;

unRead.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnread = document.querySelectorAll(".unread");
        notificationCount.innerText = newUnread.length;
    })
})

markAll.addEventListener("click",() => {
    unRead.forEach((message) => {
        message.classList.remove("unread");
    })
    const newUnread = document.querySelectorAll(".unread");
    notificationCount.innerText = newUnread.length;
})

