import joi from "joi";

const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().precision(2).required(),
    description: joi.string(),
    image: joi.string().uri().required()
});

export default cakeSchema;
