
// fadeIn
document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeIn');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeIn');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeIn').forEach(item => {
        observer.observe(item);
    });
  });

// fadeOut
document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeOut');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeOut');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeOut').forEach(item => {
        observer.observe(item);
    });
  });

// fadeInUp
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeInUp');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeInUp').forEach(item => {
        observer.observe(item);
    });
  });

   // fadeInDown
   document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInDown');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeInDown');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeInDown').forEach(item => {
        observer.observe(item);
    });
  });

  // fadeInScale
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInScale');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeInScale');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeInScale').forEach(item => {
        observer.observe(item);
    });
  });

  // fadeInRight
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInRight');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeInRight');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeInRight').forEach(item => {
        observer.observe(item);
    });
  });

  // fadeInLeft
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInLeft');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeInLeft');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeInLeft').forEach(item => {
        observer.observe(item);
    });
  });

  // fadeOutScale
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeOutScale');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__fadeOutScale');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_fadeOutScale').forEach(item => {
        observer.observe(item);
    });
  });

  // SlideInDown
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__slideInDown');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__slideInDown');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_SlideInDown').forEach(item => {
        observer.observe(item);
    });
  });

  // slideInRight
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__slideInRight');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__slideInRight');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_slideInRight').forEach(item => {
        observer.observe(item);
    });
  });

  // slideInLeft
  document.addEventListener('DOMContentLoaded', function () {
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__slideInLeft');
                entry.target.addEventListener('animationend', () => {
                    entry.target.classList.remove('animate__slideInLeft');
                });
            }
        });
    }, options);

    document.querySelectorAll('.animate-item_slideInLeft').forEach(item => {
        observer.observe(item);
    });
  });
