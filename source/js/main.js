import '@babel/polyfill';
import GetItems, {onFormSubmit, startInput, stopInput} from './_get-items';
import FormatDate from './_set_date';
import AddFormRollup from './_add-form-rollup';
import Pagination from './_pagination';
import Search from './_search';

const form = document.querySelector(`.add-form`);
const statList = document.querySelector(`.stat-list`);
const addFormContainer = document.querySelector(`.add-form-container`);
const buttonRollup = document.querySelector(`.add-form-container__button`);
const paginationList = document.querySelector(`.pagination__list`);
const searchInput = document.querySelector(`.search__input`);
const searchForm = document.querySelector(`.search__form`);
const filter = document.querySelector(`.filter`);
const filterToggleButton = document.querySelector(`.filter__toggle-button`);

window.addEventListener(`load`, () => {
  if (form && searchInput) {
    // form.addEventListener(`submit`, onFormSubmit);
    const getItemsInstance = new GetItems(paginationList, statList, searchInput);

    getItemsInstance.getPortionData();

    if (paginationList) {
      new Pagination(paginationList, getItemsInstance).init();
    }

    const searchInstance = new Search(searchInput, getItemsInstance, statList).init();
  }

  if (addFormContainer && buttonRollup) {
    new AddFormRollup(addFormContainer, buttonRollup).init();
  }

  if (startInput && stopInput) {
    const formatDateInstance = new FormatDate();

    startInput.value = formatDateInstance.getСurrentMonday;
    stopInput.value = formatDateInstance.getLastMonday;

    startInput.addEventListener(`input`, formatDateInstance.leadToMonday);
    stopInput.addEventListener(`input`, formatDateInstance.leadToMonday);
  }

  if (searchForm) {
    searchForm.addEventListener(`submit`, (e) => {
      e.preventDefault();
    });
  }

  if (filter && filterToggleButton) {
    filterToggleButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      filter.classList.toggle(`filter--open`);
    });
  }
});

