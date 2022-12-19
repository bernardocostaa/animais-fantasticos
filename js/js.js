import ScrollSuave from './modules/srcoll-suave.js'
import inicarAnimacaoScroll from './modules/animacao-srcoll.js'
import TabNav from './modules/iniciar-tab.js'
import Acordion from './modules/navegacao-tab.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import iniciarMenuDropdown from './modules/menudropdown.js'
import iniciarMenuMobile from './modules/menu-mobile.js'
import iniciarFuncionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'


const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]')
scrollSuave.init()
console.log(scrollSuave);

const acordionList = new Acordion("[data-acordion='acordion'] dt")
acordionList.init()

const tabNav = new TabNav("[data-tab='menu'] li","[data-tab='content'] section")
tabNav.init()

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()



inicarAnimacaoScroll()
iniciarMenuDropdown()
iniciarMenuMobile()
iniciarFuncionamento()
fetchAnimais('./animaisapi.json','.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker','.btc-preco')


// import $ from 'jquery';
// import _ from 'lodash';

// $('nav').hide()


// const diferenca = _.difference(['Banana', 'Uva'],['Banana','Morango'])
// console.log(diferenca);

// --mode define o modo da compilação
// --watch define se deve ficar observando
// --entry o arquivo de entrada
// -o a pasta de saída