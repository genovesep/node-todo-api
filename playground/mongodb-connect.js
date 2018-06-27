// mongo client let you connect to mongo server
//const MongoClient = require('mongodb').MongoClient;

// gets the propertie MongoClient and ObjectID from mongoDB
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // // Insert new doc into Users collection (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Jorge',
  //   age: 18,
  //   location: 'R. Ipiranga, 342, Barueri - SP'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
