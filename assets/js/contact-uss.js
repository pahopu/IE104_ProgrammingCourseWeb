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
loadHTML("../template/contact-us.html", "contact-us")
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/contact-us.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")

window.addEventListener("load", () => {
    const header = document.getElementsByClassName("header");
    const contact_us = document.getElementById("contact-us");
    const logout = document.getElementById("logout");

    logout.href = "../homepage.html";

    contact_us.style.paddingTop = `${header[0].offsetHeight}px`;
})

window.addEventListener("resize", () => {
    const contact_us = document.getElementById("contact-us");
    const header = document.getElementsByClassName("header");
    contact_us.style.paddingTop = `${header[0].offsetHeight}px`;
});