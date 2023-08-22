import showBody from './modules/show-body';
import changeLang from './modules/change-lang';
import todoListShow from './modules/todo';

setTimeout(showBody, 0);
changeLang('page-main');
todoListShow();


console.log(window.location.hash);
