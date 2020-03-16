declare module '*.vue' {
	import { ComponentOptions } from 'vue'
	const component: ComponentOptions
	export default component
}

// Vuex 4 Alpha 1 does not have typings yet...
// Remove this when typings are added to Vuex 4 Alpha 
declare module 'vuex'