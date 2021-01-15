const express = require("express");
const router = express.Router();
const { contactUs } = require("../../schemas");

router.post("/contact-us", (req, res, next) => {
  contactUs
    .create(req.body)
    .then(() => res.send())
    .catch(next);
});

const contactUsRouters = router;

module.exports = contactUsRouters;
