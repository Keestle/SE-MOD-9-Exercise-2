const axios = require('axios');
const windData = require('../models/windData');

// Controller function to fetch wind data from the OpenWeatherMap API
const fetchWindData = async (req, res) => {
  try {
    const city = 'Perth'; // For the future
    // Construct the OpenWeatherMap API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?APPID=0c2e3284fcc8a15f0f039eba6a9703c1&q=${city}&units=metric`;

    // Make a GET request to the OpenWeatherMap API
    const apiResponse = await axios.get(apiUrl);

    // Extract relevant wind data from the API response
    const { speed, deg, gust } = apiResponse.data.wind || {};

    // Create a new WindData instance and save it to the database
    const newWindData = new windData({ speed, deg, gust }); // Use a different variable name
    await newWindData.save(); // Save the new instance

    res.json({ message: 'Wind data saved successfully', windData: newWindData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller function to retrieve all wind data
const getAllWindData = async (req, res) => {
    try {
      const windDataList = await windData.find();
      res.json({ windDataList });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
    
  // Controller function to update wind data by ID
  const updateWindData = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
  
    try {
      const updatedData = await windData.findByIdAndUpdate(id, newData, { new: true });
      res.json({ message: 'Wind data updated successfully', updatedData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Controller function to delete wind data by ID
  const deleteWindData = async (req, res) => {
    const { id } = req.params;
  
    try {
      await windData.findByIdAndDelete(id);
      res.json({ message: 'Wind data deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  module.exports = {
    fetchWindData,
    getAllWindData,
    updateWindData,
    deleteWindData,
  };
  
