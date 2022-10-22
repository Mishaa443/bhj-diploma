/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const body =document.querySelector('body');

    document.querySelector('.sidebar-toggle').onclick = e =>{
      e.preventDefault();
      ['sidebar-open', 'sidebar-coolapse'].forEach(cls =>{
        body.classList.toggle(cls)
      });
    }
}

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    document.querySelector('.menu-item_logout').onclick = e => {
      e.preventDefault();
      User.logout((err, resp) => {
        if (resp && resp.success) {
          App.setState('init');
        }
      });
    }
    ['login', 'register'].forEach(action => {
      document.querySelector(`.menu-item_${action}`).onclick = e => {
        e.preventDefault();
        App.getModal(action).open();
     }
    });
  }
}