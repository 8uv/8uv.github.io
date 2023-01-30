Array.from($("a")).forEach(a => {
    a.firstChild.src = `https://www.google.com/s2/favicons?domain=${a.href}&sz=50`;
    a.firstChild.draggable = false
    a.firstChild.width = "50"
    a.firstChild.height = "50"
});

document.addEventListener("click", () => {
    document.getElementById("v").style.opacity = 1;
    document.getElementById("v").volume = 0.2
    document.getElementById("v").play()
})

$("#page")[0].addEventListener("click", () => {
    alert("too poor to rent a linode rn :3")
})