import AnimarNumeros from './animar-numeros.js'

export default function iniciarFetchAnimais(){
  function criarAnimal(animal){
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  async function fetchAnimais(url){
    try{
      const animaisResp  = await fetch(url)
      // console.log(animaisResp);
      const animaisJosn  = await animaisResp.json()
      // console.log(animaisJosn);
      const numeroGrid = document.querySelector('.numeros-grid')
      // console.log(animaisJosn);
      animaisJosn.forEach(animal =>{
       const divAnimal = criarAnimal(animal)
       numeroGrid.appendChild(divAnimal)
      })
      const animarNumero = new AnimarNumeros('[data-numero]','.numeros','ativo')
      animarNumero.init()
    } catch(erro){
      console.log(erro);
    }
  }
  

  
  
  fetchAnimais('./animaisapi.json')
 
}
