const Router = require("express").Router;
const userController = require("../controllers/user-controller");
const router = new Router();
//const { body,validationResult } = require("express-validation");
const { body,validationResult } = require("express-validator");

router.post(
  "/registration",
  [
  body("email").isEmail(),
  body("password").isLength({ min: 3, max: 32 })],
  (req, res, next) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  userController.registration(req, res, next)}
);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/users", userController.getUsers);

module.exports = router;
