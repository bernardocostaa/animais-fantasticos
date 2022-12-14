export default class ScrollSuave {
  constructor(links,opcoes){
    this.linksExternos = document.querySelectorAll(links)
    if(opcoes === undefined){
      this.opcoes = {behavior: "smooth",block: "start",}
    }else{
      this.opcoes = opcoes
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }

    scrollToSection(event) {
      // console.log(this);
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    // console.log(href);
    // console.log(event);
    section.scrollIntoView(this.opcoes);

  }
  
  addLinkEvent(){
    this.linksExternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }

  init(){
    if(this.linksExternos.length){
      this.addLinkEvent()
    }
    return this
  }
}




    // Forma alternativa
    // const topo = section.offsetTop
    // window.scrollTo({
    //   top:topo,
    //   behavior:'smooth'
    // })

   