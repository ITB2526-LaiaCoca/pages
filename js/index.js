document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       EFECTO HOVER EN PROJECTS
       ========================= */
    const projects = document.querySelectorAll(".project");

    projects.forEach(project => {
        project.addEventListener("mouseenter", () => {
            project.style.transform = "translateY(-4px)";
            project.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
        });

        project.addEventListener("mouseleave", () => {
            project.style.transform = "translateY(0)";
            project.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
        });
    });

    /* =========================
       EFECTO HOVER EN NAV
       ========================= */
    const nav = document.querySelector(".menu-lateral");

    nav.addEventListener("mouseenter", () => {
        nav.style.transform = "translateY(-4px)";
        nav.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
    });

    nav.addEventListener("mouseleave", () => {
        nav.style.transform = "translateY(0)";
        nav.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
    });

    /* =========================
       EFECTO HOVER EN IMG Y ITEM
       ========================= */
    const hoverBlocks = document.querySelectorAll(".img, .item");

    hoverBlocks.forEach(block => {
        block.addEventListener("mouseenter", () => {
            block.style.transform = "translateY(-4px)";
            block.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
        });

        block.addEventListener("mouseleave", () => {
            block.style.transform = "translateY(0)";
            block.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
        });
    });

    /* =========================
       ITEM: EFECTO PRESIONADO
       ========================= */
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        item.addEventListener("mousedown", () => {
            item.style.transform = "translateY(1px)";
            item.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
        });

        item.addEventListener("mouseup", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
        });
    });

    /* =========================
       TITULO PROYECTO LEVITANTE
       ========================= */
    const titles = document.querySelectorAll(".titleProject");

    titles.forEach(title => {
        title.addEventListener("mouseenter", () => {
            title.style.transform = "translateY(-5px)";
            title.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            title.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)";
        });

        title.addEventListener("mouseleave", () => {
            title.style.transform = "translateY(0)";
            title.style.boxShadow = "none";
        });
    });

    /* =========================
       ENTRADA SUAVE AL CARGAR
       ========================= */
    const allBlocks = document.querySelectorAll(
        "header, .subtitulo, .menu-lateral, .project, footer"
    );

    allBlocks.forEach((block, index) => {
        block.style.opacity = "0";
        block.style.transform = "translateY(10px)";

        setTimeout(() => {
            block.style.transition = "all 0.4s ease";
            block.style.opacity = "1";
            block.style.transform = "translateY(0)";
        }, index * 80);
    });

});
