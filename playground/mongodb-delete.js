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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result); // result: { n: 3, ok: 1 } (deleted 3, ok1 - success)
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result.result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // Users collection
  db.collection('Users').deleteMany({name: 'Mike'}).then((result) => {
    console.log(result.result);
  });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b32b9ffed139b0cf92396b6')}).then((result) => {
    console.log(result);
  });

  //client.close();
});
