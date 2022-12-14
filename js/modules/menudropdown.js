import outsideClick from './clickoutside.js'

export default function iniciarMenuDropdown() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]')
  
  function handleClick(event){
    event.preventDefault()
    // console.log(this);
    this.classList.add('ativar')
    outsideClick(this,['touchstart','click'] ,() =>{ // n pode ser function () da erro tem que ser arrom fuction 
      this.classList.remove('ativar')
    })
  }

  dropdownMenus.forEach((menu)=>{
    ['touchstart','click'].forEach(userEvent =>{
      menu.addEventListener(userEvent,handleClick)
    })
  })
  
  
 
}





