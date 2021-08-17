const express = require('express')

const router = express.Router()

// @route: /admin/add-product
// @method: GET
 
router.get('/add-product',(req, res, next) => {
    console.log('This is add product')
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
})

// @route: /admin/add-product
// @method: Post
router.post('/add-product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router