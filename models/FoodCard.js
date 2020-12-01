const {Schema,model} = require('mongoose')

const schema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    popularity:{
        type: Number,
        required: true
    },
    weight: {
        type:Number,
        required:true
    }
})

module.exports = model('Food',schema)