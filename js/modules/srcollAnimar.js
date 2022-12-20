import debounce from "./debounce.js";

export default class ScrollAnimar{
  constructor(sections){
    this.sections = document.querySelectorAll(sections)
    this.metadeTela = Math.floor(window.innerHeight * 0.6)

    this.checarDistancias = debounce(this.checarDistancias.bind(this),50)
  }

  getDistancia(){
    this.distancias = [...this.sections].map((item)=>{
      const sectionTop = item.offsetTop
      return{
        element:item,
        sectionTop:sectionTop - this.metadeTela
      };
    });
  }

  checarDistancias(){
    this.distancias.forEach((item)=>{
      if(window.pageYOffset > item.sectionTop){
        item.element.classList.add('ativo')
      }else if( item.element.classList.contains('ativo')){
        item.element.classList.remove('ativo')
      }
    })
  }

  init(){
    if(this.sections.length){
      this.getDistancia()
      this.checarDistancias()
      window.addEventListener('scroll',this.checarDistancias)
    }
    return this
  }
 
  stop(){
    window.removeEventListener('scroll',this.checarDistancias)

  }
}

