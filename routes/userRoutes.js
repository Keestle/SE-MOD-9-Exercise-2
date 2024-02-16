let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js
// Adds a GET route to return all users
router.get('/', (req, res) => {
Controllers.userController.getUsers(res);
})
// Adds a POST route to create a new user
router.post('/create', (req, res) => {
Controllers.userController.createUser(req.body, res);
})

router.put('/update', (req, res) => {
    Controllers.userController.updateUser(req.body, res);
    })

router.delete('/delete', (req, res) => {
    Controllers.userController.deleteUser(req.body, res);
    })

module.exports = router;