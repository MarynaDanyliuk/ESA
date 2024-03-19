<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Включення файлів PHPMailer
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
// require 'phpmailer/src/SMTP.php';

$country = $_POST['country'];
$city = $_POST['city'];
$info = $_POST['info'];
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$comment = $_POST['comment'];
$mailing = isset($_POST['mailing']) ? $_POST['mailing'] : 'No'; // перевірка, чи була відмічена галочка підписки
$categories = implode(', ', $_POST['categories']); // об'єднання масиву категорій в одну рядок
$statuses = implode(', ', $_POST['statuses']); // об'єднання масиву статусів в одну рядок

// $mail->setFrom('marydanyliuk@gmail.com', 'ESA mail')

// $mail->addAddress('manfimova@gmail.com')

// $mail->Subject= 'Привіт! Прийшов новий лист від ESA'

    $mail = new PHPMailer(true);

try {

$mail->CharSet = 'UTF-8';
$mail->setLanguage('ua', 'phpmailer/language/');
$mail->isHTML(true);
    // // Налаштування з'єднання з сервером SMTP
    $mail->isSMTP();
    $mail->Host = 'smtp.meta.ua';
    $mail->SMTPAuth = true;
    $mail->Username = 'marydanyliuk@meta.ua'; // Ваша електронна адреса Gmail
    $mail->Password = 'Mary1111'; // Ваш пароль Meta
    $mail->SMTPSecure = 'ssl'; // або 'ssl'
    $mail->Port = 465; // або 465 для SSL

    // Налаштування відправника та отримувача
    $mail->setFrom('marydanyliuk@meta.ua', 'ESA mail');
    $mail->addAddress('manfimova@gmail.com');

  // Встановлення параметрів листа
    $mail->Subject = 'Привіт! Прийшов новий лист від ESA';
    $mail->Body = "
        Країна: $country <br>
        Місто: $city <br>
        Інформація: $info <br>
        Ім'я: $name <br>
        Телефон: $tel <br>
        Email: $email <br>
        Коментар: $comment <br>
        Підписка на розсилку: $mailing <br>
        Вибрані категорії: $categories <br>
        Вибрані статуси: $statuses <br>
    ";

    // Відправлення листа
    $mail->send();
    
    $response = ['message'=> 'Повідомлення відправлено успішно!'];
    header("Content-type: application/json");
    echo json_encode($response);

} catch (Exception $e) {
  $response = ['message'=> "Помилка відправлення повідомлення: {$mail->ErrorInfo}"];
    header("Content-type: application/json");
    echo json_encode($response);
}

?>


<!-- $response = ['message'=> $message]
header("Content-type: aplication/json")
echo json_encode($response) -->