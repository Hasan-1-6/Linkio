import mongoose from 'mongoose';

const URLschema = new mongoose.Schema({
    origUrl : {
        type : String,
        required : true,
    },
    shortUrl : {
        type : String,
        required : true,
        unique : true,
    },
    clickCount : {
        type : Number,
        default : 0,
        required : true
    }
})

const URLmodel = mongoose.model("URLmodel", URLschema)
export default URLmodel;