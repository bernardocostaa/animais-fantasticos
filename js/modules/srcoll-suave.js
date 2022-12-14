export default function iniciarScrollSuave() {
  const linksExternos = document.querySelectorAll('[data-menu="menu"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    console.log(href);
    console.log(event);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top:topo,
    //   behavior:'smooth'
    // })
  }

  linksExternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}


