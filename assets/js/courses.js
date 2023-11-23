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
loadHTML("template/filter.html", "filter");
loadHTML("template/for-you-courses.html", "for-you-courses");
loadHTML("template/all-courses.html", "all-courses");
loadHTML("template/footer.html", "footer");

loadCSS("assets/css/header.css");
loadCSS("assets/css/filter.css");
loadCSS("assets/css/for-you-courses.css");
loadCSS("assets/css/all-courses.css");
loadCSS("assets/css/footer.css");

/*----------------Button for page-----------------------------------*/
function toggleElement() {
    var element = document.getElementById("content"); 
    var checkbox = document.getElementById("switch-on-off"); 

    if (checkbox.checked) {
        element.style.display = "none"; 
    } else {
        element.style.display = "block"; 
    }
}

function hideOtherCheckboxes(checkbox, listname) {
    var checkboxes = document.getElementsByName(listname); 
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != checkbox) {
            checkboxes[i].checked = false;
        }
    }
}

function hideListofCondition(listname) {
    var element = document.getElementById(listname); 

    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; 
    } else {
        element.style.display = "none"; 
    }
}

function toggleCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    if (checkbox) {
      if (checkbox.style.display === 'none') {
        checkbox.style.display = 'inline-block';
      } else {
        checkbox.style.display = 'none';
      }
    }
}
/*----------------Margin header------------------------------------*/

const navs = document.getElementsByClassName("nav-button");
const header = document.getElementsByClassName("header");
const headerid = document.getElementById("header");
window.addEventListener("load", () => {
    navs[4].style.backgroundColor = "#464bef";
    navs[4].style.color = "white";
    headerid.style.marginTop = `${header[0].offsetHeight}px`;
})