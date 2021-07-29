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

export default onFormSubmit;
