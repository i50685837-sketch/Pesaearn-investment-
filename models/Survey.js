const mongoose = require("mongoose");

const SurveySchema = new mongoose.Schema(
{

title:String,

description:String,

reward:{
type:Number,
default:0
},

questions:Array

},
{timestamps:true}
);

module.exports = mongoose.model("Survey",SurveySchema);
