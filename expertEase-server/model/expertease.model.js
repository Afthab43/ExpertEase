import mongoose from "mongoose";

const learnSchema=new mongoose.Schema({
    course:String,
    title:String,
    price:Number,
    category:String,
    imageUrl:String
});

const  ExpertEase = mongoose.model("ExpertEaseCollection",learnSchema);
export default  ExpertEase;