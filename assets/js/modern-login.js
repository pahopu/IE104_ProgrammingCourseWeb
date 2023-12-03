window.addEventListener("load", () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    const inputs = document.querySelectorAll(".modern-login .sign-up input");
    const anouncess = document.querySelectorAll(".modern-login .mini-a");

    for (let i = 0; i < 3; i++) {
        inputs[i].addEventListener("click", () => {
            anouncess[i].style.display = "none";
        })
        inputs[i].addEventListener("blur", () => {
            if (!inputs[i].value) {
                anouncess[i].style.display = "flex";
            }
        })
    }

    inputs[3].addEventListener("click", () => {
        if (!inputs[3].checked)
            anouncess[3].style.display = "flex";
        else anouncess[3].style.display = "none";
    })

    const joinnow = document.querySelectorAll(".modern-login .sign-up button");
    joinnow[0].addEventListener("click", () => {
        if (inputs[0].value == "codepro104" && inputs[1].value == "codepro@uit.edu.vn" && inputs[2].value == "123456789" && inputs[3].checked)
            window.location.href = "./homepage-user.html"
        else {
            for (let i = 0; i < 3; i++)
                if (!inputs[i].value) {
                    anouncess[i].style.display = "flex";
                }
            if (!inputs[3].checked)
                anouncess[3].style.display = "flex";
        }
    })
})