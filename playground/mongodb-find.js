// mongo client let you connect to mongo server
//const MongoClient = require('mongodb').MongoClient;

// gets the propertie MongoClient and ObjectID from mongoDB
const {MongoClient, ObjectID} = require('mongodb');

// creating new ID object
// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');
  const db = client.db('TodoApp');

  // insert
  // db.collection('Users').insertOne({
  //   name: 'Mike',
  //   age: 30
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to insert new record to Users', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // fetching docs and converting to array
  // db.collection('Todos').find()toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // fetchig for completed: false
  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // query by ID
  // db.collection('Todos').find({
  //   _id: new ObjectID('5b32abfc44b7dd0b6acef482')
  //   }).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  // });

  // query to count
  // db.collection('Todos').find().count().then((count) => {
  //     console.log(`Todos count: ${count}`);
  //     //console.log(JSON.stringify(docs, undefined, 2));
  //   }, (err) => {
  //     console.log('Unable to fetch Todos', err);
  // });

  // query count Mike
  db.collection('Users').find({name: 'Mike'}).count().then((users) => {
    console.log(`Users: ${users}`);
  }, (err) => {
    if (err) {
      console.log('Unable to fetch users', err);
    }
  });

  //client.close();
});
