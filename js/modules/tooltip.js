export default class Tooltip{
  constructor(tooltip){
    this.tooltips = document.querySelectorAll(tooltip)

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
  }

  
   
    onMouseMove(event){
      this.boxTooltip.style.top = `${event.pageY + 20}px`
      if(event.pageX + 250 > window.innerWidth){
        this.boxTooltip.style.left = `${event.pageX - 190}px`
      }else{
        this.boxTooltip.style.left = `${event.pageX + 20}px`
      }
      // console.log(event.pageX + 250 , window.innerWidth);
    }


  
    onMouseLeave(e){
     this.boxTooltip.remove()
      e.currentTarget.removeEventListener('mouseleave',this.onMouseLeave)
      e.currentTarget.removeEventListener('mousemove',this.onMouseMove)
    }
  

    criarTooltipBox(element){
    const boxTooltip = document.createElement('div')
    const texto = element.getAttribute('aria-label')
    boxTooltip.classList.add('tooltip')
    boxTooltip.innerText = texto
    document.body.appendChild(boxTooltip)
    this.boxTooltip = boxTooltip
  }

   onMouseOver(e){
   this.criarTooltipBox(e.currentTarget)
    // console.log(event);
    // console.log(this);
    e.currentTarget.addEventListener('mousemove',this.onMouseMove)
    e.currentTarget.addEventListener('mouseleave',this.onMouseLeave) 
  }

  addEventoTooltip(){
    this.tooltips.forEach((item)=>{
      item.addEventListener('mouseover',this.onMouseOver)
    })
    
  }

  init(){
    if(this.tooltips.length){
      this.addEventoTooltip()
    }
    return this
  }
}

