export const startInput = document.getElementById(`start_period`);
export const stopInput = document.getElementById(`stop_period`);

const statList = document.querySelector(`.stat-list`);
const area = document.querySelector(`.form__area`);

// const groupIds = [1, 3, 16, 24, 26, 47];

/**
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
  constructor() {
    this._list = statList || null;
  }

  getPortionData(currentCount = null) {
    if (!currentCount) {
      currentCount = Number(this._list.dataset.currentCount) + 1;
    }

    const self = window.location.href;
    const url = self + '/post.php';
    const data = new FormData();

    data.append('currentCount', currentCount);
    data.append('start_date', '2021-06-14');
    data.append('stop_date', '2021-06-21');

    fetch(url, {
      method: `POST`,
      body: data
    }).then((responce) => {
      return responce.text();
    }).then((data) => {
      this._list.innerHTML = data;
      this._list.dataset.currentCount = currentCount;
    });
  }
}

