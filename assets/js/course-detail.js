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
loadHTML("template/course-detail.html", "course-detail");
loadHTML("template/footer.html", "footer");

loadCSS("assets/css/header.css");
loadCSS("assets/css/course-detail.css");
loadCSS("assets/css/footer.css");

const navs = document.getElementsByClassName("nav-button");
window.addEventListener("load", () => {
    navs[4].style.backgroundColor = "#464bef";
    navs[4].style.color = "white";
})
function changeColor(cell) {
    var cells = document.querySelectorAll('td');
    cells.forEach(function(cell) {
      cell.classList.remove('select');
    });

    cell.classList.add('select');
}

function hideLesson(baihoc){
    var element = document.getElementById(baihoc)
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; 
    } else {
        element.style.display = "none"; 
    }

    var icon = document.qu
}