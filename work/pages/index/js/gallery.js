export default () => {

	const modal = document.querySelector( `.gallery-modal` )
	const gallerySlides = document.querySelectorAll( `.gallery-slide` )

	function slideModal( target ) {

		const modalExit = document.querySelector( `.gallery-modal__exit` )
		const gallery = document.querySelector( `.gallery` )
		const modalImg = document.querySelector( `.gallery-modal__img` )

		const SECTIONS = document.querySelectorAll( `section` )
		const BODY = document.querySelector( `body` )

		gallery.scrollIntoView( {

			behavior: `smooth`,
			block: `start`,

		} )

		const painting = document.createElement( `img` )

		painting.setAttribute( `src`, `${target.children[0].getAttribute( `src` )}` )

		modalImg.append( painting )

		modalExit.focus()

		modal.style.display = 'block'

		BODY.style.background = `rgba(0, 0, 0, .6)`

		SECTIONS.forEach( section => {

			if ( !section.classList.contains(`gallery`) ) {

				section.style.filter = `brightness(.5)`

			}

		} )

		modalExit.addEventListener( `keydown`, event => {

			if ( event.keyCode === 13 ) {

				BODY.style.background = ``

				SECTIONS.forEach( section => {

					section.style.filter = ``

				} )

				modal.style.display = ''
				target.focus()
				if ( modalImg.querySelector( `img` ) ) modalImg.querySelector( `img` ).remove()

			}

			if ( event.keyCode === 9 ) {

				event.preventDefault()

			}

		} )

		modalExit.addEventListener( `click`, () => {

			BODY.style.background = ``

			SECTIONS.forEach( section => {

				section.style.filter = ``

			} )

			modal.style.display = ''
			target.focus()
			if ( modalImg.querySelector( `img` ) ) modalImg.querySelector( `img` ).remove()

		} )

	}

	gallerySlides.forEach( slide => {

		slide.addEventListener( `keydown`, event => {

			if ( event.keyCode === 13 ) {
				
				slideModal( event.path[0] )

			}

		} )

		slide.addEventListener( `click`, event => {

			slideModal( event.currentTarget )

		} )

	} )

	document.querySelector( `.gallery-modal__text` ).addEventListener(`keydown`, event => {

		if ( event.keyCode === 9 && event.shiftKey === true ) event.preventDefault()

	})

}