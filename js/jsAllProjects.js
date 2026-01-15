document.addEventListener("DOMContentLoaded", () => {

  /* EFECTO HOVER EN PROJECTS  */
  const projects = document.querySelectorAll(".projectDIV");

  projects.forEach(projectDIV => {
    projectDIV.addEventListener("mouseenter", () => {
      projectDIV.style.transform = "translateY(-4px)";
      projectDIV.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
    });

    projectDIV.addEventListener("mouseleave", () => {
      projectDIV.style.transform = "translateY(0)";
      projectDIV.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
    });
  });

  /*  EFECTO HOVER EN NAV  */
  const nav = document.querySelector(".navegador");

  nav.addEventListener("mouseenter", () => {
    nav.style.transform = "translateY(-4px)";
    nav.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
  });

  nav.addEventListener("mouseleave", () => {
    nav.style.transform = "translateY(0)";
    nav.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
  });

  /* EFECTO HOVER EN projectImage Y projectDescription */
  const hoverBlocks = document.querySelectorAll(".projectImage, .projectDescription");

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

  /* projectDescription: EFECTO PRESIONADO */
  const projectDescriptions = document.querySelectorAll(".projectDescription");

  projectDescriptions.forEach(projectDescription => {
    projectDescription.addEventListener("mousedown", () => {
      projectDescription.style.transform = "translateY(1px)";
      projectDescription.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
    });

    projectDescription.addEventListener("mouseup", () => {
      projectDescription.style.transform = "translateY(0)";
      projectDescription.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)";
    });
  });

  /* TITULO PROYECTO LEVITANTE */
  const titles = document.querySelectorAll(".projectTitle");

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

  /*  ENTRADA SUAVE AL CARGAR */
  const allBlocks = document.querySelectorAll(
    "header, .subtitle, .navegador, .projectDIV, footer"
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
