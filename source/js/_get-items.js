const statList = document.querySelector(`.stat-list`);
const area = document.querySelector(`.form__area`);

// const groupIds = [1, 3, 16, 24, 26, 47];

/**
 *
 * @param {Event} e
 */
const onButtonClick = (e) => {
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

  fetch(url, {
    method: `POST`,
    body: data
  }).then((responce) => {
    return responce.text();
  }).then((data) => {
    statList.innerHTML = data;
  });
};

export default onButtonClick;
