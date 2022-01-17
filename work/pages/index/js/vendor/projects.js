export default ( Swiper, SwiperCore, tippy ) => {

	const swiper = new Swiper( `.projectsSwiper`, {

		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 30,

		simulateTouch: false,

		navigation: {
			nextEl: `.projects__button--next`,
			prevEl: `.projects__button--prev`,
		},

		breakpoints: {

			668: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 28,
			},

			924: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 50,
			},

			1025: {
				slidesPerView: 3,
				slidesPerGroup: 3,
				spaceBetween: 50,
			},
		},

	} )

	// SWIPER INDEX

	const gallerySlides = document.querySelectorAll( `.projects__slide` )
	const btnLeft = document.querySelector( `.projects__button--prev` )
	const btnRight = document.querySelector( `.projects__button--next` )
	let swiperPage = 1

	gallerySlides.forEach( slide => {

		slide.addEventListener( `keydown`, () => slide.children[0].click() )

	} )

	btnRight.addEventListener( `click`, () => {

		if ( swiperPage >= 1 ) swiperPage += 1

		swiperIndex()

	} )

	btnLeft.addEventListener( `click`, () => {

		if ( swiperPage > 1 ) swiperPage -= 1

		swiperIndex()

	} )

	function swiperIndexCount() {

		const width = window.innerWidth

		if ( width <= 1024 ) {

			return 2

		}

		else if ( width < 668 ) {

			return 1

		}

		else {

			return 3

		}

	}

	function swiperIndex() {

		gallerySlides.forEach( el => el.tabIndex = -1 )

		const count = swiperIndexCount()

		for ( let i = ( swiperPage - 1 ) * count; i < count * swiperPage; i++ ) {

			if ( i < gallerySlides.length ) {

				gallerySlides[i].tabIndex = 0

			}

		}

	}

	swiperIndex()

	// tippy

	tippy( `#projects__popup-1`, {

		duration: 700,
		animation: 'scale',
		trigger: 'click',
		content: `Пример современных тенденций - современная методология разработки`,

	} )

	tippy( `#projects__popup-2`, {

		duration: 700,
		animation: 'scale',
		trigger: 'click',
		content: `Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  `,

	} )

	tippy( `#projects__popup-3`, {

		duration: 700,
		animation: 'scale',
		trigger: 'click',
		content: `В стремлении повысить качество `,

	} )

}
