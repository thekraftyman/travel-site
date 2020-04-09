class MobileMenu {
  constructor () {
    // select the menu element
    this.menu = document.querySelector(".hnf--header--menu-icon");
    this.menuContent = document.querySelector(".hnf--header--menu-content");
    this.siteHeader = document.querySelector(".hnf--header")
    this.events();
  }

  // add an event listener
  events () {
    this.menu.addEventListener("click",() => this.toggleTheMenu());
  }

  toggleTheMenu() {
    this.menuContent.classList.toggle("hnf--header--menu-content--is-visible");
    this.siteHeader.classList.toggle("hnf--header--is-expanded");
    this.menu.classList.toggle("hnf--header--menu-icon--close-x")
  }
}

export default MobileMenu
