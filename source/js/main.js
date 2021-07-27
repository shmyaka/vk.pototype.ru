import '@babel/polyfill';

const data = new FormData();
data.append('rangeMax', 500);

const self = window.location.href;
const url = self + '/post.php';

fetch(url, {
  method: `POST`,
  body: data
}).then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
});
