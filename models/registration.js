let mongoose = require('mongoose');

let registrationSchema = mongoose.Schema({
    name : {type:String},
    phone : {type: Number},
    type : {type: String}
});

module.exports = mongoose.model('registration',registrationSchema);