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
loadHTML("../template/comunity.html", "comunity");
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/comunity.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js");

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const content_courses = document.getElementById("comunity");

    navs[3].style.backgroundColor = "#464bef";
    navs[3].style.color = "white";
    content_courses.style.paddingTop = `${135}px`;

    const a = document.querySelectorAll(".address a");
    a[0].href = "./homepage-user.html";
    a[1].href = "./comunity-user.html";

    const logout = document.getElementById("logout");
    logout.href = "./comunity.html";
})

window.addEventListener("resize", () => {
    const content_courses = document.getElementById("comunity");
    const header = document.getElementsByClassName("header");
    content_courses.style.marginTop = `${header[0].offsetHeight}px`;
});

/*-------------------------Set margin for header----------------------- */

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const headerid = document.getElementById("header-user");

    navs[3].style.backgroundColor = "#464bef";
    navs[3].style.color = "white";
    headerid.style.marginTop = `${header[0].offsetHeight}px`;
})
