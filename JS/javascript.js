/*NavBar Scroll*/
let nav = document.querySelector(".navbar")
let active = document.querySelector(".active")

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled")
    } else {
        nav.classList.remove("header-scrolled")
    }
})

let navCollapse = document.querySelector(".navbar-collapse.collapse")
let navLink = document.querySelectorAll(".nav-link")

navLink.forEach(function (a) {
    a.addEventListener("click", () => {
        navLink.forEach((a) => a.classList.remove("active"))
        a.classList.add("active")
        navCollapse.classList.remove("show")

    })
})

// Page Scroll Animation 

let sections = document.querySelectorAll("section")
let sec_1 = document.querySelector(".sec-1")
let sec_4 = document.querySelector(".sec-4")

if (window.location.reload) {
    sec_1.classList.add("show-animate")
} else {
    sec_1.classList.remove("show-animate")
}

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 550;
        let height = sec.offsetHeight;
        if (top >= offset && top < offset + height) {
            sec.classList.add("show-animate")
        } else {
            if (top < offset + height - 200) {
                sec.classList.remove("show-animate")
            }
        }
    })
}

// Home Section Text Animation 
let portfolio_Heading = document.querySelector(".home_wrapper h6")
let Profession_Heading = document.querySelector(".home_wrapper .span")

let AnimationText = ["Welcome To My Portfolio", "Web Developer"];
let index = 0;
let index2 = 0;


function typeWriter() {
    portfolio_Heading.innerHTML += AnimationText[0].slice(index, index + 1);
    index++;
    if (index > AnimationText[0].length) {
        index = 0;
        setTimeout(() => {
            portfolio_Heading.innerHTML = "";
            typeWriter();
        }, 3500)
    } else {
        setTimeout(typeWriter, 100)
    }
}
typeWriter();

function typeWriter2(){
    Profession_Heading.innerHTML += AnimationText[1].slice(index2, index2 + 1);
    index2++
    if (index2 > AnimationText[1].length) {
        index2 = 0;
        setTimeout(() => {
            Profession_Heading.innerHTML = "";
            typeWriter2();
        }, 2500)
    } else {
        setTimeout(typeWriter2, 150)
    }
}
setTimeout(typeWriter2(),1000);
