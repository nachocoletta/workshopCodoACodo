const service = require('../services/userService')

const index = async (req, res) => {
    const rows = await service.findAll()
    res.send(rows)
}

const show = async (req, res) => {
    // console.log(req.params)
    const row = await service.findOne(req.params)
    res.send(row)
}

const store = async (req, res) => {
    console.log(req.body)

    const row = await service.store(req.body)

    res.send(row)
}
module.exports = {
    index,
    show,
    store
}