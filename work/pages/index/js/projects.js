export default () => {

	const informBtns = document.querySelectorAll( `.projects__i` )

	informBtns.forEach( btn => {

		btn.addEventListener( `keydown`, ( event ) => {

			if ( event.keyCode === 13 ) btn.click( )

		} )

	} )

}