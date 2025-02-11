const smallImages = document.querySelectorAll(".gallery img");
const modals = document.querySelectorAll(".modal");
const fullImages = document.querySelectorAll(".full-image");


smallImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        fullImages[index].src = img.dataset.full; 
        modals[index].classList.add("open");
    });
});


modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            modal.classList.remove("open");
        }
    });
});



