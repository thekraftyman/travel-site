import throttle from 'lodash/throttle';

class StickyHeader {
  constructor () {
    // initialize
    this.top = true;
    // select the header
    this.header = document.querySelector(".hnf--header");
    // create throttler
    this.scrollThrottle = throttle(this.main,100).bind(this);
    // run events
    this.events();
  }

  events () {
    window.addEventListener("scroll",this.scrollThrottle);
  }

  main () {
    // check if at top of page
    let pos = this.atTop();
    if (pos && !(this.top)) {
      this.header.classList.remove("hnf--header--scrolling");
      this.top = true;
    } else if (!pos && this.top) {
      this.header.classList.add("hnf--header--scrolling");
      this.top = false;
    }
  }

  atTop() {
    // returns true if scrolled to the top of the window else false
    return window.scrollY <= 60;
  }
}

export default StickyHeader
