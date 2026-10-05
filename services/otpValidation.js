const Joi = require("@hapi/joi");

/*
 * validate sms data
 */
const registerSmsValidation = (data) => {
  const schema = Joi.object({
    contacts: Joi.string().min(10).required(),
    msg: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

/*
 * validate otp data
 */
const otpValidation = (data) => {
  const schema = Joi.object({
    mobile: Joi.string().min(10).required(),
    otp: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

/**
 * validate mobile length
 */

const mobileValidation = (data) =>{
  const schema = Joi.object({
    contacts: Joi.string().min(10).required()
  });
  return schema.validate(data);
}

module.exports.registerSmsValidation = registerSmsValidation;
module.exports.otpValidation = otpValidation;
module.exports.mobileValidation = mobileValidation;
