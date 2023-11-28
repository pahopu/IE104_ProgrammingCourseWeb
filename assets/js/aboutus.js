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

loadHTML("../template/header.html", "header");
loadHTML("../template/intro-aboutus.html", "intro-aboutus");
loadHTML("../template/history.html", "history");
loadHTML("../template/ourteam.html", "ourteam");
loadHTML("../template/footer.html", "footer");
loadHTML("../template/modern-login.html", "modern-login");

loadCSS("../assets/css/header.css");
loadCSS("../assets/css/intro-aboutus.css");
loadCSS("../assets/css/history.css");
loadCSS("../assets/css/ourteam.css");
loadCSS("../assets/css/footer.css");
loadCSS("../assets/css/modern-login.css");

loadJS("../assets/js/modern-login.js")

window.addEventListener("load", () => {
    const navs = document.getElementsByClassName("nav-button");
    const header = document.getElementsByClassName("header");
    const intro_aboutus = document.getElementById("intro-aboutus")
    const login = document.getElementsByClassName("log-in");
    const signup = document.getElementsByClassName("sign-up");

    let checkVisibility = false;
    const popup_container = document.querySelectorAll("#modern-login .modern-login .container");

    navs[4].style.backgroundColor = "#464bef";
    navs[4].style.color = "white";
    intro_aboutus.style.paddingTop = `${header[0].offsetHeight}px`;

    const login_popup = document.querySelectorAll(".modern-login .sign-in #dn");
    login_popup[0].href = "aboutus-user.html";


    function blurBackground() {
        const blur = document.getElementById("blur");
        blur.classList.toggle('active');
        const popup = document.getElementById("popup");
        popup.classList.toggle('active');
    }

    login[0].addEventListener("click", () => {
        if (!checkVisibility) {
            blurBackground();
            checkVisibility = true;
            popup_container[0].classList.remove("active");
        }
    });

    signup[0].addEventListener("click", () => {
        if (!checkVisibility) {
            blurBackground();
            checkVisibility = true;
            popup_container[0].classList.add("active");
        }
    });

    document.addEventListener("click", (event) => {
        const isButton = event.target.tagName === "BUTTON"; // Kiểm tra nếu là button
        const isPopup = event.target.closest("#popup"); // Kiểm tra nếu là phần tử con của pop up

        if (!isPopup && !isButton && checkVisibility) {
            blurBackground();
            checkVisibility = false;
        }
    });
})

window.addEventListener("resize", () => {
    intro_aboutus.style.paddingTop = `${header[0].offsetHeight}px`;
});