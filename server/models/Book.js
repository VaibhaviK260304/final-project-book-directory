import {Schema, model} from "mongoose";

const bookSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type: Number,
        required: true,
    },
    category:{
        type: String,
        default: "others",
    },
    type:{
        type: String,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{
    timestamps: true
});

const book = model("book", bookSchema);

export default book;