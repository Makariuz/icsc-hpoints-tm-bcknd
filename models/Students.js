const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
    name: {
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    houseName: {
        type: String,
    },
    points:{
        type:Number,
        default: 0,
    }
}, {timestamps: true})


module.exports = mongoose.model('Student', StudentSchema)