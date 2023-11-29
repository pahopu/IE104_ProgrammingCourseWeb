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
loadHTML("../template/intro-aboutus.html", "intro-aboutus");
loadHTML("../template/history.html", "history");
loadHTML("../template/ourteam.html", "ourteam");
loadHTML("../template/footer-user.html", "footer-user");
loadHTML("../template/modern-login.html", "modern-login");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/intro-aboutus.css");
loadCSS("../assets/css/history.css");
loadCSS("../assets/css/ourteam.css");
loadCSS("../assets/css/footer.css");
loadCSS("../assets/css/modern-login.css");

loadJS("../assets/js/header-user.js")
loadJS("../assets/js/modern-login.js")

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const intro_aboutus = document.getElementById("intro-aboutus")
    const logout = document.getElementById("logout");

    logout.href = "aboutus.html";

    navs[4].style.backgroundColor = "#464bef";
    navs[4].style.color = "white";
    intro_aboutus.style.paddingTop = `${header[0].offsetHeight}px`;
})

window.addEventListener("resize", () => {
    const intro_aboutus = document.getElementById("intro-aboutus")
    const header = document.getElementsByClassName("header");
    intro_aboutus.style.paddingTop = `${header[0].offsetHeight}px`;
});