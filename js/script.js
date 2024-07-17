  $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
          $('.header').addClass('active');
      } else {
          $('.header').removeClass('active');
      }
  });

  $('.head-object').click(function() {
      var targetPosition = $('.about').offset().top;
      $('html, body').animate({ scrollTop: targetPosition }, 1000);
  });


  particlesJS("particles-js", {
      "particles": {
          "number": {
              "value": 100,
              "density": {
                  "enable": true,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#ffffff"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 0,
                  "color": "#000000"
              },
              "polygon": {
                  "nb_sides": 5
              },
              "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
              }
          },
          "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
          },
          "move": {
              "enable": true,
              "speed": 3,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "detect_on": "canvas",
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "grab"
              },
              "onclick": {
                  "enable": true,
                  "mode": "push"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 140,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200,
                  "duration": 0.4
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true
  });





  $(document).ready(function() {
      $(window).scroll(function() {
          var scroll = parseInt($(window).scrollTop()) + parseInt($(window).height());
          $('.about-line-block').each(function() {
              var offset = parseInt($(this).offset().top) + parseInt($(this).height());
              if (scroll > offset) {
                  $('.about-line').addClass('active');
              } else {
                  $('.about-line').removeClass('active');
              }
          });
      });
  });


  $(window).scroll(function() {
      var $this = $(this);
      if ($this.scrollTop() > 120) {
          $('.up-btn-block').fadeIn(300);
      } else {
          $('.up-btn-block').fadeOut(300);
      }
  });


  $('.up-btn').click(function() {
      $('html, body').animate({ scrollTop: 0 }, 1000);
  });


  var typed = new Typed('.head-slogan span', {
      strings: ['Професійна верстка сайтів, cтворення веб дизайнів', 'Правки в верстці, копія сайту'],
      typeSpeed: 90,
      loop: true,
  });


  $('.portfolio-slider').slick({
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '300px',
      prevArrow: $('.portfolio-slider-direction-item.left-arrow'),
      nextArrow: $('.portfolio-slider-direction-item.right-arrow'),
      responsive: [{
              breakpoint: 1024,
              settings: {
                  centerPadding: '100px',
              }
          },
          {
              breakpoint: 768,
              settings: {
                  centerPadding: '50px',
              }
          },
          {
              breakpoint: 600,
              settings: {
                  centerMode: false,
              }
          }

      ]
  });






  $('.portfolio-slider-item').hover(
      function() {
          $(this).find('.portfolio-inner-icon-container').fadeIn(100);
          $(this).find('.portfolio-inner-shadow').slideDown(200);
      },
      function() {
          $(this).find('.portfolio-inner-icon-container').fadeOut(0);
          $(this).find('.portfolio-inner-shadow').slideUp(100);
      }
  );




  $(".menu-item").click(function() {
      var scrollId = $(this).attr('data-scroll');
      $('html, body').animate({
          scrollTop: $(scrollId).offset().top
      }, 1000);
      $('.header-mob-inner-shadow, .header-mob-inner').fadeOut(200);
      $('.header-bars').removeClass('active');
  });

  $('.header-bars').click(function() {
      $(this).toggleClass('active');
      $('.header').toggleClass('nav-active');
      $('.header-mob-inner').fadeToggle(100);
      $('.header-mob-inner-shadow').fadeToggle(100);

  });

  $('.header-mob-inner-shadow').click(function() {
      $('.header-bars').click();
  });



  function updateCount() {
      let count = localStorage.getItem('visitCount');
      if (!count) {
          count = 0;
      }
      count++;
      localStorage.setItem('visitCount', count);
      document.querySelector('.couner span').textContent = count;
      $({ numberValue: 0 }).animate({ numberValue: count }, {
          duration: 1000,
          easing: "linear",
          step: function(val) { $('.couner span').html(Math.ceil(val)); }
      });


  };

  window.addEventListener('load', updateCount);