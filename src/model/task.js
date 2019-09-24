const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  name: String,
  type: String,
  favorite: String,
  status: {
    type: Boolean,
    default: false
  }
});


module.exports = mongoose.model('tasks', TaskSchema);
