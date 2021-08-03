export default class Range {
  constructor(inputMin, inputMax, outputMin, outputMax, rangeLine, maxMembers, resetButton) {
    this._inputMin = inputMin;
    this._inputMax = inputMax;
    this._outputMin = outputMin;
    this._outputMax = outputMax;
    this._rangeLine = rangeLine;
    this._maxMembers = maxMembers;
    this._resetButton = resetButton;
    this._MIN = 1;
    this._MAX = maxMembers;

    this._onInputMinChange = this._onInputMinChange.bind(this);
    this._onInputMaxChange = this._onInputMaxChange.bind(this);
    this._onOutputMinChange = this._onOutputMinChange.bind(this);
    this._onOutputMaxChange = this._onOutputMaxChange.bind(this);
    this._onResetButtonClick = this._onResetButtonClick.bind(this);
  }

  /**
   * Перестраивает внутреннюю линию на двойном range-ползунке
   * И меняем значения в output-элементах
   */
  _rebuildRangeLine() {
    const left = this._MIN / this._maxMembers * 100;
    const right = 100 - this._MAX / this._maxMembers * 100;

    this._rangeLine.style.left = `${left}%`;
    this._rangeLine.style.right = `${right}%`;

    this._outputMin.value = this._MIN;
    this._outputMax.value = this._MAX;
  }


  /**
   * Обработчик события изменения output-элемента MIN
   */
  _onOutputMinChange() {
    this._inputMin.value = this._outputMin.value;

    const event = new Event(`input`);
    this._inputMin.dispatchEvent(event);
  }


  /**
   * Обработчик события изменения output-элемента MAX
   */
  _onOutputMaxChange() {
    this._inputMax.value = this._outputMax.value;

    const event = new Event(`input`);
    this._inputMax.dispatchEvent(event);
  }


  /**
   * Обработчик события изменения интпута range MIN
   */
  _onInputMinChange() {
    if (parseInt(this._inputMin.value) >= this._MAX) {
      this._inputMin.value = this._MAX;
    }
    this._MIN = parseInt(this._inputMin.value);

    this._rebuildRangeLine();
  }


  /**
   * Обработчик события изменения интпута range MAX
   */
  _onInputMaxChange() {
    if (parseInt(this._inputMax.value) <= this._MIN) {
      this._inputMax.value = this._MIN;
    }
    this._MAX = parseInt(this._inputMax.value);

    this._rebuildRangeLine();
  }

  /**
   *
   * @param {Event} e
   */
  _onResetButtonClick(e) {
    e.preventDefault();

    this._MIN = 1;
    this._MAX = this._maxMembers;

    this._inputMin.value = this._MIN;
    this._inputMax.value = this._MAX;

    this._rebuildRangeLine();

    const event = new Event(`change`);
    this._inputMax.form.dispatchEvent(event);
  }

  init() {
    this._inputMin.addEventListener(`input`, this._onInputMinChange);
    this._inputMax.addEventListener(`input`, this._onInputMaxChange);
    this._outputMin.addEventListener(`change`, this._onOutputMinChange);
    this._outputMax.addEventListener(`change`, this._onOutputMaxChange);
    this._resetButton.addEventListener(`click`, this._onResetButtonClick);
  }
}
