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

loadHTML("../template/docs-filter.html", "docs-filter");
loadHTML("../template/all-documents.html", "all-documents");
loadHTML("../template/python-documents.html", "python-documents");
loadHTML("../template/lang-documents.html", "lang-documents");

loadCSS("../assets/css/docs-filter.css");
loadCSS("../assets/css/all-documents.css");

loadJS("../assets/js/docs-filter.js");

window.addEventListener("load", () => {
    const lang_content = document.querySelectorAll("#lang-content input");
    const documents = document.querySelectorAll(".ddisplay");

    lang_content.forEach(lang => {
        lang.addEventListener("click", () => {
            let unChecked = true;
            for (let i = 0; i < lang_content.length; i++)
                if (lang_content[i].checked) {
                    unChecked = false;
                    break;
                }

            if (unChecked) {
                documents.forEach((doc) => {
                    doc.style.display = "none";
                })
                documents[0].style.display = "block";
            }
        })
    })

    lang_content[0].addEventListener("click", () => {
        if (lang_content[0].checked) {
            documents.forEach((doc) => {
                doc.style.display = "none";
            })
            documents[2].style.display = "block";
        }
    })

    if (lang_content[0].checked) {
        documents.forEach((doc) => {
            doc.style.display = "none";
        })
        documents[2].style.display = "block";
    }

    lang_content[3].addEventListener("click", () => {
        if (lang_content[3].checked) {
            documents.forEach((doc) => {
                doc.style.display = "none";
            })
            documents[1].style.display = "block";
        }
    })

    if (lang_content[3].checked) {
        documents.forEach((doc) => {
            doc.style.display = "none";
        })
        documents[1].style.display = "block";
    }
})