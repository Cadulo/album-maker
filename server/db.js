const mongoose = require("mongoose")

const user = 'admin'
const password = 'admin'
const database_name ='album-maker'
const url = `mongodb+srv://${user}:${password}@cluster0.7vfqa1k.mongodb.net/${database_name}?retryWrites=true&w=majority`
// const url = 'mongodb://127.0.0.1:27017/'

mongoose.connect(url)
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});