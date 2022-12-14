export default function iniciarNumeros(){
  function animarNumeros(){
    const numeros = document.querySelectorAll('[data-numero]')
    
    numeros.forEach((item)=>{
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
    })
  }
  
  
  
  const observeTarget = document.querySelector('.numeros')
  let observador

  function handleMutation(mutacao){
    if(mutacao[0].target.classList.contains('ativo')){
      // console.log(mutacao);
      observador.disconnect()
      animarNumeros()
    }
  }
  
  observador = new MutationObserver(handleMutation)
  
  
  observador.observe(observeTarget,{attributes:true})
 
}
