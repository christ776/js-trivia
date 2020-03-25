const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,  
  reconnectInterval: 500, 
  connectTimeoutMS: 10000,
};

class Database {

  constructor() {
    const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
    this.connect(url);
  }
  
  connect(url) {
    mongoose.connect(url, options).
      then( function() {
        console.log('MongoDB is connected');
      })
      .catch( function(err) {
        console.log(err);
      });
  }
}

module.exports = new Database();

