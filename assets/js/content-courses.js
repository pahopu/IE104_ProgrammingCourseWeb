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

loadHTML("../template/filter.html", "filter");
loadHTML("../template/for-you-courses.html", "for-you-courses");
loadHTML("../template/all-courses.html", "all-courses");

loadCSS("../assets/css/filter.css");
loadCSS("../assets/css/for-you-courses.css");
loadCSS("../assets/css/all-courses.css");

loadJS("../assets/js/docs-filter.js");