import express from "express";
//Controler
import {
  createPerson,
  deletePerson,
  getPersons,
  upadatePerson,
} from "../controller/peopleroutes";

const router = express.Router();

router.get("/", getPersons);
router.post("/", createPerson);
router.put("/:personID", upadatePerson);
router.delete("/:personID", deletePerson);

// router.route("/").get(getPersons).post(createPerson);
// module.exports = router;
export default router;
