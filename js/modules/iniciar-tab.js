export default function inicarTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  function ativarTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove("ativo");
    });
    
    const direcao = tabContent[index].dataset.anime
    console.log(direcao);
    tabContent[index].classList.add("ativo",direcao);
  }
  
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    tabMenu.forEach((itemTab, index) => {
      itemTab.addEventListener("click", () => {
        ativarTab(index);
      });
    });
  }
}

inicarTab()
