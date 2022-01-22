export default ( Inputmask ) => {

	ymaps.ready( () => {

		const myMap = new ymaps.Map( `map`, {

			center: [55.75714779874466, 37.60403641685671],
			zoom: 15,
			controls: [],

		} )

		const myGeoObject = new ymaps.GeoObject( {

			geometry: {

				type: `Point`, // тип геометрии - точка
				coordinates: [55.75806873402997, 37.60018994544575] // координаты точки
			},

		} )

		const placemark = new ymaps.Placemark( [55.75806873402997, 37.60018994544575], {}, {

			// Необходимо указать данный тип макета.
			iconLayout: `default#imageWithContent`,

			// Своё изображение иконки метки.
			iconImageHref: `./img/map-mark.svg`,

			// Размеры метки.
			iconImageSize: [20, 20],

		} )

		myMap.geoObjects.add( placemark )

	} )

	// Inputmask

	const form = document.getElementById( `contacts__form` )
	const formPhone = document.querySelector( `[data-validate-field="phone"]` )

	const nameRegex = /\d/
	const phoneRegex = /[0-9]{10}/

	let input_phone = new Inputmask( {
		mask: `+7 (999) 999-9999`,
	} ).mask( formPhone )

	function formCheck( input ) {

		if ( input.dataset.validateField === `name` ) {

			const value = input.value

			if ( value === `` ) {

				return [false, input, `Обязательное поле для заполнения`]

			}

			else if ( nameRegex.test( value ) ) {

				return [false, input, `Недопустимый формат`]

			}

			else if ( value.length < 4 ) {

				return [false, input, `Минимум 4 символа`]

			}

			else if ( value.length > 32 ) {

				return [false, input, `Максимум 32 символа`]

			}

			else return [true, input]

		}

		else if ( input.dataset.validateField === `phone` ) {

			const value = input.inputmask.unmaskedvalue()

			if ( value === `` ) {

				return [false, input, `Обязательное поле для заполнения`]

			}

			else if ( !phoneRegex.test( value ) ) {

				return [false, input, `Недопустимый формат`]

			}

			else return [true, input]

		}

	}

	form.addEventListener( `submit`, ( event ) => {

		event.preventDefault()

		const inputs = event.target.querySelectorAll( `[data-validate-field]` )
		let arr = []
		let proof = true

		inputs.forEach( input => {

			arr.push( formCheck( input ) )

		} )

		for ( let i of arr ) {

			const parent = i[1].parentElement

			if ( parent.querySelector( `.js-valid__text` ) !== null ) {

				parent.querySelector( `.js-valid__text` ).remove( )

			}

			const inputText = document.createElement( `span` )

			if ( i[0] === false ) {

				proof = false

				inputText.classList.add( `js-valid__text` )
				inputText.innerHTML = `${i[2]}`

				parent.classList.add( `js-valid__false` )

				parent.prepend( inputText )

			}

			else if ( i[0] === true ) {

				if( parent.classList.contains( `js-valid__false` ) ) {

					parent.classList.remove( `js-valid__false` )

				}

			}

		}

		if ( proof ) {

			const POPUP = document.querySelector( `.contacts__popup` )
			const POPUP_WAIT = document.querySelector( `.contacts__popup--wait` )
			const POPUP_OK = document.querySelector( `.contacts__popup--ok` )
			const POPUP_ERROR = document.querySelector( `.contacts__popup--error` )

			function popupСlose() {

				setTimeout( () => {

					POPUP.style.display = `none`
					POPUP_WAIT.style.display = `block`
					POPUP_OK.classList.remove( `contacts__popup--ok--active` )
					POPUP_ERROR.classList.remove( `contacts__popup--ok--active` )

				}, 1000 )

			}

			POPUP.style.display = `flex`

			let formDate = new FormData( form )

			let xhr = new XMLHttpRequest()

			xhr.onreadystatechange = () => {

				if ( xhr.readyState === 2 && xhr.status === 200 ) {

					POPUP_WAIT.style.display = `none`
					POPUP_OK.classList.add( `contacts__popup--ok--active` )

				}

				else if ( xhr.readyState === 2 && xhr.status === 404 ) {

					POPUP_WAIT.style.display = `none`
					POPUP_ERROR.classList.add( `contacts__popup--error--active` )

				}

				else if ( xhr.readyState === 4 && xhr.status === 200 ) popupСlose()

				else if ( xhr.readyState === 4 && xhr.status === 404 ) popupСlose()

			}

			xhr.open( `POST`, `mail.php`, true )
			xhr.send( formDate )

		}

	} )

}
