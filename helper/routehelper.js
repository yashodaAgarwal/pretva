const Joi = require("joi");

module.exports = {
    validateBody: (schemas) => {
        return (req, res, next) => {
            const result = schemas.validate(req.body);
            if (result.error) {
                console.log(result.error)
                return res.status(400).json(result.error)
            }
            if (!req.value) { req.value = {}; }
            req.value['body'] = result.value
            console.log("Auth Schema done")
            next();
        }
    },
    schemas: {
        authSchema: Joi.object().keys({
            fname:Joi.string().required(),
            lname:Joi.string().required(),
            CompanyName:Joi.string().required(),
            country:Joi.string().required(),
            ContactNo:Joi.string().required(),
            Type:Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })}}