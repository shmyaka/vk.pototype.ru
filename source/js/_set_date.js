const dayIndents = [-6, 0, -1, -2, -3, -4, -5];
const months = [`01`, `02`, `03`, `04`, `05`, `06`, `07`, `08`, `09`, `10`, `11`, `12`];

export default class FormatDate {
  get getСurrentMonday() {
    const nowDate = new Date();
    const lastMondayDate = new Date(nowDate.setUTCDate(nowDate.getUTCDate() + dayIndents[nowDate.getUTCDay()]));
    const year = lastMondayDate.getUTCFullYear();
    const month = months[lastMondayDate.getUTCMonth()];
    const day = lastMondayDate.getUTCDate();

    return `${year}-${month}-${day}`;
  }

  get getLastMonday() {
    const nowDate = new Date();
    const lastMondayDate = new Date(nowDate.setUTCDate(nowDate.getUTCDate() + dayIndents[nowDate.getUTCDay()] - 7));
    const year = lastMondayDate.getUTCFullYear();
    const month = months[lastMondayDate.getUTCMonth()];
    const day = lastMondayDate.getUTCDate();

    return `${year}-${month}-${day}`;
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
