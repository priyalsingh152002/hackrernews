// index.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const newsRoutes = require('./routes/news');

const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb+srv://satyamraj999:S1512711@hackernews.xhauvbn.mongodb.net/?retryWrites=true&w=majority'
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/news', newsRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
