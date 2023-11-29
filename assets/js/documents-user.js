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
loadHTML("../template/content-documents.html", "content-documents");
loadHTML("../template/footer-user.html", "footer-user");
loadHTML("../template/modern-login.html", "modern-login");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/content-documents.css")
loadCSS("../assets/css/footer.css");
loadCSS("../assets/css/modern-login.css");

loadJS("../assets/js/header-user.js")
loadJS("../assets/js/modern-login.js");
loadJS("../assets/js/content-documents.js");

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const content_documents = document.getElementById("content-documents");
    const logout = document.getElementById("logout");

    logout.href = "documents.html";

    navs[2].style.backgroundColor = "#464bef";
    navs[2].style.color = "white";
    content_documents.style.paddingTop = `${header[0].offsetHeight}px`;
})

window.addEventListener("resize", () => {
    const content_documents = document.getElementById("content-documents");
    const header = document.getElementsByClassName("header");
    content_documents.style.paddingTop = `${header[0].offsetHeight}px`;
});