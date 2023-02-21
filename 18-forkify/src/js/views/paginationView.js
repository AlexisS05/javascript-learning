import icons from 'url:../../img/icons.svg';
import View from './View.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkupButton(curPage = 1) {
    const nextButton = `
      <button class="btn--inline pagination__btn--next">
        <span> Page ${curPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>`;
    const prevButton = `
      <button class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span> Page ${curPage - 1}</span>
      </button>`;
    return [prevButton, nextButton];
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      const [, nextButton] = this._generateMarkupButton(curPage);
      return nextButton;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      const [prevButton] = this._generateMarkupButton(curPage);
      return prevButton;
    }

    // Other page
    if (curPage < numPages) {
      const [prevButton, nextButton] = this._generateMarkupButton(curPage);
      return `${prevButton}, ${nextButton}`;
    }

    // Page 1, and there are NO other pages
    return '';
  }
}

export default new PaginationView();
