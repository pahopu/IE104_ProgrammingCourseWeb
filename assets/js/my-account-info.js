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
loadHTML("../template/user-info.html", "user-info")
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/user-info.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")
loadJS("../assets/js/user-info.js");

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const info = document.getElementById("user-info");
    const header = document.getElementsByClassName("header");
    const logout = document.getElementById("logout");

    logout.href = "./homepage.html";
    
    navs[0].style.backgroundColor = "#464bef";
    navs[0].style.color = "white";
    info.style.paddingTop = `${header[0].offsetHeight}px`;
});

window.addEventListener("resize", () => {
    const info = document.getElementById("user-info");
    const header = document.getElementsByClassName("header");
    info.style.paddingTop = `${header[0].offsetHeight}px`;
});