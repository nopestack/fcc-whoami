const express = require('express')
const app = express()
const router = express.Router()

const PORT = process.env.PORT || 3000
const DEBUG = process.env.DEBUG || false

router.route('/').get((req, res) => {
    try {
        const {
            'user-agent': software,
            'accept-language': languages,
        } = req.headers
        res.json({
            ipaddress: req.ip,
            software,
            languages,
        })
    } catch (error) {
        if (DEBUG) {
            console.log(error)
        }
        res.status(400).end()
    }
})

app.use('/api/whoami', router)

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`)
})
