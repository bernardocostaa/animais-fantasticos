

function navTab(){
  const ulAnimais = document.querySelectorAll('.js-ulAnimais li')
const sectionAnimais = document.querySelectorAll('.js-sectionAnimais section')

  if(sectionAnimais.length && ulAnimais.length){
    sectionAnimais[0].classList.add('ativo')
    function ativarTab(index){
      sectionAnimais.forEach((sections)=>{
        sections.classList.remove('ativo')
      })
    
      sectionAnimais[index].classList.add('ativo')
    }
    
    ulAnimais.forEach((uls, index)=>{
      uls.addEventListener('click', () =>{
        ativarTab(index)
      });
    });
  }
}

navTab();

function faqMostrar(){
  const faqSlide = document.querySelectorAll('.js-faq dt')
  const ativo = 'ativo'
  if(faqSlide.length){
    faqSlide[0].nextElementSibling.classList.add(ativo)
  
    function ativarFaq(){
    this.classList.add(ativo)
    this.nextElementSibling.classList.toggle(ativo)
    }
    
    faqSlide.forEach((item)=>{
      item.addEventListener('click', ativarFaq)
    })
  }
}
faqMostrar();



function scrollSuave(){
  const menuLinks = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollNavegador(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
  
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  
  // forma alternativa
  //   const top = section.offsetTop
  //   window.scrollTo({
  //     top: topo,
  //     behavior: 'smooth'
  //   })
  }
  menuLinks.forEach((links)=>{
    links.addEventListener('click',scrollNavegador)
  })
  
}
 scrollSuave()


function animacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll')

  if(sections.length){
  const windowMetade = window.innerHeight * 0.6
 
  function animaScroll(){
   sections.forEach((section)=>{
     const sectionTop = section.getBoundingClientRect().top;
     const visivelSection = (sectionTop - windowMetade) < 0
     if(visivelSection){
       section.classList.add('ativo')
     }else{
       section.classList.remove('ativo')
     }
   })
  }
  }
  animaScroll()
 
  window.addEventListener('scroll', animaScroll)
}
 
animacaoScroll()