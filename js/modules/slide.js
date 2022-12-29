import debounce from "./debounce.js";

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = {
      finalPosition: 0,
      startX: 0,
      movement: 0,
    };
    this.ativo = "ativo";
    this.changeEvent = new Event("changeEvent");
  }

  transsition(active) {
    this.slide.style.transition = active ? "transform .3s" : "";
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px,0,0)`;
  }

  upadatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    let moveType;
    if (event.type === "mousedown") {
      event.preventDefault();
      this.dist.startX = event.clientX;
      moveType = "mousemove";
    } else {
      this.dist.startX = event.changedTouches[0].clientX;
      moveType = "touchmove";
    }
    this.wrapper.addEventListener(moveType, this.onMove);
    this.transsition(false);
  }

  onMove(event) {
    const pointerPosition =
      event.type === "mousemove"
        ? event.clientX
        : event.changedTouches[0].clientX;
    const finalPosition = this.upadatePosition(pointerPosition);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    const moveType = event.type === "mouseup" ? "mousemove" : "touchmove";
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
    this.changeSlideOnEnd();
    this.transsition(true);
  }

  changeSlideOnEnd() {
    if (this.dist.movement > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.dist.movement < 120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("touchstart", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
    this.wrapper.addEventListener("touchend", this.onEnd);
  }

  bindEvent() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onRezise = debounce(this.onRezise.bind(this), 200);
    this.activeNextSlide = this.activeNextSlide.bind(this);
    this.activePrevSlide = this.activePrevSlide.bind(this);
  }

  // slide config

  slidesPosicao(slide) {
    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margin);
  }

  slidesConfg() {
    this.slideArray = [...this.slide.children].map((element) => {
      const position = this.slidesPosicao(element);
      return {
        position,
        element,
      };
    });
    console.log(this.slideArray);
  }

  changeSlide(index) {
    const slideAtivo = this.slideArray[index];
    this.moveSlide(slideAtivo.position);
    this.slideIndexNav(index);
    this.dist.finalPosition = slideAtivo.position;
    this.changeActiveSlide();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveSlide() {
    this.slideArray.forEach((item) => {
      item.element.classList.remove(this.ativo);
    });
    this.slideArray[this.index.active].element.classList.add(this.ativo);
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    };
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) {
      this.changeSlide(this.index.prev);
    }
  }

  activeNextSlide() {
    if (this.index.next !== undefined) {
      this.changeSlide(this.index.next);
    }
  }

  onRezise() {
    setTimeout(() => {
      this.slidesConfg();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addReziseEvent() {
    window.addEventListener("resize", this.onRezise);
  }

  init() {
    this.bindEvent();
    this.transsition(true);
    this.addSlideEvent();
    this.slidesConfg();
    this.addReziseEvent();
    this.changeSlide(0);
    return this;
  }
}

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControl();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.addArrowEvents();
  }

  addArrowEvents() {
    this.prevElement.addEventListener("click", this.activePrevSlide);
    this.nextElement.addEventListener("click", this.activeNextSlide);
  }

  addAtivoClass() {
    this.controlArray.forEach((item) => {
      item.classList.remove(this.ativo);
    });
    this.controlArray[this.index.active].classList.add(this.ativo);
  }

  creatControll() {
    const control = document.createElement("ul");
    control.dataset.control = "slide";
    this.slideArray.forEach((_item, index) => {
      control.innerHTML += `<li><a href="#slide${index + 1}">${index}</a></li>`;
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener("changeEvent", this.addAtivoClass);
  }

  addEventoControl(customControl) {
    this.control =
      document.querySelector(customControl) || this.creatControll();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.eventControl);
    this.addAtivoClass();
  }

  bindControl() {
    this.eventControl = this.eventControl.bind(this);
    this.addAtivoClass = this.addAtivoClass.bind(this);
  }
}
