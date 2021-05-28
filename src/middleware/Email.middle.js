const validEmail = async (req, res, next) => {
  const { subject, text } = req.body;
  if (!subject) return res.status(400).json({ error: "Subject missing!" });
  if (!text) return res.status(400).json({ error: "Text missing!" });

  if (subject.length > 64)
    return res.status(400).json({ error: "Max subject length is 64!" });
  if (text.length > 16384)
    return res.status(400).json({ error: "Max text length is 16384!" });

  next();
};

module.exports = validEmail;
