// mongo client let you connect to mongo server
//const MongoClient = require('mongodb').MongoClient;

// gets the propertie MongoClient and ObjectID from mongoDB
const {MongoClient, ObjectId} = require('mongodb');

// creating new ID object
// var obj = new ObjectId();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5b341f9fb93c4a73b0ee0fae')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // my example
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId("5b32b9f5101c600cf5eaafe4")
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'Piero G. F. Genovese'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});
