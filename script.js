const ulAnimais = document.querySelectorAll('.js-ulAnimais li')
const sectionAnimais = document.querySelectorAll('.js-sectionAnimais section')


function navTab(){
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



