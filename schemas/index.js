const contactUsSchema = require("./contactUs");
const { loginBuyerSchema, registerBuyerSchema } = require("./auth/buyer/index");
const { registerSupplierSchema } = require("./auth/supplier/index");

module.exports = {
  contactUsSchema,
  loginBuyerSchema,
  registerBuyerSchema,
  registerSupplierSchema,
};
