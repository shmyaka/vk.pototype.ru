const LOCK_INTERVAL = 500;

export default class Search {
  constructor(input, getItemsInstance, statList) {
    this._input = input || null;
    this._getItemsInstance = getItemsInstance;
    this._statList = statList || null;
    this._timerId = null;

    this._onInputChange = this._onInputChange.bind(this);
    this._lock = this._lock.bind(this);
  }

  _lock() {
    if (this._timerId) {
      clearTimeout(this._timerId);
    }

    this._timerId = setTimeout(() => {
      this._getItemsInstance.getPortionData();
    }, LOCK_INTERVAL);
  }

  /**
   * Обработчик события ввода информации в поле поиска
   * Ищет в БД совпадения по именам группы и отображает найденные данные на странице
   *
   * @param {Event} e
   */
  _onInputChange(e) {
    e.preventDefault();

    let text = this._input ? this._input.value.trim() : null;
    this._statList.dataset.currentCount = 0;

    if (!text) {
      this._input.dataset.value = '';
      this._getItemsInstance.getPortionData();
      return;
      // тут отправить запрос на то, чтобы было всё, как при обычной загрузке
    }

    text = text.split(` `);
    text = text.map((item) => `*${item.toLowerCase().trim()}*`);
    text = text.join(` `);

    this._input.dataset.value = text;

    this. _lock();
  }

  init() {
    this._input.addEventListener(`input`, this._onInputChange);
  }
}
