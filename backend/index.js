var express = require("express");
var app = express();
require("dotenv").config();
var mongoose = require("mongoose");
var ccavReqHandler = require("./payment/ccavRequestHandler.js");
var ccavResHandler = require("./payment/ccavResponseHandler.js");
var User = require("./models/user_model.js");
var cors = require("cors");
const QRCode = require("qrcode");
const nodemailer = require("nodemailer");

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000,
});

// mongoose.connection.on("error", (err) => {
//   console.error("MongoDB connection error:", err);
// });

// new User({
//   username: "admin",
//   address: "kudhfb",
//   amount: 43,
//   city: "djbv",
//   college: "dlvjn",
//   customerId: "ldivhn",
//   department: "INT",
//   email: "skufvb",
//   eventDetails: "kubdv",
//   ordId: "ldvuhb",
//   paid: false,
//   phoneNo: "9876532432",
//   regNo: "ksudgvskjfvb",
//   year: 3,
// }).save();

app.use(cors());

app.use(express.static("public"));
app.set("views", __dirname + "./payment/public");
app.engine("html", require("ejs").renderFile);

app.get("/about", function (req, res) {
  res.render("dataFrom.html");
});

app.get("/test", (req, res, next) => {
  
});

app.post("/ccavRequestHandler", async (req, res) => {
  // const qrCodeBuffer = await QRCode.toBuffer(
  //   "Hellooouhbiu"
  // );
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL, // Your Gmail email address
  //     pass: process.env.PASSWD, // Your Gmail password or an app-specific password
  //     // user: "2021it0668@svce.ac.in", // Your Gmail email address
  //     // pass: "09naveen", // Your Gmail password or an app-specific password
  //   },
  // });

  // const mailOptions = {
  //   from: process.env.EMAIL,
  //   // to: parsedData.billing_email.trim(),
  //   to: "naveen.akash0904@gmail.com",
  //   subject: "QR Code Email",
  //   html: `
  //   <!DOCTYPE html>
  //   <html lang="en">

  //   <head>
  //       <meta charset="UTF-8">
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //       <title>Highways E-Ticket</title>
  //       <style>
  //           body {
  //               font-family: Arial, sans-serif;
  //               background-color: #f4f4f4;
  //               margin: 0;
  //               padding: 0;
  //               text-align: center;
  //           }

  //           .ticket-container {
  //               max-width: 600px;
  //               margin: 50px auto;
  //               background-color: #fff;
  //               padding: 20px;
  //               border-radius: 8px;
  //               box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  //           }

  //           .ticket-header {
  //               padding: 10px;
  //               border-radius: 8px 8px 0 0;
  //           }

  //           .ticket-content {
  //               padding: 20px;
  //           }

  //           .qr-code {
  //               margin-top: 20px;
  //           }

  //           .footer-text {
  //               margin-top: 20px;
  //               color: #888;
  //           }

  //           /* Different colors for ticket types */
  //           .ticket-header.Day1 {
  //               background-color: #3498db;
  //               color: #fff;
  //           }

  //           .ticket-header.Day2 {
  //               background-color: #27ae60;
  //               color: #fff;
  //           }

  //           .ticket-header.Combo {
  //               background-color: #ffd700;
  //               color: #black;
  //           }
  //       </style>
  //   </head>

  //   <body>
  //       <div class="ticket-container">
  //           <div class="ticket-header Day1">
  //               <center>
  //                   <h2>Highways E-Ticket</h2>
  //               </center>
  //               <center>
  //                   <h1>Day1 Ticket</h1>
  //               </center>
  //           </div>
  //           <div class="ticket-content">
  //               <p>Hi [user.username]</p>
  //               <p>We are delighted to have you registered for Highways! Here are your e-ticket details for the exciting event taking place on the __ and __ dates. We look forward to welcoming you!</p>
  //               <div class="qr-code">
  //                   <p>Hello valued participant,</p>
  //                   <p>Your personalized QR code awaits you below:</p>
  //                   <!-- Add QR Code here using the provided code snippet -->
  //                   <img src="cid:qrcode@unique" width=100% alt="QR Code" />
  //               </div>
  //               <p class="footer-text">Kindly allow a moment for the QR code to be generated. Thank you for your patience.</p>
  //               <p class="footer-text">Please present this QR code at the entrance during the event.</p>
  //           </div>
  //       </div>
  //   </body>

  //   </html>

  // `,
  // attachments: [
  //   {
  //     filename: "qrcode.png",
  //     content: qrCodeBuffer,
  //     encoding: "base64",
  //     cid: "qrcode@unique", // Content-ID for referencing the image in the HTML
  //   },
  // ],
  // };

  // const info = await transporter.sendMail(mailOptions);
  // console.log("Email sent:", info);

  ccavReqHandler.postReq(req, res);
});

app.get("/qrData/:ordId", async (req, res) => {
  const user = await User.findOne({ ordId: req.params.ordId });
  console.log(user);
  res.json(user);
});

app.post("/ccavResponseHandler", (req, res) => {
  ccavResHandler.postRes(req, res);
});

mongoose.connection.once("open", () => {
  app.listen(3001, () => {
    console.log("Server started at: http://localhost:3001");
  });
  console.log("Mongo Success");
});
