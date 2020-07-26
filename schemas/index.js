const contactUsSchema = require("./contactUs");
const { buyerSchema } = require("./auth/buyer/index");
const { registerSupplierSchema } = require("./auth/supplier/index");

module.exports = {
  contactUsSchema,
  buyerSchema,
  registerSupplierSchema,
};
