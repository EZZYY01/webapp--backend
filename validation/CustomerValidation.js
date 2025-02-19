const joi = require("joi");

const customerSchema = joi.object({
    fname: joi.string().required(),
    lname: joi.string().required(),
    email: joi.string().required().email(),
    phone: joi.string().required()
})


function CustomerValidation(req, res, next) {
    const { fname, lname, email, phone } = req.body;
    const { error } = customerSchema.validate({ fname, lname, email, phone })
    if (error) {
        return res.json(error)
    }
    next()

}

module.exports = CustomerValidation;