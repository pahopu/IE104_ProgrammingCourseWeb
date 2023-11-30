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
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/intro-log-in.css");
loadCSS("../assets/css/flexer.css");
loadCSS("../assets/css/recommend-courses.css");
loadCSS("../assets/css/homepage-feedback.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")
loadJS("../assets/js/recommend-courses.js");
loadJS("../assets/js/homepage-feedback.js");

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const login_section = document.getElementById("intro-log-in");
    const header = document.getElementsByClassName("header");
    const logout = document.getElementById("logout");

    logout.href = "../homepage.html";
    
    navs[0].style.backgroundColor = "#464bef";
    navs[0].style.color = "white";
    login_section.getElementsByClassName("input-region")[0].style.opacity = "0";
    login_section.getElementsByClassName("input-region")[0].style.pointerEvents = "none";
    login_section.style.paddingTop = `${header[0].offsetHeight}px`;
});

window.addEventListener("resize", () => {
    const login_section = document.getElementById("intro-log-in");
    const header = document.getElementsByClassName("header");
    login_section.style.paddingTop = `${header[0].offsetHeight}px`;
});