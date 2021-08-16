const express = require("express");
const router = express.Router();
const { User } = require("../../schemas");

router.get("/suppliers/:skip/:limit/:key", (req, res, next) => {

  const { skip, limit, key } = req.params;

  User.find(key !== 'null' ? { username: new RegExp(key, "i") } : {})
    .skip(parseInt(skip))
    .limit(parseInt(limit))
    .then(data => res.send(data))
    .catch(next);

  // if (key !== 'null') {
  //   User.find({ username: new RegExp(key, "i") })
  //     .skip(parseInt(skip))
  //     .limit(parseInt(limit))
  //     .then(data => res.send(data))
  //     .catch(next);

  // } else {
  //   User.find({})
  //     .skip(parseInt(skip))
  //     .limit(parseInt(limit))
  //     .then(data => res.send(data))
  //     .catch(next);
  // }
});

router.get("/supplier-detail/:id", (req, res, next) => {
  User.findById(req.params.id)
    .then(data => res.send(data))
    .catch(next);
});

const supplierRouters = router;

module.exports = supplierRouters;
