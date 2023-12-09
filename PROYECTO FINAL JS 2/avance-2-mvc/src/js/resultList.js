import icons from '../img/icons.svg'

export const resultMarkup = (results) => results.map((item) => `
    <li class="preview">
        <a class="preview__link preview__link--active" href="#${item.id}">
            <figure class="preview__fig">
            <img src="${item.image_url}" alt="Test" />
            </figure>
            <div class="preview__data">
            <h4 class="preview__title">${item.title}</h4>
            <p class="preview__publisher">${item.publisher}</p>
            <div class="preview__user-generated">
                <svg>
                <use href="${icons}/icons.svg#icon-user"></use>
                </svg>
            </div>
            </div>
        </a>
    </li>`).join('')
