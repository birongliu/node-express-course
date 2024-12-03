const { getPeople, addPerson, getPersonById, updatePersonById } = require("../controllers/people");
const express = require("express");
const router = express.Router();

router.get("/", getPeople);

router.post("/", addPerson);
router.get("/:id", (req) => getPersonById(req.params.id));
router.put("/:id", updatePersonById);
module.exports = router;