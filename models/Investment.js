const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema(
{
user:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
},

amount:{
type:Number,
required:true
},

plan:{
type:String,
required:true
},

profit:{
type:Number,
default:0
},

status:{
type:String,
default:"Active"
}

},
{timestamps:true}
);

module.exports = mongoose.model("Investment",InvestmentSchema);
