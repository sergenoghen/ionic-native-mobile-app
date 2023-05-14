//comand :  NODE_TLS_REJECT_UNAUTHORIZED='0' node server/emai

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  //service: 'gmail',
  host: "smtp.ethereal.email", //
  port: 587,
  secure: false,

  auth: {
    user: 'sergenoghen@gmail.com',
    pass: 'precieuse'
  },
  tls: {
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: 'sergenoghen@gmail.com',
  to: 'sergenoghen237@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


