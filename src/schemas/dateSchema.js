import joi from "joi"

const pattern = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

const dateSchema = joi.string().regex(pattern);

export default dateSchema;