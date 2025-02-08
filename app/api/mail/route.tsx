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
      to: `anightboy1234@gmail.com`, // list of receivers
      subject: `Message from ${formEntries["name"]}`, // Subject line
      html: `<h1>${formEntries["message"]}</h1>`, // html body
    });
    return NextResponse.json({ status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
