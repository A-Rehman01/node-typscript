const express = require("express");
const {
  deletePerson,
  upadatePerson,
  createPerson,
  getPersons,
} = require("../controllers/people");

const router = express.Router();

router.get("/", getPersons);
router.post("/", createPerson);
router.put("/:userid", upadatePerson);
router.delete("/:userid", deletePerson);

// router.route("/").get(getPersons).post(createPerson);
module.exports = router;
