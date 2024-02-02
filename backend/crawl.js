const axios = require('axios');
const cheerio = require('cheerio');
const NewsItem = require('./models/NewsItem');

const BASE_URL = 'https://news.ycombinator.com/';

// Function to fetch and parse HTML content from HackerNews
const fetchHackerNews = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching HackerNews:', error);
    throw new Error('Error fetching HackerNews');
  }
};

// Function to extract news items from the parsed HTML content
// Function to extract news items from the parsed HTML content
const extractNewsItems = (html) => {
    const $ = cheerio.load(html);
    const newsItems = [];
     
    $('.athing').each((index, element) => {
      const $title = $(element).find('.titleline a');
      const title = $title.text().trim();
      
      const url = $title.attr('href');
      
      const $score = $(element).find('.subtext .score');
      const score = $score.text().trim();
      
      const $user = $(element).find('.subtext .hnuser');
      const user = $user.text().trim();
      
      const $age = $(element).find('.subtext .age');
      const age = $age.text().trim();
      
      // Extracting comments by targeting the 'comments' link
      const $commentsLink = $(element).find('.subtext a:contains("comment")');
      const commentsText = $commentsLink.text().trim();
      const commentsMatch = commentsText.match(/\d+/); // Extracting numeric part
      const comments = commentsMatch ? parseInt(commentsMatch[0]) : 0;
      newsItems.push({ title, url, score, user, age, comments });
    });
    
    //console.log(newsItems);
    return newsItems;
  };
  
  
  
// Function to crawl HackerNews and add/update news items in the database
const crawlHackerNews = async () => {
  try {
    const html = await fetchHackerNews();
    const newsItems = extractNewsItems(html);
    
    for (const item of newsItems) {
      try {
        await NewsItem.findOneAndUpdate({ url: item.url }, item, { upsert: true });
      } catch (error) {
        console.error('Error adding/updating news item:', error);
      }
    }

    console.log('HackerNews crawled successfully');
  } catch (error) {
    console.error('Error crawling HackerNews:', error);
  }
};

// Run the crawl function
crawlHackerNews();

module.exports = {
  crawlHackerNews
};
