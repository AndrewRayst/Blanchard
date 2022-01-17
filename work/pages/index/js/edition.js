export default () => {

	const category = document.querySelector( `.edition__sets` )
	const categoryBtn = category.querySelector( `.edition__legend` )
	const categoryItems = category.querySelectorAll( `.edition__checkbox--container` )
	const categoryItemHeight = categoryItems[0].offsetHeight

	const editionSwiper = {

		target: document.querySelector( `.edition__wrapper` ),

		width() {

			return this.target.offsetWidth

		},

	}

	const editionSlide = {

		target: document.querySelectorAll( `.edition-slide` ),

		width() {

			return this.target[0].offsetWidth

		},

	}

	// category

	if ( document.querySelector( `body` ).offsetWidth <= 450 ) {

		let categoryArray = []

		category.style.height = `${ ( categoryItemHeight * document.querySelectorAll( `.checkbox--active` ).length ) + categoryItemHeight }px`

		categoryItems.forEach( ( item ) => categoryArray.push( item ) )
	
		for ( let i = 0; i < categoryArray.length; i++ ) {
	
			categoryArray[i].style.transform = `translateY(${categoryItemHeight * i}px)`
	
		}
	
		function categoryTransActive() {
	
			let categoryItemsActive = []
	
			let categoryItemsUnactive = []
	
			categoryArray.forEach( ( item ) => {
	
				if ( item.classList.contains( `checkbox--active` ) ) {
		
					categoryItemsActive.push( item )
		
				}
		
			} )
	
			categoryArray.forEach( ( item ) => {
	
				if ( !item.classList.contains( `checkbox--active` ) ) {
		
					categoryItemsUnactive.push( item )
		
				}
		
			} )
	
			for ( let index in categoryItemsActive ) {
	
				categoryItemsActive[index].style.transform = `translateY(${categoryItemHeight * index}px)`
	
			}
	
			let index = categoryItemsActive.length
	
			categoryItemsUnactive.forEach( item => {
	
				item.style.transform = `translateY(${categoryItemHeight * index}px)`
	
				index++
	
			} )
	
		}
	
		function categoryTrans( event, index ) {
	
			const container = event.currentTarget
			const input = event.currentTarget.children[0].children[0]
	
			if ( container.classList.contains( `checkbox--active` ) ) {
	
				container.classList.remove( `checkbox--active` )
	
			}
	
			else container.classList.add( `checkbox--active` )
	
			categoryTransActive()
	
			event.preventDefault()
	
			if ( input.checked === false ) input.checked = true
	
			else input.checked = false

			if ( !categoryBtn.classList.contains( `edition__legend--active` ) ) {
	
				category.style.height = `${ ( categoryItemHeight * document.querySelectorAll( `.checkbox--active` ).length ) + categoryItemHeight }px`
	
			}
	
		}
	
		for ( let item in categoryArray ) {
	
			categoryArray[item].addEventListener( `click`, event => categoryTrans( event, item ) )
	
		}
	
		categoryBtn.addEventListener( `click`, event => {
	
			const target = event.target
	
			target.classList.toggle( `edition__legend--active` )
	
			if ( target.classList.contains( `edition__legend--active` ) ) {
	
				category.style.height = `${ categoryItemHeight * ( categoryItems.length + 1 ) }px`
	
			}
	
			else {
	
				category.style.height = `${ ( categoryItemHeight * document.querySelectorAll( `.checkbox--active` ).length ) + categoryItemHeight }px`
	
			}
	
		} )
	}


}