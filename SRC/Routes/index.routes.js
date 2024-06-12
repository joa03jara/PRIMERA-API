const express = require ("express")
const router = express.Router()
const controller = require ("../Controllers/index.controllers")
router.get("/",controller.index)

module.exports = router