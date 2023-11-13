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


loadHTML("template/header.html", "header");
loadHTML("template/intro-aboutus.html", "intro-aboutus")
loadHTML("template/footer.html", "footer");

loadCSS("assets/css/header.css");
loadCSS("assets/css/intro-aboutus.css");
loadCSS("assets/css/footer.css");