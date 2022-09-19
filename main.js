import './webRtc.js'

const tabLinks = document.getElementsByClassName("tablink");

for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].addEventListener("click", function (event) {
        openTab(event, event.target.id)
    })
}

const openTab = (event, id) => {

    const tabcontents = document.getElementsByClassName("tabcontent");
    const tabLinks = document.getElementsByClassName("tablink");

    for (let i = 0; i < tabcontents.length; i++) {
        if (tabcontents[i].id === id) {
            tabcontents[i].classList.add("active")
        }
        else {
            tabcontents[i].classList.remove("active")
        }
    }

    for (let i = 0; i < tabLinks.length; i++) {
        if (tabLinks[i] === event.target) {
            tabLinks[i].classList.add("active")
        }
        else {
            tabLinks[i].classList.remove("active")
        }
    }
}


