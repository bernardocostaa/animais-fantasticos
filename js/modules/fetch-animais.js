import AnimarNumeros from './animar-numeros.js'

export default function fetchAnimais(url,itemTarget){
  function criarAnimal(animal){
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  const numeroGrid = document.querySelector(itemTarget)
  function preencherAnimal(animal){
    const divAnimal = criarAnimal(animal)
    numeroGrid.appendChild(divAnimal)
  }
  function animarNumeros(){
    const animarNumero = new AnimarNumeros('[data-numero]','.numeros','ativo')
    animarNumero.init()
  }
  async function criarAnimais(){
    try{
      const animaisResp  = await fetch(url)
      const animaisJosn  = await animaisResp.json()
      animaisJosn.forEach(animal => preencherAnimal(animal))
     animarNumeros()
    } catch(erro){
      console.log(erro);
    }
  }

  return criarAnimais()
 
}
