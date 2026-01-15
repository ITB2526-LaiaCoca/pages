document.addEventListener("DOMContentLoaded", () => {

  /* ENTRADA SUAVE AL CARGAR */
  const allBlocks = document.querySelectorAll(
    "header, .subtitulo, .navegador, .explanation, .imgs, footer"
  );

  allBlocks.forEach((block, index) => {
    block.classList.add("enter");

    setTimeout(() => {
      block.classList.add("enter-active");
    }, index * 80);
  });

});
