      $(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                items: 4,
                nav: true,
                dots: true,
                loop: true,
                autoplay:true,
                autoplayTimeout:3000,
                autoplayHoverPause:false,
                responsiveClass:true,
                responsive: {
                  0: {
                    items: 1,
                  },
                  900: {
                    items: 4,
                  }
                }
              })
            })