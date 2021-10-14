"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Controler
const peopleroutes_1 = require("../controller/peopleroutes");
const router = express_1.default.Router();
router.get("/", peopleroutes_1.getPersons);
router.post("/", peopleroutes_1.createPerson);
router.put("/:personID", peopleroutes_1.upadatePerson);
router.delete("/:personID", peopleroutes_1.deletePerson);
// router.route("/").get(getPersons).post(createPerson);
// module.exports = router;
exports.default = router;
