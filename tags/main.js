const colours = document.querySelectorAll(".colour")
const group = document.getElementById("group-tag")
const dono = document.getElementById("donation-tag")
const heart = document.getElementById("heart-tag")
const vr = document.getElementById("vr-tag")
const output = document.getElementById("output")
let color = "0, 0, 0"

colours.forEach(el => {
    el.style.backgroundColor = `rgb(${el.getAttribute("bgc")})`
    el.style.color = `rgb(${el.getAttribute("bgc")})`
    console.log(`rgb(${el.getAttribute("bgc")})`)

    el.addEventListener("click", () => {
        color = el.getAttribute("bgc")
    })
})

twemoji.size = '16x16';

function update() {
    const display = document.getElementById("display").value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const groupTag = group.options[group.selectedIndex].text
    const donoTag = dono.options[dono.selectedIndex].text
    const heartTag = heart.options[heart.selectedIndex].text
    const vrTag = vr.options[vr.selectedIndex].text


    const values = {"display": [display, color], "group": [groupTag, group.options[group.selectedIndex].getAttribute("bgc")], "dono": [donoTag, dono.options[dono.selectedIndex].getAttribute("bgc")], "heart": [heartTag, heart.options[heart.selectedIndex].getAttribute("bgc")], "vr": [vrTag, vr.options[vr.selectedIndex].getAttribute("bgc")]}


    document.querySelectorAll("span").forEach(span => {
        for (const [key, value] of Object.entries(values)) {
            if (span.id == key) {
                span.innerHTML = ` [${value[0]}]`
                span.style.color = `rgb(${value[1]})`
            }
        }
        span.innerHTML = span.innerHTML.replace(/\[\]/g, "")
        span.innerHTML = span.innerHTML.replace("🧡", "<img draggable=\"false\" class=\"emoji\" alt=\"🧡\" src=\"https://cdn.jsdelivr.net/gh/twitter/twemoji@v11.4.0/2/72x72/1f9e1.png\" width='16' height='16'>")
        span.innerHTML = span.innerHTML.replace("🖤", "<img draggable=\"false\" class=\"emoji\" alt=\"🖤\" src=\"https://cdn.jsdelivr.net/gh/twitter/twemoji@v11.4.0/2/72x72/1f5a4.png\" width='16' height='16'>")
        span.innerHTML = span.innerHTML.replace("🤍", "<img draggable=\"false\" class=\"emoji\" alt=\"🤍\" src=\"https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.0/assets/72x72/1f90d.png\" width='16' height='16'>")
    })

    output.style.backgroundColor = `rgb(${document.getElementById("background").options[document.getElementById("background").selectedIndex].getAttribute("bgc")})`
}

document.getElementById("update").addEventListener("click", () => {
    update()
})

document.getElementById("randomise").addEventListener("click", () => {
    document.querySelectorAll("select").forEach(el => {
        if(el.className != "exclude") {
            const s = Math.floor(Math.random() * el.children.length)
            el.value = el.children[s].value
        }
    })
    update()
})

setInterval(() => {
    twemoji.parse(document.body)
}, 500)