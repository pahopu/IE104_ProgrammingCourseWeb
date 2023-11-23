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
        } else if (checkboxes[i].getAttribute("name") == listname) {
            checkboxes[i].checked = true;
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

const conditions = document.querySelectorAll(".condition h2");
const icons = document.querySelectorAll("i");

conditions.forEach((condition, i) => {
    condition.addEventListener("click", () => {
        if (icons[i].style.transform == "rotate(180deg)")
            icons[i].style.transform = "rotate(0deg)";
        else icons[i].style.transform = "rotate(180deg)";
    })
});