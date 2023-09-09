import showBody from './modules/show-body';
import todoListShow from './modules/todo';
import { variables } from './modules/variables';
import { langArr } from './modules/lang';

let lang = 'ru';

/**
 * Отвечает за смену языка приложения
 *
 */
function changeLanguageHandler() {
  const { btnLang, deskTaskInput } = variables;
  if (!btnLang.classList.contains('lang-btn--active')) {
    btnLang.classList.add('lang-btn--active');
    lang = 'en';
  } else {
    btnLang.classList.remove('lang-btn--active');
    lang = 'ru';
  }

  for (let key in langArr) {
    let elems = document.querySelectorAll(`.lng-${key}`);
    elems.forEach((elem) => {
      if (elem) {
        elem.innerHTML = langArr[key][lang];
      }
    });
  }

  deskTaskInput.placeholder =
    lang === 'en' ? 'Enter task text' : 'Введите текст задачи';
}

changeLanguageHandler();
setTimeout(showBody, 0);
todoListShow(lang);

variables.btnLang.addEventListener('click', changeLanguageHandler);
