import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteGenerator.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState(''); // Add the state for quote
  const [loading, setLoading] = useState(true);

  // Function to fetch a random quote
  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://dummyjson.com/quotes/random');
      setQuote(response.data.quote);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="quote-container">
      {loading ? <p>Loading...</p> : <p className="quote-text">{quote}</p>}
      <button className='border' onClick={fetchRandomQuote}>Refresh</button>
    </div>
  );
}

export default QuoteGenerator;
