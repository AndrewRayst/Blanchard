export default () => {

	const accordionItems = document.querySelectorAll( `.accordion__item` )
	const creators = document.querySelectorAll( `.accordion__creator` )
	const languages = document.querySelectorAll( `.catalog__languages-item` )

	function clouseAccordion() {

		accordionItems.forEach( ( item ) => {

			const content = item.querySelector( `.accordion__content` )

			item.classList.remove( `accordion__item--active` )

			content.style.maxHeight = `0px`
			content.style.padding = `0px`

		} )

	}

	function personInfo( creator, catalog ) {

		const personPrev = catalog.querySelector( `.catalog__person--prev` )

		let catalogPersons = catalog.querySelector(`.catalog__persons`)

		let creators = {

			// 'шаблон': {

			// 	name: ``,
			// 	date: ``,
			// 	about: ``,
			// 	img: `img/catalog__img-.jpg`,

			// },
			'nothing': {

				name: `Что мы о нём знаем?`,
				about: `Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!`,
				link: `<a href='#' class='catalog__link'>В галерею</a>`,
				img: `img/catalog__img-0.jpg`,

			},

			'Бенедетто ди Биндо': {

				name: `Бенедетто ди Биндо`,
				date: `	1380-е — 1417`,
				about: `Бенедетто ди Биндо — итальянский художник сиенской школы. Бенедетто ди Биндо остался в истории искусства как сиенский художник, так сказать, «второго ряда», несмотря на то, что за свою короткую жизнь он выполнил ряд весьма престижных заказов, включая работы в Сиенском соборе.`,
				img: `img/catalog__img-2.jpg`,

			},

			'Доменико Гирландайо': {

				name: `Доменико Гирландайо`,
				date: `2 июня 1448 — 11 января 1494.`,
				about: `Один из ведущих флорентийских художников Кватроченто, 
					основатель художественной династии, которую продолжили 
					его брат Давид и сын Ридольфо. Глава художественной мастерской, 
					где юный Микеланджело в течение года овладевал профессиональными 
					навыками. Автор фресковых циклов, в которых выпукло, со 
					всевозможными подробностями показана домашняя жизнь библейских 
					персонажей (в их роли выступают знатные граждане Флоренции в 
						костюмах того времени).`,
				img: `img/catalog__img-1.jpg`,

			},

		}

		let personNext = document.createElement( `li` )

		if ( creators[String(creator)] ) {

			let creatorInfo = creators[String(creator)]

			personNext.innerHTML = `
			<img class="catalog__img" src="${creatorInfo.img}" alt="Х-художник">
			<h3 class="catalog__heading--mini heading--mini">${creatorInfo.name}</h3>
			<p class="catalog__date">${creatorInfo.date}</p>
			<p class="catalog__paragraph">${creatorInfo.about}</p>`

		}

		else {

			let creatorInfo = creators[`nothing`]

			personNext.innerHTML = `
			<img class="catalog__img" src="${creatorInfo.img}" alt="Х-художник">
			<h3 class="catalog__heading--mini heading--mini">${creatorInfo.name}</h3>
			<p class="catalog__paragraph">${creatorInfo.about}</p>
			${creatorInfo.link}`

		}

		personNext.className = `catalog__person catalog__person--next`

		catalogPersons.append( personNext )

		personPrev.remove()

		const personCurent = catalog.querySelector( `.catalog__person--curent` )
		personNext = catalog.querySelector( `.catalog__person--next` )

		setTimeout( () => {

			personCurent.classList.add( `catalog__person--prev` )
			personCurent.classList.remove( `catalog__person--curent` )

			personNext.classList.add( `catalog__person--curent` )
			personNext.classList.remove( `catalog__person--next` )

		}, 600 )

	}

	accordionItems.forEach( ( item ) => {

		const content = item.querySelector( `.accordion__content` )
		const name = item.querySelector( `.accordion__name` )

		if ( !item.classList.contains( `accordion__item--active` ) ) {

			content.style.maxHeight = `0px`
			content.style.padding = `0px`

		}

		name.addEventListener( `click`, ( ) => {

			const creators = item.querySelectorAll( `[data-accordion__tabindex]` )

			if ( content.style.maxHeight === `810px` || item.classList.contains( `accordion__item--active` ) ) {

				item.classList.remove( `accordion__item--active` )

				content.style.maxHeight = `0px`
				content.style.padding = `0px`

				creators.forEach( item => item.tabIndex = -1 )

			}

			else {

				clouseAccordion()

				item.classList.add( `accordion__item--active` )

				content.style.maxHeight = `810px`
				content.style.padding = ``

				creators.forEach( item => item.tabIndex = 0 )

			}

		} )

		item.addEventListener( `keydown`, ( event ) => {

			event.stopPropagation()

			if ( event.keyCode === 13 && event.currentTarget === event.target ) {

				const creators = item.querySelectorAll( `[data-accordion__tabindex]` )

				if ( content.style.maxHeight === `810px` || item.classList.contains( `accordion__item--active` ) ) {

					item.classList.remove( `accordion__item--active` )

					content.style.maxHeight = `0px`
					content.style.padding = `0px`

					creators.forEach( item => item.tabIndex = -1 )
				}

				else {

					clouseAccordion()

					item.classList.add( `accordion__item--active` )

					content.style.maxHeight = `810px`
					content.style.padding = ``

					creators.forEach( item => item.tabIndex = 0 )

				}

			}

		} )

	} )

	function creatorsUnactive( creators ) {

		creators.forEach( ( item ) => {

			item.classList.remove( `accordion__creator--active` )

		} )

	}

	creators.forEach( ( item ) => {

		item.addEventListener( `keydown`, event => {

			if ( event.keyCode === 13 ) event.currentTarget.click()

		} )

		item.addEventListener( `click`, ( e ) => {

			e.stopPropagation()

			if ( !e.target.classList.contains( `accordion__creator--active` ) ) {

				let creatorName = e.target
				let creator = e.currentTarget
				let catalog = e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement

				if ( creatorName === creator ) creatorName = e.target.children[0]

				creatorsUnactive( catalog.querySelectorAll( `.accordion__creator` ) )
				personInfo( creatorName.textContent, catalog )

				creator.classList.toggle( `accordion__creator--active` )

				if ( window.innerWidth <= 425 ) {

					const PERSON_CARD = catalog.querySelector( `.catalog__person--curent` )

					PERSON_CARD.scrollIntoView( {

						behavior: `smooth`,
						block: `start`,

					} )

				}

			}

		} )

	} )

	// LANG

	languages.forEach( ( lang ) => {

		lang.addEventListener( `keydown`, ( event ) => {

			if ( event.keyCode === 13 ) lang.click()

		} )

	} )

}
