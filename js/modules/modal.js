export default class Modal{
  constructor(btnAbrir,btnFechar,modal){
    this.botaoAbrir = document.querySelector(btnAbrir)
    this.botaoFechar = document.querySelector(btnFechar)
    this.conteinerModal = document.querySelector(modal)

    this.cliqueForaModal = this.cliqueForaModal.bind(this)
    this.addToggleModal = this.addToggleModal.bind(this)

  }
  
   toggleModal(){
    console.log(this);
    this.conteinerModal.classList.toggle('ativo')
  }

  addToggleModal(event){
    console.log(this);
    event.preventDefault()
    this.toggleModal()
  }

   cliqueForaModal(event){
    console.log(this);
    if(event.target === this.conteinerModal){
      this.toggleModal(event)
    }
  }

  addEventosModal(){
    this.botaoAbrir.addEventListener('click',this.addToggleModal)
    this.botaoFechar.addEventListener('click',this.addToggleModal)
    this.conteinerModal.addEventListener('click',this.cliqueForaModal)
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.conteinerModal){
      this.addEventosModal()
    }
    return this
  }

  

  
  
  
}

