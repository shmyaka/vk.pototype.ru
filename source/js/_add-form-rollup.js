const CLOSE_TEXT = `Парсить`;
const OPEN_TEXT = `Передумать парсить`;
const CLOSE_CLASS_NAME = `add-form-container--close`;

export default class AddFormRollup {
  /**
   *
   * @param {HTMLElement} container
   * @param {HTMLElement} btn
   */
  constructor(container, btn) {
    this._container = container;
    this._button = btn;

    this._onButtonClick = this._onButtonClick.bind(this);
  }

  get _isClose() {
    return this._container.classList.contains(CLOSE_CLASS_NAME);
  }

  /**
   *
   * @param {Event} e
   */
  _onButtonClick(e) {
    e.preventDefault();

    if (this._isClose) {
      this._container.classList.remove(CLOSE_CLASS_NAME);
      this._button.textContent = OPEN_TEXT;
    } else {
      this._container.classList.add(CLOSE_CLASS_NAME);
      this._button.textContent = CLOSE_TEXT;
    }
  }

  init() {
    this._button.addEventListener(`click`, this._onButtonClick);
  }
}
