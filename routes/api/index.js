const router = require("express").Router();
const userRoutes = require("./users");
// const carRoutes = require("./cars");

// User routes
router.use("/users", userRoutes);

// car routes
// router.use("/cars", carRoutes);

module.exports = router;