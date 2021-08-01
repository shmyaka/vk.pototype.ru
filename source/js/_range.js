export default class Range {
  constructor(inputMin, inputMax, rangeLine, maxMembers) {
    this._inputMin = inputMin;
    this._inputMax = inputMax;
    this._rangeLine = rangeLine;
    this._maxMembers = maxMembers;
    this._MIN = 1;
    this._MAX = maxMembers;

    this._onInputMinChange = this._onInputMinChange.bind(this);
    this._onInputMaxChange = this._onInputMaxChange.bind(this);
  }

  _rebuildRangeLine() {
    const left = this._MIN / this._maxMembers * 100;
    const right = 100 - this._MAX / this._maxMembers * 100;

    this._rangeLine.style.left = `${left}%`;
    this._rangeLine.style.right = `${right}%`;
  }

  /**
   *
   * @param {Event} e
   */
  _onInputMinChange(e) {
    this._rebuildRangeLine();

    if (parseInt(e.target.value) >= this._MAX) {
      e.target.value = this._MAX;
      e.preventDefault();
    }

    this._MIN = parseInt(e.target.value);
  }

  /**
   *
   * @param {Event} e
   */
  _onInputMaxChange(e) {
    this._rebuildRangeLine();
    if (parseInt(e.target.value) <= this._MIN) {
      e.target.value = this._MIN;
      e.preventDefault();
    }
    this._MAX = parseInt(e.target.value);
  }

  init() {
    this._inputMin.addEventListener(`input`, this._onInputMinChange);
    this._inputMax.addEventListener(`input`, this._onInputMaxChange);
  }
}
