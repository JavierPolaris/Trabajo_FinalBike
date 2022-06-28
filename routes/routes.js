const router = require("express").Router();
const pages = require("../controllers/pages.controllers")
const user = require("../controllers/user.controllers")


//Rutas de inicio
// router.get("/",pages.home);

router.post("/registro",user.saveDataForm);
router.post("/login", user.login); 



module.exports = router;