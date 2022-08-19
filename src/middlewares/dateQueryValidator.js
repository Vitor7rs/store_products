export default function dateQueryValidator(schema) {
    return (req, res, next) => {
        const{error}= schema.validate(req.query.date, { abortEarly: false });
        if(error){
            return res.status(400).send(error.details.map(detail => detail.message));
        }
        next();
    }
}