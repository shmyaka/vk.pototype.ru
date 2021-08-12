const INDENT = 150;

export const startInput = document.getElementById(`start_period`);
export const stopInput = document.getElementById(`stop_period`);

const area = document.querySelector(`.form__area`);

export default class GetItems {
  constructor(pagination, statList, searchInput, filterForm, totalValue, categoriesList) {
    this._list = statList || null;
    this._paginationList = pagination || null;
    this._searchInput = searchInput || null;
    this._filterForm = filterForm || null;
    this._totalValue = totalValue || null;
    this._categoriesList = categoriesList || null;
    this._lock = false;
    this._pendingData = null;
    this._isinProgress = true;
    this._max = 0;

    this.getPortionData = this.getPortionData.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
  }


  /**
   * Определяет полон ли уже список, либо можно ещё догрузить порцию данных
   */
  get _isFull() {
    return Number(this._list.dataset.currentCount) >= this._max;
  }


  /**
   * Определяет доскроллили список до конца, или нет
   */
  get _isInViewport() {
    const rect = this._list.getBoundingClientRect();

    return (rect.bottom - document.documentElement.clientHeight) <= INDENT;
  }


  /**
   * Отправляет данные на сервер
   * И отрисовывает их на странице
   *
   * @param {FormData} data
   * @param {Number} currentCount
   */
  _sendAndDraw(data, currentCount, isAdd) {
    this._lock = true;
    this._pendingData = null;
    this._isinProgress = true;

    const self = window.location.href;
    const url = self + '/post.php';

    fetch(url, {
      method: `POST`,
      body: data
    }).then((responce) => {
      return responce.json();
    }).then((data) => {
      if (this._list) {
        this._max = data.max || 0;

        if (isAdd) {
          this._list.innerHTML += data.list;
        } else {
          this._list.innerHTML = data.list;
        }

        this._list.dataset.currentCount = currentCount === `start` ? 1 : currentCount === `end` ? this._max : currentCount;
      }

      if (this._totalValue) {
        this._totalValue.textContent = data.total;
      }

      if (this._paginationList) {
        this._paginationList.innerHTML = data.pagination;
      }

      this._lock = false;

      if (this._pendingData) {
        this._sendAndDraw(this._pendingData.data, this._pendingData.currentCount, this._pendingData.isAdd);
      }

      this._isinProgress = false;
    });
  }

  /**
   * Получаем порцию данных о статистике групп (25 штук)
   * И отображаем эти данные на странице
   *
   * @param {Number} currentCount
   */
  getPortionData(currentCount = null, isAdd = false) {
    if (!isAdd) {
      window.scrollTo(0, 0);
    }

    if (!currentCount) {
      currentCount = Number(this._list.dataset.currentCount) + 1;
    }

    const data = new FormData(this._filterForm);
    const category = this._categoriesList.querySelector(`.filter__categories-link--active`).dataset.value;

    // потом нужно добавить подтягивание самой свежей даты
    data.append('currentCount', currentCount);
    data.append('start_date', data.get(`period`) === `week` ? '2021-07-12' : '2021-06-21');
    data.append('stop_date', '2021-07-19');
    data.append('category', category);

    if (this._searchInput.dataset.value) {
      data.append('search', this._searchInput.dataset.value);
    }

    if (this._lock) {
      this._pendingData = {
        data: data,
        currentCount: currentCount,
        isAdd: isAdd
      };
    } else {
      this._sendAndDraw(data, currentCount, isAdd);
    }
  }


  /**
   * Обработчик события скролл на windows
   * Если доскроллили до конца списка и ещё можно в список добавить элементов
   * То дорисовываем ещё пачку
   */
   onWindowScroll() {
    if (this._list && this._isInViewport && !this._isinProgress && !this._isFull) {
      this.getPortionData(null, true);
    }
  }
}

