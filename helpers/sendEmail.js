const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_APY_KEY } = process.env;

sgMail.setApiKey(SENDGRID_APY_KEY);

const sendEmail = async (data) => {
    const email = {...data, from: "bivis60@gmail.com"};
    await sgMail.send(email);
    return true;
}

module.exports = sendEmail;