"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.upadatePerson = exports.createPerson = exports.getPersons = void 0;
//Data
const peopledata_1 = require("../data/peopledata");
// @desc    Get All Persons
// @route   GET /api/perons/
// @access  Public
const getPersons = (req, res) => {
    res.status(200).json({ success: true, data: peopledata_1.peopleData });
};
exports.getPersons = getPersons;
// @desc    Create new Person
// @route   POST /api/perons/
// @access  Public
const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send("Invalid");
    }
    return res.status(201).json({
        success: true,
        data: [...peopledata_1.peopleData, { id: peopledata_1.peopleData.length + 1, name }],
    });
};
exports.createPerson = createPerson;
// @desc    Update  Person
// @route   PUT /api/perons/:personID
// @access  Public
const upadatePerson = (req, res) => {
    const { name } = req.body;
    const { personID } = req.params;
    const person = peopledata_1.peopleData.find((_p) => _p.id === Number(personID));
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `No User Found for this ${personID}` });
    }
    const updatedList = peopledata_1.peopleData.map((_c) => {
        const { id } = _c;
        if (Number(personID) === id) {
            return {
                id,
                name,
            };
        }
        else {
            return _c;
        }
    });
    return res.status(200).json({
        success: true,
        data: updatedList,
    });
};
exports.upadatePerson = upadatePerson;
// @desc    Delete  Person
// @route   Delete /api/perons/:personID
// @access  Public
const deletePerson = (req, res) => {
    const { personID } = req.params;
    const person = peopledata_1.peopleData.find((_p) => _p.id === Number(personID));
    if (!person) {
        return res
            .status(400)
            .json({ success: false, msg: `No User Found for this ${personID}` });
    }
    const updatedList = peopledata_1.peopleData.filter((_c) => Number(personID) !== _c.id);
    return res.status(200).json({
        success: true,
        data: updatedList,
    });
};
exports.deletePerson = deletePerson;
// module.exports = {
//   getPersons,
//   upadatePerson,
//   deletePerson,
//   createPerson,
// };
