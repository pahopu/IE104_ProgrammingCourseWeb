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
loadHTML("../template/my-courses.html", "my-courses")
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/my-courses.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const my_courses = document.getElementById("my-courses");
    const header = document.getElementsByClassName("header");
    const logout = document.getElementById("logout");

    logout.href = "./homepage.html";
    
    navs[0].style.backgroundColor = "#464bef";
    navs[0].style.color = "white";
    my_courses.style.paddingTop = `${header[0].offsetHeight}px`;
});

window.addEventListener("resize", () => {
    const my_courses = document.getElementById("my-courses");
    const header = document.getElementsByClassName("header");
    my_courses.style.paddingTop = `${header[0].offsetHeight}px`;
});