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

loadHTML("../template/header-user.html", "header-user");
loadHTML("../template/intro-log-in.html", "intro-log-in");
loadHTML("../template/flexer.html", "flexer");
loadHTML("../template/recommend-courses.html", "recommend-courses");
loadHTML("../template/homepage-feedback.html", "homepage-feedback");
loadHTML("../template/footer.html", "footer");
loadHTML("../template/modern-login.html", "modern-login");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/intro-log-in.css");
loadCSS("../assets/css/flexer.css");
loadCSS("../assets/css/recommend-courses.css");
loadCSS("../assets/css/homepage-feedback.css");
loadCSS("../assets/css/footer.css");
loadCSS("../assets/css/modern-login.css");

loadJS("../assets/js/recommend-courses.js");
loadJS("../assets/js/homepage-feedback.js");
loadJS("../assets/js/modern-login.js")

const navs = document.getElementsByClassName("nav-button");
const login_section = document.getElementById("intro-log-in");
const header = document.getElementsByClassName("header");

window.addEventListener("load", () => {
    navs[0].style.backgroundColor = "#464bef";
    navs[0].style.color = "white";
    login_section.style.paddingTop = `${header[0].offsetHeight}px`;
});

window.addEventListener("resize", () => {
    login_section.style.paddingTop = `${header[0].offsetHeight}px`;
});