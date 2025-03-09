// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as Yup from "yup";

// Define the validation schema using Yup
const contactFormSchema = Yup.object().shape({
  full_name: Yup.string().required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone Number is required"),
  car: Yup.string().required("car is required"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // Validate the request body against the schema
    await contactFormSchema.validate(body, { abortEarly: false });

    const { full_name, email, phone, car } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT), // Convert port to number
      secure: process.env.EMAIL_SECURE === "true", // Convert secure to boolean
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: "gicer@gmail.com",
      to: "gicerf@gmail.com", // Your email address to receive the messages
      subject: "MedanRent Enquiry Form Submission",
      html: `
        <p>Full Name: ${full_name}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Car: ${car}</p>
      `, // html body
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      status: "success",
      message: "Email sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      return NextResponse.json({
        status: "error",
        message: "Validation failed",
        errors: error.errors,
      });
    }

    console.error(error);
    return NextResponse.json({
      status: "error",
      message: "Failed to send email",
    });
  }
}
