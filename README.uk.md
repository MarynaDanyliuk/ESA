# Parcel template

Цей проект створено за допомогою Parcel. Для ознайомлення та налаштування
додаткових можливостей, [зверніться до документації](https://parceljs.org/).

## Підготовка нового проекту

1. Переконайтеся, що на вашому комп'ютері встановлена LTS-версія Node.js.
   [Завантажте та встановіть](https://nodejs.org/en/) якщо потрібно.
2. Клонуйте цей репозиторій.
3. Змініть ім'я папки з `parcel-project-template` на ім'я свого проекту.
4. Створіть новий порожній репозиторій на GitHub.
5. Відкрийте проект в VSCode, запустіть термінал і пов'яжіть проект з
   GitHub-репозиторієм
   [за інструкцією](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Встановіть залежності проекту в терміналі командою `npm install` .
7. Запустіть режим розробки, виконавши команду `npm start`.
8. Перейдіть у браузері за адресою
   [http://localhost:1234](http://localhost:1234). Ця сторінка автоматично
   оновлюватиметься після збереження змін у файлах проекту.

## Файли та папки

- Всі стилізовані файли повинні знаходитися у папці `src/sass` і імпортуватися в
  файли стилів сторінок. Наприклад, для `index.html` файл стилів називається
  `index.scss`.
- Зображення додавайте у папку `src/images`. Збірник їх оптимізує, але лише під
  час розгортання продакшн-версії проекту. Все це відбувається в хмарі, щоб не
  навантажувати ваш комп'ютер, оскільки на слабших машинах це може зайняти
  багато часу.

## Розгортання

Для налаштування розгортання проекту потрібно виконати кілька додаткових кроків
щодо налаштування вашого репозиторію. Перейдіть на вкладку `Settings` і у
підсекції `Actions` виберіть `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Прокрутіть сторінку до останньої секції, переконайтеся, що вибрані параметри
так, як показано на наступному зображенні, і натисніть `Save`. Без цих
налаштувань сборці не вистачить прав для автоматизації процесу розгортання.

![GitHub actions settings](./assets/actions-config-step-2.png)

Продакшн-версія проекту автоматично збирається та розгортається на GitHub Pages
у гілку `gh-pages` кожного разу, коли оновлюється гілка `main`. Наприклад, після
прямого пуша або після прийняття запиту на витягування. Для цього необхідно в
файлі `package.json` змінити поле homepage та скрипт `build`, замінивши
`your_username` та `your_repo_name` на свої дані, та відправити зміни на GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Потім вам потрібно зайти в налаштування репозиторія GitHub (`Settings` >
`Pages`) та вказати розповсюдження файлів продакшн версії з папки `/root` гілки
`gh-pages`, якщо це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус розгортання

Статус останнього коміту розгортання відображається піктограмою біля його
ідентифікатора.

- **Жовтий колір** - триває збірка та розгортання проекту.
- **Зелений колір** - розгортання завершилося успішно.
- **Червоний колір** - під час лінтінгу, збірки або розгортання сталася помилка.

Докладну інформацію про статус можна подивитися, клацнувши на піктограму і
перейшовши за посиланням `Details` у спливаючому вікні.

![Deployment status](./assets/status.png)

### Жива сторінка

Зазвичай через кілька хвилин живу сторінку можна буде переглянути за адресою,
яку ви вказали у властивості `homepage`. Наприклад, ось посилання на живу версію
для цього репозиторію:
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Якщо відкривається порожня сторінка, переконайтеся, що у вкладці `Console` немає
помилок, пов'язаних з неправильними шляхами до файлів CSS та JS проекту
(**404**). Ймовірно, у вас неправильне значення властивості `homepage` або
скрипта `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного натискання на `main` репозиторій GitHub спеціальний скрипт
   (GitHub Action) запускається з файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервері, де проект ініціалізується та
   проходить збірку перед деплоєм.
3. Якщо всі етапи успішно пройдені, зібрана продакшн версія файлів проекту
   надсилається до гілки `gh-pages`. У випадку невдачі, причина буде вказана в
   журналі виконання скрипта.

<!-- _________PHPmailer___________ -->

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
