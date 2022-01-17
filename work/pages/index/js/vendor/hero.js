export default ( ) => {

	const SLIDER = document.querySelector( `.hero__slider` )

	const SLIDES = SLIDER.querySelectorAll( `.hero__slide` )

	for ( let index = 0; index < SLIDES.length; index++ ) {

		SLIDES[index].style.transform = `translateX(${0}%)`

	}

	function transform() {

		const CURRENT_INDEX = Array.from( SLIDES ).indexOf( SLIDER.querySelector( `.hero__slide--current` ) )
		const CURRENT = SLIDES[CURRENT_INDEX]

		for ( let el of SLIDES ) {

			const TRANS = el.style.transform

			const TRANSLATE = +TRANS.match(/(-\d+)|(\d+)/)[0] - 100

			el.style.transform = `translateX(${TRANSLATE}%)`

		}

		CURRENT.classList.remove( `hero__slide--current` )

		setTimeout( () => {

			CURRENT.style.transition = `transform 0s ease-in-out`
			CURRENT.style.transform = `translateX(${100 * ( 2 - CURRENT_INDEX )}%)`

		}, 600 )

		setTimeout( () => {

			CURRENT.style.transition = ``

		}, 1200 )

		if ( CURRENT_INDEX < SLIDES.length - 1 ) {

			SLIDES[CURRENT_INDEX + 1].classList.toggle( `hero__slide--current` )

		}

		else SLIDES[0].classList.toggle( `hero__slide--current` )

	}

	setInterval( () => {

		transform()

	}, 3000 )

}
