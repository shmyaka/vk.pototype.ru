const dayIndents = [-6, 0, -1, -2, -3, -4, -5];
const months = [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`];

export default class FormatDate {
  get getСurrentMonday() {
    const nowDate = new Date(2016, 10, 7);
    const lastMondayDate = new Date(nowDate.setUTCDate(nowDate.getUTCDate() + dayIndents[nowDate.getUTCDay()]));
    const year = lastMondayDate.getUTCFullYear();
    const month = months[lastMondayDate.getUTCMonth()];
    const day = lastMondayDate.getUTCDate();

    return `${year}-${month}-${String(day).padStart(2, '0')}`;
  }

  get getLastMonday() {
    const nowDate = new Date(2017, 10, 7);
    const lastMondayDate = new Date(nowDate.setUTCDate(nowDate.getUTCDate() + dayIndents[nowDate.getUTCDay()] - 7));
    const year = lastMondayDate.getUTCFullYear();
    const month = months[lastMondayDate.getUTCMonth()];
    const day = lastMondayDate.getUTCDate();

    return `${year}-${month}-${String(day).padStart(2, '0')}`;
  }

  /**
   *
   * @param {Event} e
   */
  leadToMonday(e) {
    e.preventDefault();

    const date = e.target.value;
    const [_year, _month, _day] = date.split(`-`);

    const nowDate = new Date(_year, _month - 1, _day);
    const lastMondayDate = new Date(nowDate.setDate(nowDate.getDate() + dayIndents[nowDate.getDay()]));
    const year = lastMondayDate.getFullYear();
    const month = months[lastMondayDate.getMonth()];
    const day = lastMondayDate.getDate();

    e.target.value = `${year}-${month}-${String(day).padStart(2, '0')}`;
  }
}

// const getNowDate = () => {
//   const nowDate = new Date();
//   const lastMondayDate = new Date(nowDate.setUTCDate(nowDate.getUTCDate() + dayIndents[nowDate.getUTCDay()]));
//   const year = lastMondayDate.getUTCFullYear();
//   const month = months[lastMondayDate.getUTCMonth()];
//   const day = lastMondayDate.getUTCDate();

//   stopInput.value = `${year}-${month}-${day}`;

//   // const options = {
//   //   year: 'numeric',
//   //   month: 'numeric',
//   //   day: 'numeric',
//   //   timezone: 'UTC'
//   // };
//   // console.log(nowDate.toLocaleString(`en-US`, options));
// };

// getNowDate();
