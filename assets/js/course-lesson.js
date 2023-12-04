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
loadHTML("../template/course-lesson.html", "course-lesson");
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/course-lesson.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")

/*-------------------------Set margin for header----------------------- */

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const headerid = document.getElementById("header");

    navs[1].style.backgroundColor = "#464bef";
    navs[1].style.color = "white";
    headerid.style.marginTop = `${header[0].offsetHeight}px`;
})


/*------------------------Function for Courses Lesson-------------------------------------------*/

function changeColor(cell, sectionId) {
    document.querySelectorAll('.dang').forEach(item => {
        item.classList.remove('select');
    });
    cell.classList.add('select');

    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Hiển thị section được chọn
    document.getElementById(sectionId).style.display = 'block';
}

document.addEventListener('scroll', function () {
    var header = document.querySelector('danhmuc');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
