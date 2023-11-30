function toggleDropdown(act, id, color) {
    var dropdown = document.getElementById(id);
    var actx = document.getElementsByClassName(act)[0];
    actx.classList.toggle(color);
    console.log(actx, color);
    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}