const router = require("express").Router()
const apiRoutes = require("./api/")
const blogRoutes = require("./blogRoutes.js")
const authRoutes = require("./authRoutes.js")
router.use("/api", apiRoutes)
router.use("/", blogRoutes)
router.use("/dashboard", authRoutes)


module.exports = router