const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

console.log(process.env.MONGO_URL); // check the value of MONGO_URL

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected!"))
  .catch(err => console.error(err));

// rest of your app code
