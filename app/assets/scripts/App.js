import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new MobileMenu();
new RevealOnScroll(".feature-item", 85);
new RevealOnScroll(".testimonial", 70);
new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click",e => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */'./modules/Modal').then(x => {
        modal = new x.default();
        setTimeout(() => modal.openTheModal(), 20);
      }).catch(() => console.log("There was a problem downloading the modal package"));
    } else {
      modal.openTheModal();
    }
  })
})

if (module.hot) {
  module.hot.accept();
}
