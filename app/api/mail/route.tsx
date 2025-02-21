import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const formEntries = Object.fromEntries(formData.entries());

  // console.log(formEntries["name"]);
  // console.log(formData);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: '"Message bot"<luthfiizhar@gmail.com>', // sender address
      to: `${formEntries["email"]}`, // list of receivers
      subject: `Message from ${formEntries["name"]}`, // Subject line
      html: `
      <!DOCTYPE html>
      <html>
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background: #007bff;
                  color: white;
                  padding: 10px;
                  text-align: center;
                  font-size: 20px;
                  border-top-left-radius: 8px;
                  border-top-right-radius: 8px;
              }
              .content {
                  padding: 20px;
                  text-align: left;
              }
              .footer {
                  text-align: center;
                  font-size: 12px;
                  color: #777;
                  padding: 10px;
                  border-top: 1px solid #ddd;
              }
              .button {
                  display: inline-block;
                  padding: 10px 20px;
                  color: white;
                  background: #28a745;
                  text-decoration: none;
                  border-radius: 5px;
                  margin-top: 10px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">Notification Email</div>
              <div class="content">
                  <p>Hello,</p>
                  <p>Thank you for contacting us. Here are the details of the information you submitted:</p>
                  <p><strong>Name:</strong> ${formEntries["name"]}</p>
                  <p><strong>Email:</strong> ${formEntries["email"]}</p>
                  <p><strong>Message:</strong> ${formEntries["message"]}</p>
              </div>
              <div class="footer">
                  &copy; 2025 Stock Of Valve. All rights reserved.
              </div>
          </div>
      </body>
      </html>
      `, // html body
    });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
