  const {Project} = require("./schema");
  const axios= require('axios')

  async function addIt(req, res, next) {
    
      try{
        console.log(req.body,"req.body");
        let {name , description , author} = req.body
        let data = await Project.create({name : name , description :description, author});
        console.log(data,"data");  
        return res.send({status:1, message:"Added successfully"})
    
      }catch(e){
        console.log(e);
        return res.send({status:0, message:"Error occour" , error:e})
    
      }
    }

    
  
    
    
    

    module.exports={
      addIt
    }