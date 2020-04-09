import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", 85);
new RevealOnScroll(".testimonial", 70);

if (module.hot) {
  module.hot.accept();
}
