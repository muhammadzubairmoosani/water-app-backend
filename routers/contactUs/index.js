const express = require("express");
const router = express.Router();
const { contactUsSchema } = require("../../schemas/index");

router.post("/contact-us", (req, res, next) => {
  contactUsSchema
    .create(req.body)
    .then((snap) => res.send(snap))
    .catch(next);
});

const contactUsRouters = router;

module.exports = contactUsRouters;
