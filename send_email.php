<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $telegram = htmlspecialchars(trim($_POST['telegram']));

    // Проверка на пустые поля
    if (empty($name) || empty($email) || empty($phone)) {
        http_response_code(400);  // Возвращаем код ошибки 400 (Bad Request)
        echo 'Ошибка: пустые поля';
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'kaihuitongda@gmail.com';  // Ваш Gmail-логин
        $mail->Password = 'vsyl zwes uyzz oryz';  // Пароль приложения
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setFrom('kaihuitongda@gmail.com', 'GoStudyInChina');
        $mail->addAddress('kaihuitongda@gmail.com');  // Получатель

        $mail->Subject = 'noReply: from GoStudyInChina.org';
        $message = "Имя: $name\n";
        $message .= "Email: $email\n";
        $message .= "Номер телефона: $phone\n";
        $message .= "Telegram: $telegram\n";
        $mail->Body = $message;

        $mail->send();
        echo 'Письмо отправлено';
    } catch (Exception $e) {
        http_response_code(500);  // Возвращаем код ошибки 500
        echo 'Ошибка при отправке письма: ' . $mail->ErrorInfo;
    }
} else {
    http_response_code(400);  // Возвращаем код ошибки 400 (Bad Request)
    echo 'Неверный запрос';
}
