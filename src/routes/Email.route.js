const router = require("express").Router();
const nodemailer = require("nodemailer");
const validEmail = require("../middleware/Email.middle");
const sendEmail = require("../utils/sendEmail");

router.post("/send", validEmail, async (req, res) => {
  sendEmail(req.body.subject, req.body.text, nodemailer);
  res.sendStatus(200);
});

module.exports = router;
