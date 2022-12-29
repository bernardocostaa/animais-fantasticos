import outsideClick from './clickoutside.js'

export default class MenuMobile{
  constructor(menuBotao,menuList,eventos){
    this.menuBotao = document.querySelector(menuBotao)
    this.menuList = document.querySelector(menuList)
    if(eventos === undefined){
      this.eventos = ['touchstart','click']
    }else{
      this.eventos = eventos
    }
    this.abriMenu = this.abriMenu.bind(this)
  }
 

   abriMenu(e){
    e.preventDefault()
    this.menuList.classList.add('ativo')
    this.menuBotao.classList.add('ativo')
    outsideClick(this.menuList,this.eventos,()=>{
      this.menuList.classList.remove('ativo')
      this.menuBotao.classList.remove('ativo')
    })
  }

  addEventoMenu(){
    this.eventos.forEach((evento)=>{
      this.menuBotao.addEventListener(evento,this.abriMenu)
    })
  }

  init(){
    if(this.menuList && this.menuBotao){
      this.addEventoMenu()
    }
    return this
  }

}

