const validate = (schema) => async (req, res, next) => {
    try{
        const parseBody = await schema.parseBody(req.body);
        req.body = parseBody;
        next();
    } catch(err){
        res.status(400).json({ msg: err })
    }
}

export default validate;