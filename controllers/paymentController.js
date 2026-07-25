exports.deposit = async(req,res)=>{

try{

res.json({

success:true,

message:"Deposit endpoint ready."

});

}catch(err){

res.status(500).json({

message:err.message

});

}

};

exports.status = async(req,res)=>{

res.json({

success:true,

message:"Transaction status endpoint."

});

};

exports.callback = async(req,res)=>{

res.json({

success:true,

message:"Callback received."

});

};
