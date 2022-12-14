 export default class Acordion {
  constructor(list){
    this.acordionLista = document.querySelectorAll(list)
    this.classeAtivo = 'ativo'
  }

   toggleAcordion(item) {
    item.classList.toggle(this.classeAtivo);
    item.nextElementSibling.classList.toggle(this.classeAtivo);
    // console.log(this);
    // console.log(item);
  }

  addAcordinLista(){
    this.acordionLista.forEach((item) => {
      item.addEventListener("click", () => this.toggleAcordion(item));
    });
  }

  init(){
    if(this.acordionLista.length){
      this.toggleAcordion(this.acordionLista[0])
      this.addAcordinLista()
    }
    return this
  }
   
  
   
  
}
