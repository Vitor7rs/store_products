export default function schemaValidator(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            let status = 400
            if (error.details[0].context.label=='image'){
                status = 422
            }
            return res.status(status).send(error.details.map(detail => detail.message));
        }
        next();
    }
}