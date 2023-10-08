// entry point of server backend(like homepage of project for backend )
const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

const dotenv = require('dotenv')

dotenv.config({ path: './config.env' });
connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})