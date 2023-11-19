<p align="center">
<h1 align="center">Classroom</h1>
<div align="center">Приложение для объединения учеников в группы, создания/прохождения тестов.</div>
<br/>

<table>
  <tbody>
  <tr>
    <td colspan="2">
        <img src="https://github.com/zoDLer1/classroom/assets/88045849/625506de-2b06-41ab-ba1d-75e25ebdf6ce" />
    </td>
  </tr>
    <tr>
        <td>
            <img src="https://github.com/zoDLer1/classroom/assets/88045849/a150d04d-9313-4246-99dc-5f3f2ba48cfd">
        </td>
        <td>
            <img src="https://github.com/zoDLer1/classroom/assets/88045849/5f4b0e8b-5986-47bc-919e-77faf5c77849">
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://github.com/zoDLer1/classroom/assets/88045849/b09436b8-5568-4a78-95b2-59dd57c7b22e">
        </td>
        <td>
            <img src="https://github.com/zoDLer1/classroom/assets/88045849/08210172-ffc7-436c-9c4d-65d4ac17922e">
        </td>
    </tr>
    <tr>
        <td>
            <img src="https://github.com/zoDLer1/classroom/assets/88045849/47cbcc85-d26b-48aa-84c1-2f173597c202">
        </td>
        <td>
            <img src="https://github.com/zoDLer1/classroom/assets/88045849/313d3f86-ac6b-4f02-94e4-28a8bd2551fb">
        </td>
    </tr>

  </tbody>
</table>
</p>




## Предварительные требования
Прежде чем начать, убедитесь, что у вас установлены следующие необходимые компоненты:
- [Git](https://git-scm.com/downloads)
- [Python 3.6 или выше](https://www.python.org/downloads/)
- [Node.js](https://nodejs.org/en/download) (comes with [npm](https://www.npmjs.com))
## Установка
Чтобы запустить это приложение, выполните следующие действия:
### 1. Клонируйте репозиторий:
Откройте терминал или командную строку и клонируйте репозиторий, используя  следующую команду:
```bash
git clone https://github.com/zoDLer1/classroom.git
```
### 2. Установите зависимости:
Перейдите в корневой каталог проекта с помощью терминала или командной строки:
```bash
cd classroom
```
#### Backend
Установите зависимости серверной части, выполнив следующие команды:
```bash
cd drf_back
pip install -r requirements.txt
```
#### Frontend
Перейдите в папку react-front и установите зависимости, выполнив следующие команды:
```bash
cd react-front
npm install
```

### 3. Запуск приложения
#### Backend
Чтобы создать и запустить backend, выполните следующую команду в папке `drf_back`:
```bash
python manage.py runserver
```
#### Frontend
Чтобы создать и запустить интерфейс React.js, выполните следующую команду в папке `react-front`:
```bash
npm start
```
Дождитесь завершения команды. После запуска внешнего приложения вы должны увидеть выходные данные, указывающие на то, что сервер разработки запущен.
### 4. Доступ к приложению
Откройте веб-браузер и перейдите по адресу http://localhost:3000. Вы должны увидеть интерфейс приложения. Интерфейс будет взаимодействовать с серверным API, работающим по адресу https://localhost:8000.

### 5. База данных
Приложение использует [SQLite](https://www.sqlite.org/) в качестве базы данных. Файл базы данных - `db.sqlite3`.
#### Схема базы банных:
![db](https://github.com/zoDLer1/classroom/assets/88045849/45f54a83-d5f3-4ef4-aa03-d0359c544986)
