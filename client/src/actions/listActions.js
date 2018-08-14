import axios from 'axios'
import store from '../store'

export function getAll() {
	axios.get('/api/main').then(resp => {
		store.dispatch({
			type:'GET_ALL',
			payload:resp.data
		})
	})
}

export function getCategories(id) {
	axios.get('/api/categories/' + id).then(resp => {
		store.dispatch({
			type:'GET_CATEGORIES',
			payload:resp.data
		})
	})
}

export function getSubcategories(id) {
	axios.get('/api/subcategories/' + id).then(resp => {
		store.dispatch({
			type:'GET_SUBCATEGORIES',
			payload:resp.data
		})
	})
}

export function getPosts(id) {
	axios.get('/api/posts/' + id).then(resp => {
		store.dispatch({
			type:'GET_POSTS',
			payload:resp.data
		})
	})
}

export function addPost(listing) {
	axios.post('/api/listings/', listing).then(resp => {
		console.log(resp)
	})
}
