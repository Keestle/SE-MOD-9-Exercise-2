"use strict";
let Models = require("../models 2");

const getPosts = (res) => {
  Models.Post.find({})
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  console.log(data);
  new Models.Post(data).save()
    .then(data => res.send({ result: 200, data: data }))
    .catch(err => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = { getPosts, createPost };
