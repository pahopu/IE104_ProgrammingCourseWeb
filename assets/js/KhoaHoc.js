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
    // Lấy checkbox theo id
    var checkbox = document.getElementById(checkboxId);
    
    // Đảm bảo checkbox tồn tại
    if (checkbox) {
      // Nếu checkbox đang ẩn, thì hiển thị; ngược lại, ẩn đi
      if (checkbox.style.display === 'none') {
        checkbox.style.display = 'inline-block';
      } else {
        checkbox.style.display = 'none';
      }
    }
  }