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
loadHTML("../template/document-detail.html", "document-detail")
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/document-detail.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const detail = document.getElementById("document-detail");
    const logout = document.getElementById("logout");

    logout.href = "./documents.html";

    navs[2].style.backgroundColor = "#464bef";
    navs[2].style.color = "white";
    detail.style.paddingTop = `${header[0].offsetHeight}px`;
})

window.addEventListener("resize", () => {
    const detail = document.getElementById("document-detail");
    const header = document.getElementsByClassName("header");
    detail.style.paddingTop = `${header[0].offsetHeight}px`;
});