import '@babel/polyfill';
import onButtonClick from './_get-items';
import FormatDate from './_set_date';

const button = document.querySelector(`.form_submit`);
const startInput = document.getElementById(`start_period`);
const stopInput = document.getElementById(`stop_period`);

window.addEventListener(`load`, () => {
  if (button) {
    button.addEventListener(`click`, onButtonClick);
  }

  if (startInput && stopInput) {
    const formatDateInstance = new FormatDate();

    console.log(formatDateInstance.getСurrentMonday);

    stopInput.value = formatDateInstance.getСurrentMonday;
    startInput.value = formatDateInstance.getLastMonday;
  }
});

