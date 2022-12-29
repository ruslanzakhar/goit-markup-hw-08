(() => {
    const refs = {
      openMenuBtn: document.querySelector("[header__menu-btn]"),
      closeMenuBtn: document.querySelector("[mobile__menu-close]"),
      menu: document.querySelector("[mobile__menu]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();