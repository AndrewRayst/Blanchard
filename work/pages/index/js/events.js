export default () => {

	if ( window.innerWidth > 425 ) {

		const sectionEvents = document.querySelector( `.events` )
		const eventsInner = document.querySelector( `.events__inner` )
		const cardsBox = document.querySelector( `.events__cards` )
		const cardsLink = document.querySelectorAll( `.events__link` )
		const cards = cardsBox.querySelectorAll( `.events__card` )
	
		const card = cards[0]
		let viewQuantityCards = Math.floor( eventsInner.offsetWidth / card.offsetWidth )
	
		const btn = document.querySelector( `.events__btn` )
	
		for ( let i = 0; i < viewQuantityCards; i++ ) cardsLink[i].tabIndex = 0
	
		for ( let i = viewQuantityCards; i < cards.length; i++ ) cards[i].style.display = `none`
	
		setTimeout( () => {
	
			btn.addEventListener( `click`, () => {
	
				if ( btn.textContent === `Все события` ) {
	
					for ( let i = 0; i < cards.length; i++ ) cards[i].style.display = `flex`
	
					btn.textContent = `Скрыть`
	
					cardsLink.forEach( el => el.tabIndex = 0 )
	
				}
	
				else {
	
					viewQuantityCards = Math.floor( eventsInner.offsetWidth / card.offsetWidth )
	
					for ( let i = viewQuantityCards; i < cards.length; i++ ) cards[i].style.display = `none`
	
					btn.textContent = `Все события`
	
					sectionEvents.scrollIntoView( {
	
						behavior: `smooth`,
						block: `start`,
	
					} )
	
					cardsLink.forEach( el => el.tabIndex = -1 )
	
				}
	
			} )
	
		}, 1000 )

	}


}
