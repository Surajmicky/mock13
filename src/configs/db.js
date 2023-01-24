const mongoose = require('mongoose')

const connect = ()=>{
    return mongoose.connect('mongodb+srv://suraj:suraj123@cluster0.dugw8ja.mongodb.net/mock13')

}

module.exports = connect