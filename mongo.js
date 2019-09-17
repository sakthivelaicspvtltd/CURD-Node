// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const MongoClient = mongodb.ObjectID

const { MongoClient, ObjectID } = require ('mongodb');
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'aics-test'
// const id=new ObjectID();
// console.log(id);


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);

    db.collection('employee').deleteMany({
        age: 15
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // const UpdatePromise= db.collection('employee').updateOne({
    //     _id: new ObjectID("5d7f79e1932b3a29fcfa9aeb")
    // },{
    //     $set: {
    //         name: 'Harish',
    //         gender: 'Male',
    //         age: 34,
    //         no: 9876543210,
    //         mailid: 'hari@gmail.com',
    //     }
    // })
    // UpdatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error)=> {
    //     console.log(error);
    // })




    // read
    // db.collection('employee').findOne({gender: 'Female' }, (error,user)=>{
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    // })
    // db.collection('employee').find({gender: 'Female' }).count((error,user)=>{
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    // })
    
    // create
    // db.collection('employee').insertOne({
    //     name: 'demo',
    //     age: 15,
    //     gender: 'Female',
    //     no: 1276543210,
    //     mailid: '1212123def@gmail.com'
    // },(error, result)=>{
    //     if (error) {
    //         return console.log('Unable to insert records');
    //     }
    //     console.log(result.ops);
    // });

    //////////////////////////////////////////////////////////////////
    // db.collection('employee').insertMany([
    //     {
    //         name: 'demo7',
    //         age: 35,
    //         gender: 'Female',
    //         no: 45276543210,
    //         mailid: '1212123def@gmail.com'
    //     },
    //     {
    //         name: 'demo8',
    //         age: 25,
    //         gender: 'Female',
    //         no: 45453210,
    //         mailid: 'ghf@gmail.com'
    //     },
    //     {
    //         name: 'demo9',
    //         age: 24,
    //         gender: 'Female',
    //         no: 4545543210,
    //         mailid: 'wer@gmail.com'
    //     },
    //     {
    //         name: 'demo10',
    //         age: 11,
    //         gender: 'Female',
    //         no: 13453210,
    //         mailid: 'rwer@gmail.com'
    //     },
    //     {
    //         name: 'demo11',
    //         age: 22,
    //         gender: 'Female',
    //         no: 1346543210,
    //         mailid: 'asd@gmail.com'
    //     },
    //     {
    //         name: 'demo12',
    //         age: 33,
    //         gender: 'Female',
    //         no: 1236543210,
    //         mailid: 'xcvb@gmail.com',
    //         createdate: new Date(),
    //         updatedate:""
    //     }
    // ],(error,result) => {
    //     if (error) {
    //         return console.log("unable to insert process");
    //     }

    //     console.log(result.ops);
    // })
})