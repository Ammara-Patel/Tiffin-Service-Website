const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).send('Error fetching reviews');
  }
});

router.post('/', async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const review = new Review({ rating, comment });
    await review.save();
    res.status(201).send('Review submitted');
  } catch (error) {
    res.status(400).send('Error submitting review');
  }
});

module.exports = router;
