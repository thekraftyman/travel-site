import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class RevealOnScroll {
  constructor (domItem, threshold=75) {
    // select all elements
    this.featureReveal = document.querySelectorAll(domItem);
    // save window height
    this.windowHeight = window.innerHeight;
    // save threshold for display
    this.threshold = threshold
    // hide the elements
    this.hideInitially();
    // create throttlers
    this.scrollThrottle = throttle(this.calcCaller,200).bind(this);
    // run events
    this.events();
  }

  events () {
    window.addEventListener("scroll", this.scrollThrottle);
    window.addEventListener("resize", debounce (() =>  {
      this.windowHeight = window.innerHeight;
    }, 369));
  }

  calcCaller () {
    this.featureReveal.forEach(element => {
      if (!element.isRevealed) {;
        this.isScrolledTo(element);
      }
    })
  }

  isScrolledTo (element) {
    if (window.scrollY + this.windowHeight > element.offsetTop) {
      let yval = element.getBoundingClientRect().top;
      let scrollPercent = (yval/this.windowHeight) * 100;
      if (scrollPercent < this.threshold) {
        element.classList.add("reveal-item--is-visible");
        element.isRevealed = true;
        if (element.isLastItem) {
          window.removeEventListener("scroll",this.scrollThrottle);
        }
      }
    }
  }

  hideInitially () {
    this.featureReveal.forEach(element => {
      element.classList.add("reveal-item");
      element.isRevealed = false;
    });
    this.featureReveal[this.featureReveal.length - 1].isLastItem = true;
  }


}

export default RevealOnScroll
