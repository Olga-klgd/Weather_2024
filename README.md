# Проект - Приложение "Прогноз погоды"
## Постановка задачи
При запуске приложения по IP адресу определяется геолокация пользователя и отображается погода для этого города.

В поле поиска вводится название города, отображается погода в данном городе и фрагмент карты для этого города.

Сохраняются 10 уникальных названий из поиска на стороне пользователя. Список кликабельный и при нажатии выводится погода в выбранном городе.

## Детальное описание

При запуске приложения по IP адресу пользователя с помощью сервиса [GeoJS IP Geolocation lookup API](https://www.geojs.io/docs/v1/endpoints/geo/) определяется город.

Для получения погоды по найденному городу используется сервис [WeatherAPI](https://api.weatherapi.com/v1/current.json?key=ff67773d96384e45a29113456242210&q=Калининград).

На странице отрисовывается погода и фрагмент карты для найденного города. Для отображения фрагмента карты используется сервис [Yandex Static API](https://yandex.ru/dev/staticapi/doc/ru/])

Введенное название сохраняется в LocalStorage. Сохраняются только уникальные названия. При сохранении 11-го названия, первое из списка удаляется.

Список введенных поисков выгружается из LocalStorage и отображается внизу страницы.

При нажатии на элемент списка, отображается погода в выбранном городе и фрагмент карты для этого города. 

Если введено некорректное название, то выводится сообщение о некорректном вводе.
__________________________________________________________________________________

Проект опубликован по адресу: https://olga-klgd.github.io/Weather_2024/

Сборка проекта осуществляется с помощью Webpack.

## Структура проекта:
> src
  >>index.html
   
  >>js
 
     index.js
     
     weatherUI.js
     
     getLocationByIP.js
     
     findWeather.js 

     showWeather.js
     
     renderConteinerbyCity.js

     saveToLocalStorage.js

     loadFromLocalStorage.js

     
     
 
  

 
 


 