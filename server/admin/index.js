//  --- Express Router ---
const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => res.send('Welcome to the admin route.'))

router.use('/docs', express.static(path.join(__dirname, 'docs/.vuepress/dist')))

// Export express router ---
module.exports = router