export default function fetchBitcoin(url,itemTarget){
  fetch(url).then((res)=>{
    res.json().then(body =>{
      const btcPreco = document.querySelector(itemTarget)
      btcPreco.innerText = (1000 / body.BRL.sell).toFixed(4)
    }).catch(erro =>{
      console.log(Error(erro));
    })
  })

}

