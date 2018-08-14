const initialState = {
	all:[],
	categories:[],
	subcategories:[],
	posts:[]
}

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_ALL':
			return{...state, all:action.payload}
		case 'GET_CATEGORIES':
			return{...state, categories:action.payload}
		case 'GET_SUBCATEGORIES':
			return{...state, subcategories:action.payload}
		case 'GET_POSTS':
			return{...state, posts:action.payload}
		default:
			return state
	}
}
