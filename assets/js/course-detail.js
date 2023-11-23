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

/*-------------------------Set margin for header----------------------- */

const navs = document.getElementsByClassName("nav-button");
const header = document.getElementsByClassName("header");
const headerid = document.getElementById("header");

window.addEventListener("load", () => {
    navs[4].style.backgroundColor = "#464bef";
    navs[4].style.color = "white";
    headerid.style.marginTop = `${header[0].offsetHeight}px`;
})

/*------------------------Function for Courses Detail-------------------------------------------*/

function changeColor(cell, section) {
    // Cuộn trang
    var section1 = document.getElementById(section);
    section1.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' }); // 'smooth' tạo hiệu ứng mượt mà
}

document.addEventListener('scroll', function () {
    // Lấy đối tượng header và kiểm tra vị trí cuộn
    var header = document.querySelector('danhmuc');
    var scrollPosition = window.scrollY;

    // Nếu cuộn xuống đủ lớn, thêm lớp 'fixed' vào header để cố định nó
    if (scrollPosition > 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

function hideLesson(baihoc){
    var element = document.getElementById(baihoc)
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; 
    } else {
        element.style.display = "none"; 
    }
}

