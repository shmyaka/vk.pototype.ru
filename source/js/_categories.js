export default class Categories {
  constructor(categoriesList, getItemsInstance) {
    this._list = categoriesList;
    this._getItemsInstance = getItemsInstance;

    this._onListClick = this._onListClick.bind(this);
  }


  /**
   *
   * @param {Event} e
   */
  _onListClick(e) {
    if (!e.target.closest(`.filter__categories-link`)) {
      return;
    }

    Array.from(this._list.querySelectorAll(`.filter__categories-link`)).forEach((item) => {
      item.closest(`.filter__categories-link`).classList.remove(`filter__categories-link--active`);
    });

    e.target.closest(`.filter__categories-link`).classList.add(`filter__categories-link--active`);

    this._getItemsInstance.getPortionData(1);
  }

  init() {
    this._list.addEventListener(`click`, this._onListClick);
  }
}
