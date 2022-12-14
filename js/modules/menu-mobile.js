import outsideClick from './clickoutside.js'

export default function iniciarMenuMobile(){
  const menuBotao = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const eventos = ['click','touchstart']
  
  function abriMenu(){
    menuList.classList.add('ativo')
    menuBotao.classList.add('ativo')
    outsideClick(menuList,['click','touchstart'],()=>{
      menuList.classList.remove('ativo')
      menuBotao.classList.remove('ativo')
    })
  }
  if(menuBotao){
    eventos.forEach((evento)=>{
      menuBotao.addEventListener(evento,abriMenu)
    })
  }

}

