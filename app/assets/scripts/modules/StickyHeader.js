import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor () {
    // initialize
    this.top = true;
    // select the header
    this.header = document.querySelector(".hnf--header");
    // window height
    this.windowHeight = window.innerHeight;
    // page sections
    this.pageSections = document.querySelectorAll(".page-section");
    // create throttler
    this.scrollThrottle = throttle(this.main,100).bind(this);
    // scrolly value
    this.previousScrollY = window.scrollY;
    // run events
    this.events();
  }

  events () {
    window.addEventListener("scroll",this.scrollThrottle);
    window.addEventListener("resize", debounce (() =>  {
      this.windowHeight = window.innerHeight;
    }, 333));
  }

  main () {
    this.determineScrollDirection();
    // check if at top of page
    let pos = this.atTop();
    if (pos && !(this.top)) {
      this.header.classList.remove("hnf--header--scrolling");
      this.top = true;
    } else if (!pos && this.top) {
      this.header.classList.add("hnf--header--scrolling");
      this.top = false;
    }

    // calculate for highlighting header links
    this.pageSections.forEach(el => this.calcSection(el));
  }

  determineScrollDirection() {
    let currentScrollY = window.scrollY;
    if (currentScrollY > this.previousScrollY) {
      this.scrollDirection = 'down';
    } else {
      this.scrollDirection = 'up';
    }
    this.previousScrollY = currentScrollY;
  }

  calcSection(el) {
    // calculates what section we are in
    if ((window.scrollY + this.windowHeight > el.offsetTop) && (window.scrollY < el.offsetTop + el.offsetHeight)) {
      let scrollPercent = (el.getBoundingClientRect().y/this.windowHeight) * 100;
      if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' || scrollPercent < 33 && this.scrollDirection == 'up') {
        let matchingLink = el.getAttribute("data-matching-link");
        console.log(matchingLink)
        document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
        document.querySelector(matchingLink).classList.add("is-current-link");
      }
    }
  }

  atTop() {
    // returns true if scrolled to the top of the window else false
    return window.scrollY <= 60;
  }
}

export default StickyHeader
