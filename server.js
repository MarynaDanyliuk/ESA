const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

require('dotenv').config();

const { META_PASSWORD, EMAIL_FROM } = process.env;

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

// Парсинг вхідних даних
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Налаштування транспортера для відправки листів
const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465, // 25, 465, 2525
  secure: true,
  auth: {
    user: EMAIL_FROM,
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

// Функція для відправки електронної пошти
async function sendEmail(formData) {
  const {
    country,
    city,
    info,
    name,
    tel,
    email,
    comment,
    mailing,
    categories,
    statuses,
  } = formData;

  const mailOptions = {
    from: EMAIL_FROM,
    to: 'manfimova@gmail.com',
    subject: `Нова форма з сайту ESA від ${name}`,
    text: `
      Країна: ${country}
      Місто: ${city}
      Інформація: ${info}
      Ім'я: ${name}
      Телефон: ${tel}
      Email: ${email}
      Коментар: ${comment}
      Підписка на розсилку: ${mailing}
      Вибрані категорії: ${categories ? categories.join(', ') : ''}
      Вибрані статуси: ${statuses ? statuses.join(', ') : ''}
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Маршрут для обробки POST-запитів
app.post('/submitForm', async (req, res) => {
  try {
    // Отримання даних з тіла запиту
    const formData = req.body;

    // Виклик функції для відправки електронної пошти
    await sendEmail(formData);

    // Відповідь на успішний запит
    res.status(200).send('Лист успішно відправлено');
  } catch (error) {
    // Обробка помилок
    console.error('Помилка відправки листа:', error);
    res.status(500).send('Помилка відправки листа');
  }
});

// Сервер слухає запити
app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});

// const sendEmail = async emailOptions => {
//   const email = { ...emailOptions, from: EMAIL_FROM };
//   await transporter.sendMail(email);
//   return true;
// };

// // Маршрут обробки відправки листа
// app.post('/sendEmail', async (req, res) => {
//   const { email, subject, text } = req.body;

//   const mailOptions = {
//     from: 'marydanyliuk@meta.ua',
//     to: email,
//     subject: subject,
//     text: text,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Лист успішно відправлено');
//     res.status(200).send('Лист успішно відправлено');
//   } catch (error) {
//     console.error('Помилка відправки листа:', error);
//     res.status(500).send('Помилка відправки листа');
//   }
// });

// Відправлення листа
// transporter.sendMai(mailOptions, (error, info) => {
//   if (error) {
//     console.log(error);
//     res.status(500).send('Помилка відправки листа');
//   } else {
//     console.log('Лист успішно відправлено: ' + info.response);
//     res.status(200).send('Лист успішно відправлено');
//   }
// });

// Налаштування даних листа
// const mailOptions = {
//   from: 'marydanyliuk@meta.ua', // ваша електронна адреса Gmail
//   to: 'manfimova@gmail.com',
//   subject: 'rere',
//   text: 'rere',
// };

// const transporter = nodemailer.createTransport({
//   service: 'Meta',
//   auth: {
//     user: 'marydanyliuk@meta.ua', // ваша електронна адреса Gmail
//     pass: 'Mary1111', // ваш пароль Gmail
//   },
// });

// const sendEmail = async mailOptions => {
//   const email = { ...mailOptions, from: 'marydanyliuk@meta.ua' };
//   await transporter.sendMail(email);
//   return true;
// };

// Маршрут обробки відправки листа
// app.post('/sendEmail', (req, res) => {
//   const { email, subject, text } = req.body;

// const nodemailer = require('nodemailer');

// const nodemailerConfig = {
//   host: 'smtp.meta.ua',
//   port: 465, // 25, 465, 2525
//   secure: true,
//   auth: {
//     user: EMAIL_FROM,
//     pass: META_PASSWORD,
//   },
// };

// const emailOptions = {
//   to: "mahera1071@syinxun.com",
//   from: "marydanyliuk@meta.ua",
//   subject: "Test email",
//   text: "Привіт. Ми тестуємо надсилання листів!",
// };

// const sendEmail = async emailOptions => {
//   const email = { ...emailOptions, from: EMAIL_FROM };
//   await transport.sendMail(email);
//   return true;
// };

// transporter
//   .sendMail(emailOptions)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

// const sendEmail = async (data) => {
//   const email = { ...data, from: EMAIL_FROM };
//   await sgMail.send(emailOptions);
//   return true;
// };
