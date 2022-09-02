const mongoose = require('mongoose')


const HouseSchema = new mongoose.Schema({
    Name: {
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    Students: [{
        type: String,
    }],
    Points: {
        type: Number,
        default: 0,
    }
}, {timestamps: true})


module.exports = mongoose.model('Houses', HouseSchema)