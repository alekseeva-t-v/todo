!function(){"use strict";const e={"page-main":{ru:"Список задач",en:"ToDo List"},"about-project":{ru:"О проекте",en:"About the project"},"project-title":{ru:"Список задач",en:"ToDo List"},"project-descr":{ru:"Приложение позволяет добавлять в список новые задачи. Задачи в списке фильтруются: в начало списка помещаются новые задачи, в конец, выполненные. Есть возможность помечать задачи, как выполненные, а также удалять их. Между сессиями задачи сохраняются в local Storage. Адаптивная верстка для экранов 320px и выше",en:"The application allows you to add new tasks to the list. Tasks in the list are filtered: new tasks are placed at the beginning of the list, completed tasks are placed at the end. It is possible to mark tasks as completed, as well as delete them. Between sessions, tasks are stored in local Storage. Responsive layout for screens 320px and higher"},progect:{ru:"Проект",en:"Project"},mini:{ru:"мини",en:"mini"},portfolio:{ru:"Портфолио",en:"Portfolio"},skills:{ru:"Навыки",en:"Skills"},contacts:{ru:"Контакты",en:"Contacts"},todo:{ru:"Список задач",en:"ToDoList"},tasks:{ru:"Задачи на день",en:"Tasks for the day"},copy:{ru:"Алексеева Татьяна",en:"Alekseeva Tatyana"}};setTimeout((function(){document.querySelector("body").classList.add("body_visible")}),0),function(){const e=document.querySelector(".light-mode-btn"),t=document.querySelector(".main");function o(){e.classList.add("light-mode-btn--active"),t.classList.add("light")}function a(){e.classList.remove("light-mode-btn--active"),t.classList.remove("light")}window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches&&o(),"dark"===localStorage.getItem("darkMode")?a():"light"===localStorage.getItem("darkMode")&&o(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"dark"==(e.matches?"dark":"light")?(a(),localStorage.setItem("darkMode","dark")):(o(),localStorage.setItem("darkMode","light"))})),e.addEventListener("click",(()=>{e.classList.toggle("light-mode-btn--active"),t.classList.toggle("light")?localStorage.setItem("darkMode","light"):localStorage.setItem("darkMode","dark")}))}(),function(t){let o="ru";const a=["en","ru"],s=e,n=document.querySelector(".lang-btn"),l=document.querySelector("title");!function(){let e=window.location.hash;e=e.substr(1),a.includes(e)||(location.href=`${window.location.pathname}#ru`,location.reload()),"en"===e?n.classList.add("lang-btn--active"):n.classList.remove("lang-btn--active"),l.innerHTML=s[t][e];for(let t in s)document.querySelectorAll(`.lng-${t}`).forEach((o=>{o&&(o.innerHTML=s[t][e])}))}(),n.addEventListener("click",(function(){n.classList.contains("lang-btn--active")?(n.classList.remove("lang-btn--active"),o="ru"):(n.classList.add("lang-btn--active"),o="en"),location.href=`${window.location.pathname}#${o}`,location.reload()}))}("about-project"),function(){const e=document.querySelectorAll(".about__slide"),t=document.querySelectorAll(".about__dot");let o=0;function a(o){var a,s;a=o,e.forEach((e=>{e.classList.remove("about__slide--active")})),e[a].classList.add("about__slide--active"),s=o,t.forEach((e=>{e.classList.remove("about__dot--active")})),t[s].classList.add("about__dot--active")}t.forEach(((e,t)=>{e.addEventListener("click",(()=>{a(t)}))})),setInterval((function(){o===e.length-1?(o=0,a(o)):(o++,a(o))}),4e3)}(),document.querySelector(".lng-about-project").classList.add("menu__link--active")}();