const mongoose = require('mongoose')

//creating a database

mongoose.connect( 'mongodb+srv://business-web:business-web@business-web.svfcmly.mongodb.net/?retryWrites=true&w=majority' , {
    // useCreateIndex : true,
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(() => {
    console.log('connection successful')
})
  .catch((error) => {
    console.log(error)
  })