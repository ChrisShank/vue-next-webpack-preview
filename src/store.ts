import { createStore } from 'vuex'

// Temorary type until Vuex 4 Alpha has Typescript support
type State = { count: number }

const state: State = { count: 0 }

const mutations = {
	increment(state: State) {
		state.count++
	},
}

export const store = createStore({ state, mutations })