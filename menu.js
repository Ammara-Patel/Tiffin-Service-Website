const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).send('Error fetching menu items');
  }
});

router.post('/order', async (req, res) => {
  try {
    const { itemIds } = req.body;
    // Process the order logic
    res.send('Order placed successfully');
  } catch (error) {
    res.status(500).send('Error placing order');
  }
});

module.exports = router;
