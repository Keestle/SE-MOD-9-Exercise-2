"use strict";
let Models = require("../models 2/schemas");

const createLike = (data, res) => {
  console.log(data);
  new Models.Like(data).save()
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { createLike };
