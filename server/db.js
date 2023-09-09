const mongoose = require("mongoose")

const user = 'cadulo'
const password = 'PBLHFbkApgVVzRLA'
const database_name ='album-maker'
const url = `mongodb+srv://cadulo:${password}@gallerydb.4vqdol5.mongodb.net/?retryWrites=true&w=majority`
// const url = 'mongodb://127.0.0.1:27017/'

mongoose.connect(url)
.then(() => {
    console.log('Database connected!');
})
.catch((error)=> {
    console.log('Error connecting:', error);
});