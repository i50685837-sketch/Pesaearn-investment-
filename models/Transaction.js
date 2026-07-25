const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
{
user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},

type:{
type:String,
enum:["deposit","withdraw","investment","reward"],
required:true
},

amount:{
type:Number,
required:true
},

status:{
type:String,
default:"Pending"
},

reference:{
type:String
}

},
{timestamps:true}
);

module.exports = mongoose.model("Transaction",TransactionSchema);
