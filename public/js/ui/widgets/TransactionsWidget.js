/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
			throw new Error("Элемент не передан в TransactionsWidget");
		}
    this.element = element
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
  
    ['.create-income-button', '.create-expense-button'].forEach(action => {
      this.element.querySelector(`${action}`).onclick = e => {
        e.preventDefault();
        if(action === '.create-income-button' ){
          App.getModal('newIncome').open();
        }
        else{
          App.getModal('newExpense').open();
        }
      };
    })
  }
}
