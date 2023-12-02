window.addEventListener("load", function () {
    const photoButton = document.getElementById("photo");
    const photoInput = document.getElementById("photoInput");
    const avatarPreview = document.getElementById("avatarPreview");
    const avatarP = document.getElementById("avttt");

    photoButton.addEventListener("click", function () {
        photoInput.click();
    });

    photoInput.addEventListener("change", function () {
        const selectedFile = photoInput.files[0];

        if (selectedFile) {
            const imageURL = URL.createObjectURL(selectedFile);

            avatarPreview.style.backgroundImage = `none`;
            avatarP.src = imageURL;
        }
    });
});