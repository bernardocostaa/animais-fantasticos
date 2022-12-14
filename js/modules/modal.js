export default function iniciarModal(){
  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const conteinerModal = document.querySelector('[data-modal="container"]')
  
  function toggleModal(event){
    event.preventDefault()
    conteinerModal.classList.toggle('ativo')
  }
  function cliqueForaModal(event){
    console.log(this);
    if(event.target === this){
      toggleModal(event)
    }
  }

  if(botaoAbrir && botaoFechar && conteinerModal){
    botaoAbrir.addEventListener('click',toggleModal)
    botaoFechar.addEventListener('click',toggleModal)
    conteinerModal.addEventListener('click',cliqueForaModal)
  }
  
  
}

