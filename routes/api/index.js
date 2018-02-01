// Direct routes starting with "/api" into routes for word or list actions

const router = require("express").Router();
const wordRoutes = require("./words");
const listRoutes = require("./lists");

// Word routes
router.use("/words", wordRoutes);

// List routes
router.use("/lists", listRoutes);

module.exports = router;