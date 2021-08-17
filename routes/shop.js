const path = require('path')
const express =require('express')

const router = express.Router()
console.log(__dirname)

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
})

module.exports = router