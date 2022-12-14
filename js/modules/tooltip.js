export default function iniciarTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  const onMouseMove = {
    tooltipCaixa: '',
    handleEvent(event){
      this.tooltipCaixa.style.top = `${event.pageY + 20}px`
      this.tooltipCaixa.style.left = `${event.pageX + 20}px`
    }
  }

  const onMouseLeave = { // ver isso depois 1
    tooltipCaixa: '',// não precisa colocar vai ir sem
    element:'',// não precisa colocar vai ir sem
    handleEvent(){
     this.tooltipCaixa.remove()
      this.element.removeEventListener('mouseleave',onMouseLeave)// ver isso depois 1
      this.element.removeEventListener('mousemove',onMouseMove)// ver isso depois 1
    }
  }

  function criarTooltipBox(element){
    const boxTooltip = document.createElement('div')
    const texto = element.getAttribute('aria-label')
    boxTooltip.classList.add('tooltip')
    boxTooltip.innerText = texto
    document.body.appendChild(boxTooltip)
    return boxTooltip
  }

  function onMouseOver(){
   const tooltipCaixa = criarTooltipBox(this)
    // console.log(event);
    // console.log(this);
    onMouseMove.tooltipCaixa = tooltipCaixa
    this.addEventListener('mousemove',onMouseMove)// ver isso depois 1
  
    onMouseLeave.tooltipCaixa = tooltipCaixa// ver isso depois 1
    onMouseLeave.element = this
    this.addEventListener('mouseleave',onMouseLeave)// ver isso depois 
  }

tooltips.forEach((item)=>{
  item.addEventListener('mouseover',onMouseOver)
})

}

