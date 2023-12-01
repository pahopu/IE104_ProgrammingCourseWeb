function toggleDropdown(act, id, color) {
    var dropdown = document.getElementById(id);
    var actx = document.getElementsByClassName(act)[0];
    actx.classList.toggle(color);

    if (dropdown.style.display == "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }

    window.onclick = function (event) {
        if (!event.target.matches('.' + act)) {
            console.log('yes');
            if (dropdown.style.display == "block") {
                dropdown.style.display = "none";
            }
            if (actx.classList.contains(color)) {
                actx.classList.remove(color);
            }
        }
    };
}