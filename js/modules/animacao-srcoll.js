export default function inicarAnimacaoScroll(){
  const sections = document.querySelectorAll('[data-scroll="anima"]')
  const metadeTela = window.innerHeight * 0.6

  function animaScroll(){
    sections.forEach((section)=>{
      const sectionTop = section.getBoundingClientRect().top
      const isSectioInvi = (sectionTop - metadeTela) < 0
      if(isSectioInvi){
        section.classList.add('ativo')
      }else if( section.classList.contains('ativo')){
        section.classList.remove('ativo')
      }
    })
  }
  if(sections.length){
    animaScroll()
    
    window.addEventListener('scroll',animaScroll)
  }
}


console.log('sou malucooooooo');