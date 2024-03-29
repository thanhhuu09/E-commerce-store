// Auth Routes
const router = require("express").Router();
const {
  register,
  login,
  logout,
  refreshToken,
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/authenticationMiddleware");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);

module.exports = router;
