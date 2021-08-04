import '@babel/polyfill';
import GetItems, {startInput, stopInput} from './_get-items';
import FormatDate from './_set_date';
import AddFormRollup from './_add-form-rollup';
import Pagination from './_pagination';
import Search from './_search';
import Range from './_range';

const form = document.querySelector(`.add-form`);
const statList = document.querySelector(`.stat-list`);
const addFormContainer = document.querySelector(`.add-form-container`);
const buttonRollup = document.querySelector(`.add-form-container__button`);
const paginationList = document.querySelector(`.pagination__list`);
const searchInput = document.querySelector(`.search__input`);
const searchForm = document.querySelector(`.search__form`);
const filter = document.querySelector(`.filter`);
const filterForm = document.querySelector(`.filter__form`);
const filterToggleButton = document.querySelector(`.filter__toggle-button`);
const inputMin = document.getElementById(`range_min`);
const inputMax = document.getElementById(`range_max`);
const outputMin = document.getElementById(`output_min`);
const outputMax = document.getElementById(`output_max`);
const rangeLine = document.querySelector(`.filter__range-line`);
const filterResetButton = document.querySelector(`.filter__reset-button`);
const totalValue = document.querySelector(`.filter__total-value`);
// потом посчитать отдельно
const MAX_MEMBERS = 11597820;

window.addEventListener(`load`, () => {
  if (form && searchInput) {
    // form.addEventListener(`submit`, onFormSubmit);
    const getItemsInstance = new GetItems(paginationList, statList, searchInput, filterForm, totalValue);

    getItemsInstance.getPortionData();

    if (paginationList) {
      new Pagination(paginationList, getItemsInstance).init();
    }

    new Search(searchInput, getItemsInstance, statList).init();

    filterForm.addEventListener(`change`, () => {
      getItemsInstance.getPortionData(1);
    });

    window.addEventListener(`scroll`, getItemsInstance.onWindowScroll);
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

    filter.style.height = `${filterForm.offsetHeight}px`;
  }

  if (inputMin && inputMax && rangeLine) {
    new Range(inputMin, inputMax, outputMin, outputMax, rangeLine, MAX_MEMBERS, filterResetButton).init();
  }
});

