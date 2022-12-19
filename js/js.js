import ScrollSuave from './modules/srcoll-suave.js'
import ScrollAnimar from './modules/srcollAnimar.js'
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

const scrollAnimar = new ScrollAnimar('[data-scroll="anima"]')
scrollAnimar.init()



iniciarMenuDropdown()
iniciarMenuMobile()
iniciarFuncionamento()
fetchAnimais('./animaisapi.json','.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker','.btc-preco')


