const joi = require('joi')

const validator = (req, res, next) => {

    const schema = joi.object({
        firstName: joi.string()
            .min(3)
            .max(20)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            .required()
            .messages({
                'string.min': 'Firstname needs min 3 characters.',
                'string.max': 'Firstname allows max 20 characters.'}),
        lastName: joi.string()
            .min(3)
            .max(20)
            .trim()
            .pattern(new RegExp('[a-zA-Z]'))
            // .required()
            .messages({
                'string.min': 'Lastname needs min 3 characters.',
                'string.max': 'Lastname allows max 20 characters.'}),
        photo: joi.string()
            .min(10)
            .trim()
            .required()
            .messages({
                'string.min': 'Photo url need at least 10 characters.'}),
        email: joi.string()
            .email({minDomainSegments:2})
            .required()
            .messages({
                'string.email': 'Email formar is incorrect.'}),
        password: joi.string()
            .min(8)
            .max(40)
            .pattern(new RegExp('[a-zA-Z0-9]'))
            .required()
            .messages({
                'string.min': 'Password needs min 8 characters.',
                'string.max': 'Password allows max 30 characters.'}),
        country: joi.string()
            .required(),
        from: joi.string()
            .required()
    })
    const validation = schema.validate(req.body.userData, {abortEarly:false})
    if (validation.error) {
        return res.json({success: false, from: 'validator', message: validation.error.details, test: validation})
    }
    next()
}

module.exports = validator