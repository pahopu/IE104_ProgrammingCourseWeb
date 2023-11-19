function changeColor(cell) {
    var cells = document.querySelectorAll('td');
    cells.forEach(function(cell) {
      cell.classList.remove('select');
    });

    cell.classList.add('select');
}

function hideLesson(baihoc){
    var element = document.getElementById(baihoc)
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block"; 
    } else {
        element.style.display = "none"; 
    }

    var icon = document.qu
}