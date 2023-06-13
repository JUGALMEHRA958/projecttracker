 function checkAdding(req,res,next){



    if(!req.body.title || !req.body.description ){
        res.send({status:0  , message:"Invalid details"})
    }

    
    next();
 }

 function editValidator(req,res,next){



    if(!req.body.id ){
        res.send({status:0  , message:"Please send id"})
    }

    
    next();
 }


 module.exports={checkAdding,editValidator}