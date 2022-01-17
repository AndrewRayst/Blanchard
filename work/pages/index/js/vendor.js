// ==========================================================
// =======================DON'T TOUCH========================
// ==========================================================

import '../sass/vendor.css'
import '../../../modules/css/taby.min.css'

// ==========================================================
// =======================DON'T TOUCH========================
// ==========================================================

// import package from node_modules

import tippy from 'tippy.js'
import SimpleBar from 'simplebar'

import Swiper from 'swiper'
import SwiperCore, { Navigation, Pagination } from 'swiper/core'

import Сhoices from 'choices.js'
import Inputmask from 'inputmask'

import Taby from '../../../modules/js/taby.min'

// =================================

// import for your modules from vendor folder

import header from './vendor/header'
import hero from './vendor/hero'
import gallery from './vendor/gallery'
import events from './vendor/events'
import contacts from './vendor/contacts'
import edition from './vendor/edition'
import projects from './vendor/projects'

// =======================================

// init in the page
SwiperCore.use([Navigation, Pagination])

document.addEventListener( `DOMContentLoaded`, () => {

	Taby( `.catalog__languages-panels`, `.catalog__languages-btns` )

	header( SimpleBar )
	hero( )
	gallery( Swiper, SwiperCore, Сhoices )
	events( Swiper, SwiperCore )
	contacts( Inputmask )
	edition( Swiper, SwiperCore )
	projects( Swiper, SwiperCore, tippy )

} )
