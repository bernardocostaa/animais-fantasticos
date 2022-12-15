export default class TabNav {
  constructor(menu,content){
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.classAtivo = 'ativo'
  }
 
     ativarTab(index) {
    this.tabContent.forEach((item) => {
      item.classList.remove(this.classAtivo);
    });
    
    const direcao = this.tabContent[index].dataset.anime
    console.log(direcao);
    this.tabContent[index].classList.add(this.classAtivo,direcao);
  }

  addEventoTabNav(){
    this.tabMenu.forEach((itemTab, index) => {
      itemTab.addEventListener("click", () => {
        this.ativarTab(index);
      });
    });
  }

  init(){
    if(this.tabMenu.length && this.tabContent.length){
      this.ativarTab(0)
      this.addEventoTabNav()
    }
    return this
  }

}


