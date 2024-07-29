import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios.get('/api/review');
      setReviews(response.data);
    };
    fetchReviews();
  }, []);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/review', { rating, comment });
      setReviews((prevReviews) => [...prevReviews, { rating, comment }]);
      setRating(0);
      setComment('');
    } catch (err) {
      alert('Error submitting review');
    }
  };

  return (
    <div className="mt-5">
      <h2>Reviews</h2>
      <form onSubmit={handleReviewSubmit}>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <input type="number" className="form-control" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea className="form-control" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit Review</button>
      </form>
      <h3 className="mt-5">All Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="mt-3">
          <p>Rating: {review.rating}</p>
          <p>Comment: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;
