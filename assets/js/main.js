(function() {
    window.onload = function() {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }
    window.onscroll = function() {
        /*var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            logo.src = 'assets/images/logo-white.png';
        } else {
            header_navbar.classList.remove("sticky");
            logo.src = 'assets/images/logo-white.png';
        }*/
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
            //logo.src = 'assets/images/logo-white.png';
        } else {
            header_navbar.classList.remove("sticky");
            //logo.src = 'assets/images/logo-white.png';
        }
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    function onScroll(event) {
        var sections = document.querySelectorAll('.page-scroll');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        for (var i = 0; i < sections.length; i++) {
            var currLink = sections[i];
            var val = currLink.getAttribute('href');
            var refElement = document.querySelector(val);
            var scrollTopMinus = scrollPos + 73;
            if (refElement.offsetTop <= scrollTopMinus && (refElement.offsetTop + refElement.offsetHeight > scrollTopMinus)) {
                document.querySelector('.page-scroll').classList.remove('active');
                currLink.classList.add('active');
            } else {
                currLink.classList.remove('active');
            }
        }
	};
	
    document.querySelectorAll('.nav-link[href^="#"], .scrollTo[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 100; // Adjust this based on your sticky header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    new WOW().init();
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function() {
        navbarToggler.classList.toggle("active");
    });
})();


/** ToolTip **/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



	
/** Hero Owl Carousel **/

$(".hero-owl").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    $(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    $("section").show();
  }, 200);
});

const $owlCarousel = $(".hero-owl").owlCarousel({
	items: 1,
	loop: true,
	nav: true,
	dots: true,
	rtl: false,
	autoplay:true,
	mouseDrag: false,
	touchDrag: false,
	pullDrag: false,
	responsive: {
	  0: {
		items: 1,
		nav: false, 
		dots: true
	  },
	  700: {
		items: 1,
		nav: false
	  },
	  1000: {      
		items: 1,
		nav: false
	  },
	  1200: {      
		items: 1,
		nav: true, 
		dots: true
	  }
	},
  navText: [
	'<i class="las la-angle-left"></i>',
	'<i class="las la-angle-right"></i>'
  ]
});

$owlCarousel.on("changed.owl.carousel", e => {
  $(".owl-slide-animated").removeClass("is-transitioned");

  const $currentOwlItem = $(".owl-item").eq(e.item.index);
  $currentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

  const $target = $currentOwlItem.find(".owl-slide-text");
  doDotsCalculations($target);
});

$owlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition();
  }, 50);
});

/*if there isn't content underneath the carousel*/
//$owlCarousel.trigger("refresh.owl.carousel");

setOwlDotsPosition();

function setOwlDotsPosition() {
  const $target = $(".owl-item.active .owl-slide-text");
  doDotsCalculations($target);
}

function doDotsCalculations(el) {

}

  