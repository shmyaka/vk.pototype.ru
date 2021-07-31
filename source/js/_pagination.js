export default class Pagination {
  constructor(list, getItemsInstance) {
    this._list = list;
    this._getItemsInstance = getItemsInstance;

    this._onPaginationLinkClik = this._onPaginationLinkClik.bind(this);
  }

  /**
   *
   * @param {Event} e
   */
  _onPaginationLinkClik(e) {
    e.preventDefault();

    const target = e.target.closest(`.pagination__link`);

    if (!target) {
      return;
    }

    const currentCount = target.dataset.count || 1;

    this._getItemsInstance.getPortionData(currentCount);
  }

  init() {
    this._list.addEventListener(`click`, this._onPaginationLinkClik);
  }
}
