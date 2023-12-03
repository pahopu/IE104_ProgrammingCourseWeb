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

function changeColor(cell, danhmuc, section) {
    var section1 = document.getElementById(section);
    var danhmuc1 = document.getElementById(danhmuc);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('no-visible');
    });

    // Hiển thị section được chọn
    section1.add('visible');
    danhmuc1.add('select');

    // Thêm class để thực hiện hiệu ứng chuyển trang
    document.getElementById(section).classList.add('slide-left-enter');
    // Đợi một chút để kích hoạt transition
    setTimeout(() => {
    document.getElementById(section).classList.remove('slide-left-enter');
    document.getElementById(section).classList.add('slide-left-enter-to');
    }, 10);
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
