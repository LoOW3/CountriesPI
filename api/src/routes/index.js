const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
const {
  getCountries,
  countryById,
} = require("../controllers/countries");
const { addActivity } = require("../controllers/activities");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/countries", getCountries);
router.get("/countries/:id", countryById);
router.post("/activity", addActivity);

module.exports = router;
