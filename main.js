(()=>{"use strict";async function e(e){const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=ff67773d96384e45a29113456242210&q=${e}`),n=await t.json();return`\n        <div class>\n        <h2>${n.location.name}, ${n.location.country}</h2>\n        <p>Температура: ${n.current.temp_c}°C</p>\n        <p>${n.current.condition.text}, ветер: ${n.current.wind_mph} м/c </p>\n        <img src="https://___static-maps.yandex.ru/v1?ll=${n.location.lon},${n.location.lat}&size=300,300&spn=0.026457,0.0619&apikey=25b219d8-43b5-4d03-94c4-6dff815d896a">\n        </div>`}function t(e){const t=localStorage.getItem(e);return t?JSON.parse(t):[]}e("Калининград"),async function(n){const a=await async function(){const e=await fetch("https://get.geojs.io/v1/ip/geo.json"),t=(await e.json()).city;return console.log(t),t}(),c=document.createElement("resultWeather");c.innerHTML=`<h2>Прогноз погоды ${a}</h2>`,n.append(c);let o=await e(a);const r=document.createElement("resultWeatherCheck");r.innerHTML=`Погода в ${o}`,n.append(r);const i=document.createElement("input");i.placeholder="Введите город",n.append(i);const s=document.createElement("button");s.innerHTML="Посмотрим на погоду",n.append(s);const l=document.createElement("historyContainter"),d=t("keyWeather");l.innerHTML="",d.forEach((t=>{const n=document.createElement("div");n.innerHTML=t,n.addEventListener("click",(()=>e(t))),l.appendChild(n)})),n.append(l),t(),s.addEventListener("click",(async t=>{t.preventDefault();const n=i.value.trim();n&&(o=await e(n),r.innerHTML=`${o}`,i.value="",function(e){const t=JSON.parse(localStorage.getItem("keyWeather"))||[];t.includes(e)||(t.push(e),t.length>10&&t.shift(),localStorage.setItem("keyWeather",JSON.stringify(t)))}(n))}))}(function(){const e=document.createElement("div");return e.id="weatherUI",document.body.append(e),e}())})();