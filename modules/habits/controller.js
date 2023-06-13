const { HabitTracker } = require("./schema")
const cron = require('node-cron');



async function addIt(req, res, next) {
  
  try{
    let {title , description} = req.body
    let data = await HabitTracker.create({title , description});

    return res.send({status:1, message:"Added successfully"})

  }catch(e){
    console.log(e);
    return res.send({status:0, message:"Error occour" , error:e})

  }
}
async function editHabit(req, res, next) {
  
  try{
    let {id , updatedStatus} = req.body
    let data = await HabitTracker.findOne({_id: id});
    if(!data){
      return res.send({status:0, message:"Error occour" , error:e})
  }
  else{
    let updatedData = await HabitTracker.findByIdAndUpdate(id,{status : updatedStatus}, {new:true});
    console.log(updatedData);
  }
    return res.send({status:1, message:"Updated successfully"})

  }catch(e){
    console.log(e);
    return res.send({status:0, message:"Error occour" , error:e})

  }
}


//cron to set every habit status to None after 24 hours
cron.schedule('44 12 * * *', async () => {
  try {
    await HabitTracker.updateMany({ status: { $ne: 'None' } }, { status: 'None' });
    console.log('Status updated to "None" for all habits');
  } catch (error) {
    console.error('Error updating habit statuses:', error);
  }
});
module.exports = { addIt , editHabit};
