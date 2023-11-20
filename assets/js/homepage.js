function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

function loadCSS(url) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
}

function loadJS(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}

loadHTML("template/header.html", "header");
loadHTML("template/intro-log-in.html", "intro-log-in");
loadHTML("template/flexer.html", "flexer");
loadHTML("template/recommend-courses.html", "recommend-courses");
loadHTML("template/homepage-feedback.html", "homepage-feedback");
loadHTML("template/footer.html", "footer");
loadHTML("template/modern-login.html", "modern-login");

loadCSS("assets/css/header.css");
loadCSS("assets/css/intro-log-in.css");
loadCSS("assets/css/flexer.css");
loadCSS("assets/css/recommend-courses.css");
loadCSS("assets/css/homepage-feedback.css");
loadCSS("assets/css/footer.css");
loadCSS("assets/css/modern-login.css");

loadJS("assets/js/recommend-courses.js");
loadJS("assets/js/homepage-feedback.js");
loadJS("assets/js/modern-login.js")

const navs = document.getElementsByClassName("nav-button");
const signup = document.getElementsByClassName("sign-up");
const login_intro = document.getElementsByClassName("intro-log-in");
const login_section = document.getElementById("intro-log-in");
const header = document.getElementsByClassName("header");
const login = document.getElementsByClassName("log-in");
let checkVisibility = false

window.addEventListener("load", () => {
    navs[0].style.backgroundColor = "#464bef";
    navs[0].style.color = "white";
    login_section.style.paddingTop = `${header[0].offsetHeight}px`;

    function blurBackground() {
        const blur = document.getElementById("blur");
        blur.classList.toggle('active');
        const popup = document.getElementById("popup");
        popup.classList.toggle('active');
    }

    login[0].addEventListener("click", () => {
        if (!checkVisibility) {
            blurBackground();
            checkVisibility = true;
        }
    });

    signup[0].addEventListener("click", () => {
        login_intro[0].scrollIntoView({ behavior: "smooth" });
    });

    document.addEventListener("click", (event) => {
        const isButton = event.target.tagName === "BUTTON"; // Kiểm tra nếu là button
        const isPopup = event.target.closest("#popup"); // Kiểm tra nếu là phần tử con của pop up

        if (!isPopup && !isButton && checkVisibility) {
            blurBackground();
            checkVisibility = false;
        }
    });
});

window.addEventListener("resize", () => {
    login_section.style.paddingTop = `${header[0].offsetHeight}px`;
});