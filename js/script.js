//variables
const SHOW_MENU = document.querySelector("#show-menu");
const SHOW_MENU__CONTAINER = document.querySelector("nav > div");
const JAVASCIRPT_BUTTON = document.querySelector(".javascript");
SHOW_MENU.addEventListener("click", () => {
    SHOW_MENU__CONTAINER.classList.toggle("show");
    SHOW_MENU.classList.toggle("change");
    SHOW_MENU.style.display = "none !important";
});
SHOW_MENU__CONTAINER.addEventListener("click", () => {
    SHOW_MENU__CONTAINER.classList.remove("show");
    SHOW_MENU.classList.toggle("change");
});
JAVASCIRPT_BUTTON.addEventListener("click", () => {
    const ROCKET__ANIMATION = document.createElement("div");
    ROCKET__ANIMATION.classList.add("rocket__animation");
    const EXPLOSION3 = document.createElement("div");
    EXPLOSION3.classList.add("explode3");
    const EXPLOSION2 = document.createElement("div");
    EXPLOSION2.classList.add("explode2");
    EXPLOSION2.appendChild(EXPLOSION3);
    const EXPLOSION1 = document.createElement("div");
    EXPLOSION1.classList.add("explode1");
    EXPLOSION1.appendChild(EXPLOSION2);
    let height = window.innerHeight - 50;
    let width = window.innerWidth;
    let randomheight = Math.floor(Math.random() * height);
    let randomwidth = Math.floor(Math.random() * width);
    let leftOrRight = Math.floor(Math.random() * 2);
    /*
    console.log(
        height +
            " " +
            width +
            " random height: " +
            randomheight +
            " random width: " +
            randomwidth
    );
    */
    ROCKET__ANIMATION.style.top = randomheight + "px";
    if (leftOrRight) {
        ROCKET__ANIMATION.style.left = "-100px";
    }
    else {
        ROCKET__ANIMATION.style.right = "-100px";
        ROCKET__ANIMATION.style.transform = "rotate(-135deg)";
    }
    document
        .querySelector("#main")
        .appendChild(ROCKET__ANIMATION);
    let position = 0;
    let id = null;
    const animate = () => {
        if (position >= randomwidth) {
            clearInterval(id);
            document
                .querySelector("#main")
                .removeChild(ROCKET__ANIMATION);
            document
                .querySelector("#main")
                .appendChild(EXPLOSION1);
            EXPLOSION1.style.top = randomheight + "px";
            leftOrRight
                ? (EXPLOSION1.style.left = randomwidth - 70 + "px")
                : (EXPLOSION1.style.right = randomwidth - 70 + "px");
        }
        else {
            leftOrRight
                ? (ROCKET__ANIMATION.style.left = -100 + position + "px")
                : (ROCKET__ANIMATION.style.right = -100 + position + "px");
            position += 1;
        }
    };
    id = setInterval(animate, 1);
});
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("nav").style.top = "0";
    }
    else {
        document.querySelector("nav").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};
//INTERSECTION OBSERVER
const menu = document.querySelectorAll(".titles > div");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("animated", entry.isIntersecting);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
});
menu.forEach((item) => {
    observer.observe(item); // w tym miejscu jeszcze inicjujemy obserwowanie elementu
});
