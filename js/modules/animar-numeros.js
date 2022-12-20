export default class AnimarNumeros{
  constructor(numeros,observeTarget,observadorClass){
    this.numeros = document.querySelectorAll(numeros)
    this.observadorClass = observadorClass
    this.observeTarget = document.querySelector(observeTarget)

    this.handleMutation = this.handleMutation.bind(this)

  }

  static incrementarNumeros(item){
    const total = +item.innerText
    const incremento = Math.floor(total / 100)
    let comeco = 0
    const timer = setInterval(()=>{
      comeco += incremento
      item.innerText = comeco
      if(comeco > total){
      item.innerText = total
        clearInterval(timer)
      }
    },25 * Math.random())
  }

  animarNumeros(){
    this.numeros.forEach((item)=>{
    this.constructor.incrementarNumeros(item)
    })
  }
  
   handleMutation(mutacao){
     if(mutacao[0].target.classList.contains(this.observadorClass)){
      this.observador.disconnect()
      this.animarNumeros()
    }
  }

  addEventoAnimarObserve(){
    this.observador = new MutationObserver(this.handleMutation)
    this.observador.observe(this.observeTarget,{attributes:true})
  }

  init(){
    this.addEventoAnimarObserve()
    return this
  }
  
 
}
