const validateRequest = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json(error.details.map((detail) => detail.message).toString());
  }

  req.user = value;

  next();
};

module.exports = validateRequest;
