window.addEventListener("load", () => {
    const input = document.getElementById("uaemail");
    const anounce = document.getElementById("anouncee");
    const button = document.getElementById("get-new-pass");
    const notuser = document.getElementById("aaaa");
    const x = document.getElementById("xxx");
    const ccol = document.getElementById("ccol");
    const text = document.getElementById("anounce-pass");

    input.addEventListener("click", () => {
        notuser.innerText = "";
        anounce.style.display = "none";
    })

    button.addEventListener("click", () => {
        if (input.value == "") {
            notuser.innerText = "Bạn chưa nhập email/tên người dùng!";
        }
        else if (input.value != "codepro104" && input.value != "codepro@uit.edu.vn") {
            anounce.style.display = "flex";
        }
        else {
            anounce.style.display = "flex";
            ccol.style.backgroundColor = "green";
            text.style.color = "green";
            text.innerText = "Kiểm tra email để thực hiện khôi phục tài khoản!"
            setTimeout(() => {
                window.location.href = "../homepage.html";
            }, 5000);
        }
    })

    x.addEventListener("click", () => {
        anounce.style.display = "none";
    })
})