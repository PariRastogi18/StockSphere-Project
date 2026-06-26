const { Signup, Login, Logout } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", (req, res) => {
  console.log("LOGIN HIT");
  console.log(req.body);
  res.json({ success: true });
});
router.post("/logout", Logout);
router.post("/verify", userVerification);
module.exports = router;
