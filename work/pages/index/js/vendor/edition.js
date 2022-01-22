export default ( Swiper, SwiperCore ) => {

	const windowWidth = document.querySelector( `body` ).offsetWidth

	const swiper = new Swiper( `.editionSwiper`, {

		slidesPerView: 1,
		slidesPerGroup: 0,
		spaceBetween: 0,

		simulateTouch: false,

		navigation: {
			nextEl: `#edition__button--next`,
			prevEl: `#edition__button--prev`,
		},

		pagination: {

			el: `#edition__pagination`,
			type: `fraction`,
		},

		breakpoints: {

			425: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 38,
			},

			668: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 32,
			},

			924: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 44,
			},

			1630: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 50,
			},
		},

	} )

	// SWIPER INDEX

	const gallerySlides = document.querySelectorAll( `.edition-slide__btn` )
	const btnLeft = document.querySelector( `.edition__btn--prev` )
	const btnRight = document.querySelector( `.edition__btn--next` )
	let swiperPage = document.querySelector( `.edition` ).querySelector( `.swiper-pagination-current` ).textContent

	btnRight.addEventListener( `click`, () => {

		swiperPage = document.querySelector( `.edition` ).querySelector( `.swiper-pagination-current` ).textContent

		swiperIndex()

	} )

	btnRight.addEventListener( `keydown`, ( event ) => {

		swiperPage = document.querySelector( `.edition` ).querySelector( `.swiper-pagination-current` ).textContent

		if ( event.keyCode === 13 ) swiperIndex()

	} )

	btnLeft.addEventListener( `click`, () => {

		swiperPage = document.querySelector( `.edition` ).querySelector( `.swiper-pagination-current` ).textContent

		swiperIndex()

	} )

	btnLeft.addEventListener( `keydown`, ( event ) => {

		swiperPage = document.querySelector( `.edition` ).querySelector( `.swiper-pagination-current` ).textContent

		if ( event.keyCode === 13 ) swiperIndex()

	} )

	function swiperIndexCount() {

		const width = window.innerWidth

		// if ( width < 1630 ) {

		// 	return 2

		// }

		if ( width < 668 ) {

			return 2

		}

		else {

			return 3

		}

	}

	function swiperIndex() {

		if ( window.innerWidth > 425 ) {

			gallerySlides.forEach( el => el.tabIndex = -1 )
	
			const count = swiperIndexCount()
	
			for ( let i = ( swiperPage - 1 ) * count; i < count * swiperPage; i++ ) {
	
				if ( i < gallerySlides.length ) {
	
					gallerySlides[i].tabIndex = 0
	
				}
	
			}

		}


	}

	swiperIndex()

}