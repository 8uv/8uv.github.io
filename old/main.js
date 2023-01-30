document.querySelectorAll("a").forEach(a => {
    a.firstChild.src = `https://www.google.com/s2/favicons?domain=${a.href}&sz=64`;
    a.addEventListener('click', () => {
        a.classList.add("clicked")
        setTimeout(() => {
            a.classList.remove("clicked")
        }, 100);
    })
});

document.querySelectorAll("img").forEach(img => {
    img.draggable = false;
})