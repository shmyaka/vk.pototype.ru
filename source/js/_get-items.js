export const startInput = document.getElementById(`start_period`);
export const stopInput = document.getElementById(`stop_period`);

const area = document.querySelector(`.form__area`);

/**
 * Обработчик события отправления формы
 *
 * @param {Event} e
 */
export const onFormSubmit = (e) => {
  e.preventDefault();

  if (!statList) {
    return;
  }

  const self = window.location.href;
  const url = self + '/post.php';
  const data = new FormData();
  let groupIds = area.value.trim().split(`,`);

  groupIds = groupIds.map((item) => {
    return item.trim();
  });

  for (const x of groupIds) {
    data.append('id[]', x);
  }
  data.append('start_date', startInput.value);
  data.append('stop_date', stopInput.value);

  fetch(url, {
    method: `POST`,
    body: data
  }).then((responce) => {
    return responce.text();
  }).then((data) => {
    statList.innerHTML = data;
  });
};

export default class GetItems {
  constructor(pagination, statList, searchInput) {
    this._list = statList || null;
    this._paginationList = pagination || null;
    this._searchInput = searchInput || null;
    this._lock = false;
    this._pendingData = null;
  }

  _sendAndDraw(data, currentCount) {
    this._lock = true;
    this._pendingData = null;

    const self = window.location.href;
    const url = self + '/post.php';

    fetch(url, {
      method: `POST`,
      body: data
    }).then((responce) => {
      return responce.json();
    }).then((data) => {
      if (this._list) {
        this._list.innerHTML = data.list;
        this._list.dataset.currentCount = currentCount;
      }

      if (this._paginationList) {
        this._paginationList.innerHTML = data.pagination;
      }

      this._lock = false;

      if (this._pendingData) {
        this._sendAndDraw(this._pendingData.data, this._pendingData.currentCount);
      }
    });
  }

  /**
   * Получаем порцию данных о статистике групп (25 штук)
   * И отображаем эти данные на странице
   *
   * @param {Number} currentCount
   */
  getPortionData(currentCount = null) {
    if (!currentCount) {
      currentCount = Number(this._list.dataset.currentCount) + 1;
    }

    const data = new FormData();

    // потом нужно добавить подтягивание самой свежей даты
    data.append('currentCount', currentCount);
    data.append('start_date', '2021-06-14');
    data.append('stop_date', '2021-06-21');

    if (this._searchInput.dataset.value) {
      data.append('search', this._searchInput.dataset.value);
    }

    if (this._lock) {
      this._pendingData = {
        data: data,
        currentCount: currentCount
      };
    } else {
      this._sendAndDraw(data, currentCount);
    }
  }
}

