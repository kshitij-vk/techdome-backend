const mongoose = require('mongoose');

// MongoDB connection string from the environment variable
const mongoURI = process.env.MONGO_URL || 'mongodb://localhost:27017/mernstack';

// Connect to MongoDB
mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose;
