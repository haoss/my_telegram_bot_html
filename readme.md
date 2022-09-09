# Сборщик gulp под ubuntu

1. устанавливаем **node**
1. в папке с проектом запускаем **npm install**
1. **npm run html** - компиляция файлов pug из папки **_gulp/_pug**
1. **npm run css** - компиляция файла main.scss из папки **_gulp/_scss** в папку **dist/css**
1. **npm run watch** - запуск gulp watch - автоматическое отслеживание изменений файлов pug, scss

> PS **npm run gulp** - запуск локального сервера, с автоматической компиляцией pug, scss и автоматической перезагрузкой браузера 

*Документация*

1. scss - https://sass-scss.ru/documentation/
1. pug - https://pugjs.org/api/getting-started.html
1. конвертер css to scss - http://css2sass.herokuapp.com/
1. конвертер html to pug - https://html2jade.org/