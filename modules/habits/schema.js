// HabitTracker Schema

const mongoose = require('mongoose');



const habitTrackerSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Done', 'Not done', 'None'],
      required: false,
      default:"None",
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },{
    
    timestamps
    :true
  });
  
  const HabitTracker = mongoose.model('HabitTracker', habitTrackerSchema);
  
  module.exports = {
    HabitTracker
  };