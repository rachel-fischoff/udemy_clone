const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const courseSchema = new Schema({
    id: String,

});

module.exports = mongoose.model('courses', courseSchema);