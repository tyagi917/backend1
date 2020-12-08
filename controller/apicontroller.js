const User=require('../model/usermodel.js');
const Testscores=require('../model/testscoremodel.js');


exports.Candidatefield=(req,res)=>
{

	console.log(req.body)
	const user=new User();
	const {name,email}=req.body;
	user.name=name,
	user.email=email,
	//console.log(contacts.name);

	
	user.save((err,post)=>{
			if(err)
			{
			return res.status(400).json({status:"failed",message:"failed fetch post"})
		}
		return res.json({message:"succ"});
		
		
	})

}
exports.Testscore=(req,res)=>
{

	console.log(req.body)
	const test=new Testscores();
	const {name,round,score}=req.body;
	test.name=name,
	test.round=round,
	test.score=score,
	//console.log(contacts.name);

	
	test.save((err,post)=>{
			if(err)
			{
			return res.status(400).json({status:"failed",message:"failed fetch post"})
		}
		return res.json({message:"succ"});
		
		
	})

}
exports.Restult=(req,res)=>{
Testscores.aggregate([{$group:{_id:'$name',highestscore:{$max:"$score"},avgscore:{$avg:"$score"}}}]).exec((err,post)=>{
			if(err)
			{
				return res.status(400).json({
					status:failed
				})
			}
			return res.json(post);
		})
	}