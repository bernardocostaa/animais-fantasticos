export default class Funcionamento{
  constructor(funcionamento,classAberto){
    this.funcionamento = document.querySelector(funcionamento)
    this.classAberto = classAberto
  }
  
  dadosFuncionamento(){
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number)
    this.horasSemana = this.funcionamento.dataset.horario.split(',').map(Number)

  }

  dadosAgora(){
     this.dataAgora = new Date()
     this.diaAgora = this.dataAgora.getDay()
     this.horarioAgora = this.dataAgora.getUTCHours() - 3
  }

  dadosAberto(){
     this.semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1
     this.horarioAberto = (this.horarioAgora >= this.horasSemana[0] && this.horarioAgora < this.horasSemana[1])
     return this.semanaAberto && this.horarioAberto
  }
  
  ativarAberto(){
    this.funcionamento.classList.add(this.classAberto)
  }

  init(){
    if(this.dadosAberto){
      this.dadosAgora()
      this.dadosFuncionamento()
      this.ativarAberto()
    }
    return this
  }
  
}


