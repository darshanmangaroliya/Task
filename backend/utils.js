import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport"

export const generateToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      "somethingsecret",
      {
        expiresIn: "30d",
      }
    );
  };
  
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key:
          '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'
      }
    })
  );
export const sendEmail = async (email, subject, text) => {
	try {
   

		await transporter.sendMail({
			from:"bewobac198@nahetech.com",
			to: email,
			subject: subject,
			text: text,
		});
		console.log("email sent successfully");
	} catch (error) {
		console.log("email not sent!");
		console.log(error);
		return error;
	}
};