function inicarTab() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function ativarTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemTab, index) => {
      itemTab.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}

inicarTab();

function inicarAcordion() {
  const acordionLista = document.querySelectorAll(".js-acordion dt");
  const classeAtivo = "ativo";
  if (acordionLista.length) {
    acordionLista[0].classList.add(classeAtivo);
    acordionLista[0].nextElementSibling.classList.add(classeAtivo);
    function activeAcordion() {
      this.classList.toggle(classeAtivo);
      this.nextElementSibling.classList.toggle(classeAtivo);
      console.log(this);
    }
    acordionLista.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}

inicarAcordion();

function iniciarScrollSuave() {
  const linksExternos = document.querySelectorAll('.js-menu a[href^="#"]');

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


iniciarScrollSuave()

function inicarAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll')
  if(sections.length){
    const metadeTela = window.innerHeight * 0.6
  
    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top
        const isSectioInvi = (sectionTop - metadeTela) < 0
        if(isSectioInvi){
          section.classList.add('ativo')
        }
      })
    }
    animaScroll()
    
    window.addEventListener('scroll',animaScroll)
  }
}

inicarAnimacaoScroll()

