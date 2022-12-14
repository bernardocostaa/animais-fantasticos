// const agora = new Date();
// agora;
// // Semana Mês Dia Ano HH:MM:SS GMT
// agora.getDate() // Dia
// agora.getDay() // Dia da Semana ex: 5 = Fri
// agora.getMonth() // Número dia mês
// agora.getFullYear() // Ano
// agora.getHours() // Hora
// agora.getMinutes() // Minutos
// agora.getTime() // ms desde 1970
// agora.getUTCHours() - 3 // Brasília


// const agora = new Date();
// const promocao = new Date('December 24 2018 23:59');

// function converterEmDias(time) {
//   return time / (24 * 60 * 60 * 1000);
// }

// const diasAgora = converterEmDias(agora);
// const diasPromocao = converterEmDias(promocao);

// const faltam = diasPromocao - diasAgora;


export default function iniciarFuncionamento(){
  const funcionamento = document.querySelector('[data-semana]')
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
  const horasSemana = funcionamento.dataset.horario.split(',').map(Number)
  // console.log(funcionamento);
  // console.log(diasSemana);
  // console.log(horasSemana);
  
  
  const dataAgora = new Date()
  const diaAgora = dataAgora.getDay()
  const horarioAgora = dataAgora.getHours()
  
  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
  
  const horarioAberto = (horarioAgora >= horasSemana[0] && horarioAgora < horasSemana[1])
  
  
  console.log(semanaAberto);
  console.log(horarioAberto);
  
  if(semanaAberto && horarioAberto){
    funcionamento.classList.add('aberto')
  }
}



// const agora = new Date()

// const futuro = new Date('Dec 24 2022')

// // console.log(agora);
// // console.log(agora.getDate());

// function trasformarEmDias(tempo){
//   return tempo / (24 * 60 * 60 * 1000) // dias 
//   // return tempo / ( 60 * 60 * 1000) // horas 
//   // return tempo / ( 60 * 1000) // minutos
// }

// const diasAgora = trasformarEmDias(agora)
// const diasFuturo = trasformarEmDias(futuro)

// console.log(diasFuturo - diasAgora);

// // console.log(agora.getTime());
// // console.log(futuro.getTime());

