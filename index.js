import functions from "firebase-functions";

import { initializeApp } from "firebase-admin";
initializeApp();
// admin.initializeApp(functions.config().firebase);

import nodemailer from "nodemailer";

function sendmail(name, email, message) {
  var transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "decoy540@gmail.com",
      pass: "lmnop540"
    }
  });

  // Mail sender transport object
  transporter.sendMail({
    from: "decoy540@gmail.com",
    to: "likhodyantyi@gmail.com",
    subject: "Firebase Message",
    html: `
    <p><b>Name</b><p>
    ${name}
    <p><b>Email</b><p>
    ${email}
    <p><b>Message</b><p>
    ${message}
     
    `
  });

  exports.makeUppercase = database
    .ref("/messages/{pushId}")
    .onCreate((snapshot, context) => {
      const original = snapshot.val();
      var name = original.name;
      var email = original.email;
      var message = original.subject;

      sendmail(name, email, message);
      return null;
    });
}
