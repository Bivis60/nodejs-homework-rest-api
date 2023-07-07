// const Joi = require("joi");
const Contact = require("../models/contact")
// const contacts = require("../models/contacts");
// const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../helpers");

// const addSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().required(),
//   phone: Joi.string().required(),
// });

const listContacts = async (req, res, next) => {
  const result = await Contact.find();
  console.log(result);
  res.json(result);
};

// const getContactById = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contacts.getContactById(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const addContact = async (req, res, next) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, "missing required name field");
//   }
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const removeContact = async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await contacts.removeContact(contactId);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({
//     message: "contact deleted",
//   });
// };

// const updateContact = async (req, res, next) => {
//   const { error } = addSchema.validate(req.body);
//   if (error) {
//     throw HttpError(400, "missing fields");
//   }
//   const { contactId } = req.params;
//   const result = await contacts.updateContact(contactId, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  // getContactById: ctrlWrapper(getContactById),
  // addContact: ctrlWrapper(addContact),
  // removeContact: ctrlWrapper(removeContact),
  // updateContact: ctrlWrapper(updateContact),
};
