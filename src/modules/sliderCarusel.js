const sliderCarusel = () => {
  const options = {
    main: '.companies-wrapper',
    wrap: '.companies-hor',
    slideToShow: 4,
    infinity: true,
    responsive: [{
      breakpoint: 1024,
      slideToShow: 3
    },
    {
      breakpoint: 768,
      slideToShow: 2
    },
    {
      breakpoint: 576,
      slideToShow: 1
    },
    ]
  };

  class sliderCarusel {

    constructor({
      main,
      wrap,
      position = 0,
      next,
      prev,
      slideToShow = 3,
      infinity = false,
      responsive = []
    }) {
      if (!(main || wrap)) {
        alert('Необходимо задать 2 свойства: main, wrap.');
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.next = document.querySelector(next);
      this.prev = document.querySelector(prev);
      this.slideToShow = slideToShow;
      this.options = {
        position,
        widthSlide: Math.ceil(100 / this.slideToShow),
        infinity,
        maxPosition: this.slides.length - this.slideToShow
      };
      this.responsive = responsive;
    }

    addClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider__wrap');
      for (const item of this.slides) {
        item.classList.add('glo-slider__item');
      }
    }

    addStyle() {
      let style = document.getElementById('sliderCarusel-style');
      if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarusel-style';
      }
      style.textContent = `
        .glo-slider {
          overflow: hidden !important;
        }
        .glo-slider__wrap {
          display: flex !important;
          transition: transform 0.5s !important;
          will-change: transform !important;
        }
        .glo-slider__item {
          margin: auto 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 0 0 ${this.options.widthSlide}% !important;
        }
        .glo-slider__prev,
        .glo-slider__next {
          margin: 0 20px;
          border: 15px solid transparent;
          background: transparent;
          
        }
        .glo-slider__next {
          border-left-color: #19b5fe
        }
        .glo-slider__prev {
          border-right-color: #19b5fe
        }
        .glo-slider__prev:hover,
        .glo-slider__next:hover,
        .glo-slider__prev:focus,
        .glo-slider__next:focus {
          background: transparent;
          outline: transparent;
        }

      `;
      document.head.appendChild(style);
    }

    ctrlSlider() {
      this.next.addEventListener('click', this.nextSlider.bind(this));
      this.prev.addEventListener('click', this.prevSlider.bind(this));
    }

    nextSlider() {
      if (this.options.infinity || this.options.position < this.options.maxPosition) {
        ++this.options.position;
        if (this.options.position > this.options.maxPosition) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `
        translateX(-${this.options.widthSlide * this.options.position}%)
      `;
      }
    }

    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `
        translateX(-${this.options.widthSlide * this.options.position}%)
        `;
      }
    }

    addArrow() {
      this.prev = document.createElement('button');
      this.next = document.createElement('button');

      this.prev.className = 'glo-slider__prev';
      this.next.className = 'glo-slider__next';

      this.main.appendChild(this.prev);
      this.main.appendChild(this.next);
    }

    responsiveInit() {
      const slideToShowDefault = this.slideToShow,
        allResponse = this.responsive.map(item => item.breakpoint),
        maxResponse = Math.max(...allResponse);

      const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < maxResponse) {
          for (let i = 0; i < allResponse.length; i++) {
            if (widthWindow < allResponse[i]) {
              this.slideToShow = this.responsive[i].slideToShow;
              this.options.widthSlide = Math.floor(100 / this.slideToShow);
              this.addStyle();
            }
          }
        } else {
          this.slideToShow = slideToShowDefault;
          this.options.widthSlide = Math.floor(100 / this.slideToShow);
          this.addStyle();
        }
      };
      checkResponse();

      window.addEventListener('resize', checkResponse);
    }


    init() {

      this.addClass();

      this.addStyle();

      if (this.prev && this.next) {
        this.ctrlSlider();
      } else {
        this.addArrow();
        this.ctrlSlider();
      }

      if (this.responsive) {
        this.responsiveInit();
      }
    }
  }

  const carusel = new sliderCarusel(options);
  carusel.init();
};

export default sliderCarusel;
