function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      width: rect.width,
      height: rect.height
    };
  }

document.querySelectorAll("img").forEach(el => {
    el.draggable = false
})

document.querySelectorAll("a").forEach(el => {
    if(el.getAttribute("keep") == null) {
        el.target = "_blank"
    }

    if(el.getAttribute("popup") != null) {
        el.addEventListener("mouseover", () => {
            if(!document.getElementById("active-popup")) {
                const popup = document.createElement("div")
                const width = 15

                popup.classList = "popup fadein"
                popup.id = "active-popup"
                popup.style.left = `calc(${Math.floor(getOffset(el).left)}px - ${width/2}vw + ${Math.floor(getOffset(el).width)/2}px)`
                popup.style.top = `calc(${Math.floor(getOffset(el).top)}px + ${Math.floor(getOffset(el).height)}px + 10px`
                document.body.prepend(popup)

                const text = document.createElement("h2")
                text.className = "popup-child"
                text.innerHTML = "📋 " + el.getAttribute("popup")
                popup.appendChild(text)
            }
        })

        el.addEventListener("click", () => {
            navigator.clipboard.writeText(el.getAttribute("popup"))
            const old = document.querySelectorAll(".popup-child")[0].innerHTML
            document.querySelectorAll(".popup-child")[0].innerHTML = "copied to clipboard!"
            setTimeout(() => { document.querySelectorAll(".popup-child")[0].innerHTML = old }, 1555)
        })

        el.addEventListener("mouseout", () => {
            if(document.getElementById("active-popup")) {
                document.getElementById("active-popup").classList += " fadeout" 
                setTimeout(() => { document.getElementById("active-popup").remove() }, 200)
            }
        })
    }
})