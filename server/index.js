require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error('Error: MONGO_URI environment variable not set');
  process.exit(1);  
}


mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');


app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});
