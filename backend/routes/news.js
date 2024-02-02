// routes/news.js
const express = require('express');
const NewsItem = require('../models/NewsItem');
const { crawlHackerNews } = require('../crawl');
const router = express.Router();

// Get all news items
router.get('/crawl', async (req, res) => {
    try {
        // Trigger the crawling process
        await crawlHackerNews();
        res.status(200).json({ message: 'HackerNews crawled successfully' });
    } catch (error) {
        console.error('Error crawling HackerNews:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/', async (req, res) => {
  try {
    const newsItems = await NewsItem.find().sort({ postedOn: -1 });
    res.json(newsItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Mark a news item as read
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Update the news item in the database
    res.json({ message: 'News item marked as read' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a news item
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Delete the news item from the database
    res.json({ message: 'News item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
