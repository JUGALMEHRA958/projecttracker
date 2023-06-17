  const {Project, Bug} = require("./schema");
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

    async function addBug(req, res, next) {
    
      try{
        console.log(req.body,"req.body");
        let {title , description , label,author , projectId} = req.body
        let data = await Bug.create({title , description , label,author,projectId});
        console.log(data,"data");  
        return res.send({status:1, message:"Added successfully"})
    
      }catch(e){
        console.log(e);
        return res.send({status:0, message:"Error occour" , error:e})
    
      }
    }

    
  
    
    
    

    module.exports={
      addIt,addBug
    }