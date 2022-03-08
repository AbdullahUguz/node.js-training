const nodemailer = require('nodemailer');

const Course = require('../models/Course');

const User = require('../models/User');

exports.getIndexPage = async (req, res) => {
 // console.log(req.session.userID);

  const courses = await Course.find().sort('-createdAt').limit(2);
  const totalCourses = await Course.find().countDocuments();
  const totalStudents = await User.find({role:'Student'}).countDocuments();
  const totalTeachers = await User.find({role:'Teacher'}).countDocuments();

  res.status(200).render('index', {
    page_name: 'index',
    courses,
    totalCourses,
    totalStudents,
    totalTeachers
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};

exports.getRegisterPage = (req, res) => {
  res.status(200).render('register', {
    page_name: 'register',
  });
};

exports.getLoginPage = (req, res) => {
  res.status(200).render('login', {
    page_name: 'login',
  });
};

exports.sendEmil = async (req, res) => {
  try {
    const outputMessage = `
  
    <h1>Mail Details</h1>
    <ul>
      <li>Name: ${req.body.name} </li>
      <li>Email: ${req.body.email} </li>
    </ul>
    <h1>Message</h1>
    <p>${req.body.message}</p>
  
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'website.hrms@gmail.com', // gmail account
        pass: 'xiqqzekdlbumivdha111', // gmail password
      },
    });

    let info = await transporter.sendMail({
      from: '"Smart EDU Contact Form" <website.hrms@gmail.com>', // sender address
      to: 'halludba88@gmail.com', // list of receivers
      subject: 'Smart EDU', // Subject line
      html: outputMessage, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    req.flash('success', 'We recived your message succesfully');
    res.status(200).redirect('contact');
  } catch (err) {
   // req.flash('error', `Something happend! ${err}`);
    req.flash('error', `Something happened!`);
    res.status(200).redirect('contact');
  }
};
