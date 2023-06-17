const mongoose = require('mongoose');


const project = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      author: {
        type: String,
        required: true
      },
      isDeleted: {
        type: Boolean,
        default:false
      },
},{
    timestamps:true,
    timeseries:true
})

const  Project = mongoose.model('Projects', project);

const bug = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  }
}, {
  timestamps: true,
  timeseries: true
});

const Bug = mongoose.model('Bug', bug);

module.exports = {
    Project,Bug
  };