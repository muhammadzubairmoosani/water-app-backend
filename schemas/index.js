const contactUsSchema = require("./contactUs");
const { buyerSchema } = require("./auth/buyer/index");
const supplierSchema = require("./auth/supplier/index");

module.exports = {
  contactUsSchema,
  buyerSchema,
  supplierSchema,
};
