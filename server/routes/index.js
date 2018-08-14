const router = require('express').Router()
const connection = require('../connection')

/* GET All */
router.get('/main', (req, res, next) => {
	const sql = `
		SELECT child.id, child.category, parent.category as parent_category, child.slug
		FROM categories child
		LEFT JOIN categories parent ON child.parent_id = parent.id;
	`
	connection.query(sql, (error, results, fields) => {
		let all = []

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category == null) {
				results[i].sub = []
				all.push(results[i])
			}
		}

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_category != null) {
				for (let j = 0; j < all.length; j++) {
					if (all[j].category == results[i].parent_category) {
						all[j].sub.push(results[i])
					}
				}
			}
		}

		res.json(all)
	})
})

/* GET Categories */
router.get('/categories/:id', (req, res, next) => {
	const sql = `
	SELECT categories.parent_id, listings.id, listings.category_id, listings.name, listings.description, listings.image
	FROM listings
	LEFT JOIN categories ON listings.category_id = categories.id
	WHERE listings.category_id = categories.id;
	`
	connection.query(sql, (error, results, fields) => {
		let cat = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].parent_id == id) {
				cat.push(results[i])
			}
		}
		
		res.json(cat)
	})
})

/* GET Subcategories */
router.get('/subcategories/:id', (req, res, next) => {
	const sql = `
	SELECT listings.id, listings.category_id, listings.name, listings.description, listings.image
	FROM listings
	LEFT JOIN categories ON listings.category_id = categories.id
	WHERE listings.category_id = categories.id;
	`
	connection.query(sql, (error, results, fields) => {
		let sub = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].category_id == id) {
				sub.push(results[i])
			}
		}
		
		res.json(sub)
	})
})

/* GET Posts */
router.get('/posts/:id', (req, res, next) => {
	const sql = `
	SELECT listings.id, listings.name, listings.description, listings.image
	FROM listings;
	`
	connection.query(sql, (error, results, fields) => {
		let pst = []
		let id = req.params.id

		for (let i = 0; i < results.length; i++) {
			if (results[i].id == id) {
				pst.push(results[i])
			}
		}
		
		res.json(pst)
	})
})

/* POST Listing */
router.post('/listings', (req, res, next) => {
	const sql = `
	INSERT INTO listings (category_id, name, description, image)
	VALUES (?, ?, ?, ?)
	`
	connection.query(sql, [req.body.category_id, req.body.name, req.body.description, req.body.image], (error, results, fields) => {		
		res.json(results)
	})
})

module.exports = router
