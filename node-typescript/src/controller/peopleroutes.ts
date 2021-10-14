import { Request, Response, NextFunction } from "express";

//Data
import { peopleData } from "../data/peopledata";
//InterFace
import { IPeople } from "../interfaces/peopleinterface";

// @desc    Get All Persons
// @route   GET /api/perons/
// @access  Public

export const getPersons = (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: peopleData });
};

// @desc    Create new Person
// @route   POST /api/perons/
// @access  Public
export const createPerson = (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Invalid");
  }
  return res.status(201).json({
    success: true,
    data: [...peopleData, { id: peopleData.length + 1, name }],
  });
};

// @desc    Update  Person
// @route   PUT /api/perons/:personID
// @access  Public
export const upadatePerson = (req: Request, res: Response) => {
  const { name } = req.body;
  const { personID } = req.params;

  const person = peopleData.find((_p: IPeople) => _p.id === Number(personID));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No User Found for this ${personID}` });
  }
  const updatedList = peopleData.map((_c: IPeople) => {
    const { id } = _c;
    if (Number(personID) === id) {
      return {
        id,
        name,
      };
    } else {
      return _c;
    }
  });

  return res.status(200).json({
    success: true,
    data: updatedList,
  });
};

// @desc    Delete  Person
// @route   Delete /api/perons/:personID
// @access  Public
export const deletePerson = (req: Request, res: Response) => {
  const { personID } = req.params;

  const person = peopleData.find((_p: IPeople) => _p.id === Number(personID));
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No User Found for this ${personID}` });
  }
  const updatedList = peopleData.filter(
    (_c: IPeople) => Number(personID) !== _c.id
  );

  return res.status(200).json({
    success: true,
    data: updatedList,
  });
};

// module.exports = {
//   getPersons,
//   upadatePerson,
//   deletePerson,
//   createPerson,
// };
