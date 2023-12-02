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
loadHTML("../template/content-courses.html", "content-courses");
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/content-courses.css")
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")
loadJS("../assets/js/content-courses.js");

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const content_courses = document.getElementById("content-courses");
    const logout = document.getElementById("logout");
    const a = document.querySelectorAll("#address a");
    a[0].href = "./homepage-user.html";
    a[1].href = "./courses-user.html";

    logout.href = "./courses.html";

    navs[1].style.backgroundColor = "#464bef";
    navs[1].style.color = "white";
    content_courses.style.paddingTop = `${header[0].offsetHeight}px`;
})

window.addEventListener("resize", () => {
    const content_courses = document.getElementById("content-courses");
    const header = document.getElementsByClassName("header");
    content_courses.style.paddingTop = `${header[0].offsetHeight}px`;
});