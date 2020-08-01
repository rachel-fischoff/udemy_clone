const mongoose = require('mongoose');
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    twitterId: String,
    email: {type: String, unique: true, lowercase: true, sparse:true},
    profile: {
        name: {type: String, default: ''},
        image: {type: String, default: ''},
        author: {type: Boolean, default: false}
    },
    courses: [{
        ref: {type: ObjectId, ref: 'Course'},
        completed: {type: Boolean, default: false}
    }]
});

mongoose.model('users', userSchema);