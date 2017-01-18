let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    userName : {type:String}
});

module.exports = mongoose.model('user',userSchema);