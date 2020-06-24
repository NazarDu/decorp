var doc = document;

var app = {

    init: function () {
        View();
        Modal();
        Controller();
        this.main();
        this.events();
    },

    main: function () {
        var rudo_slider_width = 300,
        rudo_slider__r;        
        function slider() {
            if (screen.width > 1300) {
                var rudo_slider = {
                    rudo_slider_slides: 4,	  // First see slides
                }
                rudo_slider__r = rudo_slider;
                return rudo_slider__r;
            } else if (screen.width <= 1300 && screen.width >= 1000) {
                var rudo_slider = {
                    rudo_slider_slides: 3,	  // First see slides
                }
                rudo_slider__r = rudo_slider;
                return rudo_slider__r;
            } else if (screen.width < 1000 && screen.width > 700) {
                var rudo_slider = {
                    rudo_slider_slides: 2,	  // First see slides
                }
                rudo_slider__r = rudo_slider;
                return rudo_slider__r;
            } else if (screen.width <= 700 && screen.width > 0) {
                var rudo_slider = {
                    rudo_slider_slides:        1,	   // First see slides
                    rudo_slider_auto_start:    true,   // Rudo auto start slide show
                    rudo_slider_delay:         10000   // Delay for auto start
                }
                rudo_slider__r = rudo_slider;
                return rudo_slider__r;
            };
            
        }; slider();
        RudoSlider(rudo_slider_width, rudo_slider__r);        
    },

    events: function () {
        doc.getElementsByClassName('wrapper__search')[0].addEventListener("click", View.showShopModalWindow);
        doc.getElementsByClassName('modal__close-i')[0].addEventListener("click", View.closeShopMadalWidow);
        doc.getElementsByClassName('openModalShop')[0].addEventListener("click", View.showModalBuy);
        doc.getElementsByClassName('openModalShop')[0].addEventListener("dblclick", View.closeModalBuy);        
    }

};

app.init();
