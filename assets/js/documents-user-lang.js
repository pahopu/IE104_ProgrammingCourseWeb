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

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/content-documents.css")
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")
loadJS("../assets/js/content-documents.js");

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const content_documents = document.getElementById("content-documents");
    const logout = document.getElementById("logout");
    const a = document.querySelectorAll("#address a");
    a[0].href = "./homepage-user.html";
    a[1].href = "./documents-user.html";

    logout.href = "./documents.html";

    navs[2].style.backgroundColor = "#464bef";
    navs[2].style.color = "white";
    content_documents.style.paddingTop = `${header[0].offsetHeight}px`;

    const lang_content = document.querySelectorAll("#lang-content input")
    lang_content[0].checked = true;
})

window.addEventListener("resize", () => {
    const content_documents = document.getElementById("content-documents");
    const header = document.getElementsByClassName("header");
    content_documents.style.paddingTop = `${header[0].offsetHeight}px`;
});