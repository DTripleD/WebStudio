import css from "./PortfolioFilter.module.scss";

const PortfolioFilter = () => {
  return (
    <ul className={`${css.list} ${css.portfolio__nav}`}>
      <li>
        <button type="button" className={css.portfolio__btn}>
          Усі
        </button>
      </li>
      <li>
        <button type="button" className={css.portfolio__btn}>
          Веб-сайти
        </button>
      </li>
      <li>
        <button type="button" className={css.portfolio__btn}>
          Додатки
        </button>
      </li>
      <li>
        <button type="button" className={css.portfolio__btn}>
          Дизайн
        </button>
      </li>
      <li>
        <button type="button" className={css.portfolio__btn}>
          Маркетинг
        </button>
      </li>
    </ul>
  );
};

export default PortfolioFilter;
