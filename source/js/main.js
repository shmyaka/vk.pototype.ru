import '@babel/polyfill';
import onFormSubmit, {startInput, stopInput} from './_get-items';
import FormatDate from './_set_date';

const form = document.querySelector(`.add-form`);

window.addEventListener(`load`, () => {
  if (form) {
    form.addEventListener(`submit`, onFormSubmit);
  }

  if (startInput && stopInput) {
    const formatDateInstance = new FormatDate();

    startInput.value = formatDateInstance.getСurrentMonday;
    stopInput.value = formatDateInstance.getLastMonday;

    startInput.addEventListener(`input`, formatDateInstance.leadToMonday);
    stopInput.addEventListener(`input`, formatDateInstance.leadToMonday);
  }
});

