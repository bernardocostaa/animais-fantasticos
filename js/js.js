import ScrollSuave from './modules/srcoll-suave.js'
import ScrollAnimar from './modules/srcollAnimar.js'
import TabNav from './modules/iniciar-tab.js'
import Acordion from './modules/navegacao-tab.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import MenuDropdown from './modules/menudropdown.js'
import MenuMobile from './modules/menu-mobile.js'
import Funcionamento from './modules/funcionamento.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import SlideNav from "./modules/slide.js";




const scrollSuave = new ScrollSuave('[data-menu="menu"] a[href^="#"]')
scrollSuave.init()

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

const menudropdown = new MenuDropdown('[data-dropdown]')
menudropdown.init()

const menuMobile = new MenuMobile('[data-menu="button"]','[data-menu="list"]')
menuMobile.init()

const funcionamento = new Funcionamento('[data-semana]','aberto')
funcionamento.init()

fetchAnimais('./animaisapi.json','.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker','.btc-preco')

const slide = new SlideNav('.slide','.wrapper')

slide.init()
slide.addEventoControl('.customControl')


