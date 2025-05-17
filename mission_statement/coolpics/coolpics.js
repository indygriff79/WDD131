const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("hide");
}

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}

menuButton.addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
handleResize();

const gallery = document.querySelector(".gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewer-img");
const closeBtn = document.querySelector(".close-viewer");

gallery.addEventListener("click", (event) => {
    const clickImg = event.target.closest("img");
    if (clickedImg) {
        const src = clickedImg.getAttribute("src");
        const alt = clickedImg.getAttribute("alt");
        const fullSrc = src.split("-")[0] + "-full.jpeg";
        viewerImg.setAttribute("src", fullSrc);
        viewerImg.setAttribute("alt", alt);
        viewer.showModal();
    }
});

closeBtn.addEventListener("click", () =>  {
    viewer.closest();
});

viewer.addEventListener("click", (event) => {
    if (event.target === viewer) {
        viewer.close();
    }
});