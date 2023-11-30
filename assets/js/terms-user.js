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
loadHTML("../template/terms.html", "terms")
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/terms.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const terms = document.getElementById("terms")
    const logout = document.getElementById("logout");
    const a = document.querySelectorAll("#address a");
    a[0].href = "./homepage-user.html";
    a[1].href = "./terms-user.html";

    logout.href = "./terms.html";

    navs[0].style.backgroundColor = "#464bef";
    navs[0].style.color = "white";
    terms.style.paddingTop = `${header[0].offsetHeight}px`;
})

window.addEventListener("resize", () => {
    const terms = document.getElementById("terms")
    const header = document.getElementsByClassName("header");
    terms.style.paddingTop = `${header[0].offsetHeight}px`;
});