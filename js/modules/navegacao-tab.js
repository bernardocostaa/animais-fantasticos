 export default function inicarAcordion() {
  const acordionLista = document.querySelectorAll("[data-acordion='acordion'] dt");
  const classeAtivo = "ativo"

  function activeAcordion() {
    this.classList.toggle(classeAtivo);
    this.nextElementSibling.classList.toggle(classeAtivo);
    // console.log(this);
  }
  if (acordionLista.length) {
    acordionLista[0].classList.add(classeAtivo);
    acordionLista[0].nextElementSibling.classList.add(classeAtivo);
    acordionLista.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
