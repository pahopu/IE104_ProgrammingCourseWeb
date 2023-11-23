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

loadHTML("template/docs-filter.html", "docs-filter");
loadHTML("template/all-documents.html", "all-documents");

loadCSS("assets/css/docs-filter.css");
loadCSS("assets/css/all-documents.css");

loadJS("assets/js/docs-filter.js");