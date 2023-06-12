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
    isDeleted: {
      type: Boolean,
      default: false
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const HabitTracker = mongoose.model('HabitTracker', habitTrackerSchema);
  
  module.exports = {
    User,
    HabitTracker
  };