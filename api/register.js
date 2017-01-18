let express = require('express');
let registrations = require('../models/registration');
let router = express.Router();

router.post("/",function (req, res) {
    let name = req.body.name;
    let phone  = req.body.phone;
    let type = req.body.type;

    registrations.findOne({'phone': phone,'type':type}).exec().then(function (register) {
        if(register){
            return res.json({"message":"already registered","statuscode":400});
        }else {
            let newRegistration = new registrations();
            newRegistration.name = name;
            newRegistration.phone = phone;
            newRegistration.type = type;

            return newRegistration.save();
        }
    }).then(function () {
        return res.json({"message":"registration successfull","statuscode":200})
    });
});

module.exports = router;