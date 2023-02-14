const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
		1200: {
			slidesPerView: 5,
			spaceBetween: 20,
		},
	},
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });