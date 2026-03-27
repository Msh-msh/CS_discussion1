class SlideController {
  constructor() {
    this.totalSlides = 11;
    this.currentSlide = 1;
    this.isAnimating = false;
    this.init();
  }

  init() {
    this.bindKeyboard();
    this.bindNavigation();
    this.updateIndicator();
  }

  bindKeyboard() {
    document.addEventListener('keydown', (e) => {
      switch(e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          this.nextSlide();
          break;
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          this.prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          this.goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          this.goToSlide(this.totalSlides);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          this.toggleFullscreen();
          break;
      }
    });
  }

  bindNavigation() {
    document.getElementById('prevBtn')?.addEventListener('click', () => this.prevSlide());
    document.getElementById('nextBtn')?.addEventListener('click', () => this.nextSlide());
    document.getElementById('fullscreenBtn')?.addEventListener('click', () => this.toggleFullscreen());

    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
    document.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.nextSlide() : this.prevSlide();
      }
    });
  }

  nextSlide() {
    if (!this.isAnimating && this.currentSlide < this.totalSlides) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (!this.isAnimating && this.currentSlide > 1) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  goToSlide(num) {
    if (num < 1 || num > this.totalSlides || num === this.currentSlide) return;
    this.isAnimating = true;

    const iframe = document.getElementById('slideFrame');
    const slideNames = [
      '', 
      '01-cover',
      '02-division',
      '03-turing',
      '04-compare-bg',
      '05-compare-scale',
      '06-compare-vaddps',
      '07-compare-conclusion',
      '08-interrupt-def',
      '09-interrupt-hw',
      '10-interrupt-rewrite',
      '11-end'
    ];

    iframe.style.opacity = '0';
    setTimeout(() => {
      iframe.src = `slides/${slideNames[num]}.html`;
      this.currentSlide = num;
      this.updateIndicator();
      iframe.onload = () => {
        setTimeout(() => {
          iframe.style.opacity = '1';
          this.isAnimating = false;
        }, 50);
      };
    }, 300);
  }

  updateIndicator() {
    const indicator = document.getElementById('pageIndicator');
    if (indicator) indicator.textContent = `${this.currentSlide} / ${this.totalSlides}`;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.style.opacity = this.currentSlide === 1 ? '0.3' : '1';
    if (nextBtn) nextBtn.style.opacity = this.currentSlide === this.totalSlides ? '0.3' : '1';
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.slideController = new SlideController();
});