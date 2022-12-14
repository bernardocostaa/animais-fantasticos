export default function iniciarFetchBitcoin(){
  fetch('https://blockchain.info/ticker').then((res)=>{
    res.json().then(body =>{
      console.log(body.BRL.sell);
      const btcPreco = document.querySelector('.btc-preco')
      btcPreco.innerText = (1000 / body.BRL.sell).toFixed(4)
    }).catch(erro =>{
      console.log(Error(erro));
    })
  })

}

