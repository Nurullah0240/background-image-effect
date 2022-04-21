let panels = document.querySelectorAll(".panel");

panels.forEach(sinif => {
    sinif.addEventListener("click", () => {
        removeActive();
        sinif.classList.add("active");
});
});

function removeActive(){
    panels.forEach(sinif => {
        sinif.classList.remove("active");
});
}