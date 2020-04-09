import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let mobileMenu = new MobileMenu();
new RevealOnScroll(".feature-item", 85);
new RevealOnScroll(".testimonial", 70);
new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
