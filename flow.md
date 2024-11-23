# flow

git add -A
git commit -m "msg"
git push

## 1.install

### 1.1. react + react-router from React Router v6 Tutorial:
https://reactrouter.com/6.28.0/start/tutorial

```bath
cd d:/R
npm create vite@latest p1.react.json.server -- --template react
--React
--Javascript

cd p1.react.json.server

npm install react-router-dom

npm run dev
```

### 1.2. otcher

https://www.npmjs.com/package/stylelint
A mighty CSS linter that helps you avoid errors and enforce conventions.

1. Use npm and our init tool to install Stylelint and the config:
```
npm init stylelint
```
2. Run Stylelint on all the CSS files in your project:
```
npx stylelint "**/*.css"
```

### 1.3. materializecss.com
https://materializecss.com/getting-started.html

npm install materialize-css@next

but use CDN yet
<!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

### 1.4. json server
https://www.youtube.com/watch?v=odwOkxkmVH8&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

https://www.npmjs.com/package/json-server

```
npm install json-server
```

Create a db.json or db.json5 file
```json
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```
```json5
{
  posts: [
    { id: '1', title: 'a title', views: 100 },
    { id: '2', title: 'another title', views: 200 },
  ],
  comments: [
    { id: '1', text: 'a comment about post 1', postId: '1' },
    { id: '2', text: 'another comment about post 1', postId: '1' },
  ],
  profile: {
    name: 'typicode',
  },
}
```
```
db.json
Стандарт JSON: Использует строгий синтаксис JSON (JavaScript Object Notation).
Особенности:
Только двойные кавычки ("key": "value").
Комментарии не поддерживаются.
Все числа, строки, массивы и объекты должны строго соответствовать стандарту JSON.
Не допускает запятые после последнего элемента в объектах или массивах.

db.json5
JSON5: Расширение JSON с более гибким синтаксисом.
Особенности:
Поддерживает одинарные кавычки ('key': 'value') наряду с двойными.
Допускает комментарии (// и /* */), что удобно для документирования.
Разрешает пропуск кавычек вокруг ключей (если это допустимое имя переменной).
Позволяет запятые после последнего элемента.
Обрабатывает более сложные структуры данных.
```

[JSON5](https://github.com/json5/json5)
```
JSON5 – JSON for Humans
Build Status Coverage Status

JSON5 is an extension to the popular JSON file format that aims to be easier to write and maintain by hand (e.g. for config files). It is not intended to be used for machine-to-machine communication. (Keep using JSON or other file formats for that. 🙂)

```
```
  "scripts": {

    "json-server": "json-server --watch server/db.json --port 3001"
  },
```

### 1.4. install concurrently

npm i -D concurrently

```json
  "scripts": {
    "start": "concurrently \"npm run json-server\" \"npm run dev\""
  },
```

--------------
npm start

![](_md_img/flow_images/flow%202024-11-23-12-23-04.png)
![](_md_img/flow_images/flow%202024-11-23-12-23-33.png)
