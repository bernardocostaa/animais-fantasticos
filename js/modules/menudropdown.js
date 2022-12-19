import outsideClick from './clickoutside.js'

export default class MenuDropdown {
  constructor(dropdownMenus,eventos){
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    if(eventos === undefined){
      this.eventos = ['touchstart','click']
    }else{
      this.eventos = eventos
    }
    this.ativarDropdownMenu = this.ativarDropdownMenu.bind(this)
  }
  
   ativarDropdownMenu(event){
    const element = event.currentTarget
    event.preventDefault()
    // console.log(this);
    element.classList.add('ativar')
    outsideClick(element,this.eventos ,() =>{
      element.classList.remove('ativar')
    })
  }

  addEventosDropdown(){
    this.dropdownMenus.forEach((menu)=>{
      this.eventos.forEach(userEvent =>{
        menu.addEventListener(userEvent,this.ativarDropdownMenu)
      })
    })
  }

  init(){
    this.addEventosDropdown()
    return this
  }

  

}






