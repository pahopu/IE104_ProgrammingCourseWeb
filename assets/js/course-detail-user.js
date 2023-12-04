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
loadHTML("../template/course-detail.html", "course-detail");
loadHTML("../template/footer-user.html", "footer-user");

loadCSS("../assets/css/header-user.css");
loadCSS("../assets/css/course-detail.css");
loadCSS("../assets/css/footer.css");

loadJS("../assets/js/header-user.js")

/*-------------------------Set margin for header----------------------- */

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const detail = document.getElementById("course-detail");

    navs[1].style.backgroundColor = "#464bef";
    navs[1].style.color = "white";
    detail.style.paddingTop = `${150}px`;

    const a = document.querySelectorAll(".address a");
    a[0].href = "./homepage-user.html";
    a[1].href = "./courses-user.html";
    a[2].href = "./course-detail-user.html";

    const button = document.querySelectorAll(".register .dangky");
    button[0].addEventListener("click", () => {
        button[0].href = "./course-lesson.html";
    })

    const logout = document.getElementById("logout");
    logout.href = "./course-detail.html";
})

window.addEventListener("resize", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const headerid = document.getElementById("header-user");

    navs[1].style.backgroundColor = "#464bef";
    navs[1].style.color = "white";
    headerid.style.marginTop = `${header[0].offsetHeight}px`;
});

/*-------------------------Set margin for header----------------------- */

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const headerid = document.getElementById("header-user");

    navs[1].style.backgroundColor = "#464bef";
    navs[1].style.color = "white";
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

function hideLesson(baihoc) {
    var element = document.getElementById(baihoc)
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

