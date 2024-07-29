const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://gudeumachowdary:mRta4B2bJqPOOgQi@cluster0.leacdpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, ()=> {
  console.log('connected to mongodb')
})
