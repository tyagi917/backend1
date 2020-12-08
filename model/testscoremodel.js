const{Schema,model}=require('mongoose');
const Testscore=new Schema({
	name:
	{
		type:String,
		require:true
	},
	round:
	{
		type:Number,
		require:true
	},
	score:
	{
		type:Number,
		require:true
	},



})
module.exports=model("testscore",Testscore);