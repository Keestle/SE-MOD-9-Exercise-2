const express = require('express');
const router = express.Router(); // Instantiate the Router object
const windDataController = require('../controllers/windDataController'); // Correct import statement

// Adds a GET route to retrieve all wind data
router.get('/', async (req, res) => {
    await windDataController.getAllWindData(req, res);
  });
  
// Adds a POST route to fetch and save wind data
router.post('/', (req, res) => { 
    windDataController.fetchWindData(req, res); 
});

// Adds a PUT route to update wind data by ID
router.put('/:id', (req, res) => {
    windDataController.updateWindData(req, res); 
});

// Adds a DELETE route to delete wind data by ID
router.delete('/:id', (req, res) => {
    windDataController.deleteWindData(req, res); 
});

module.exports = router;
