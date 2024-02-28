/*NavBar Scroll*/
let nav = document.querySelector(".navbar")
let active = document.querySelector(".active")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
}

let navCollapse = document.querySelector(".navbar-collapse.collapse")
let navLink = document.querySelectorAll(".nav-link")

navLink.forEach(function (a) {
    a.addEventListener("click", () => {
        navLink.forEach((a) => a.classList.remove("active"))
        a.classList.add("active")
        navCollapse.classList.remove("show")
    })
})

