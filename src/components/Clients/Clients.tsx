import css from "./Clients.module.scss";

const Clients = () => {
  return (
    <section className={`${css.section} ${css.section_clients}`}>
      <div className={`${css.container} ${css.clients}`}>
        <h2 className={css.clients__title}>Постійні клієнти</h2>
        <ul className={`${css.list} ${css.clients__list}`}>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg className="" width="106" height="60">
                <use href="./images/icons.svg#icon-Logo1"></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg className="" width="106" height="60">
                <use href="./images/icons.svg#icon-Logo2"></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg className="" width="106" height="60">
                <use href="./images/icons.svg#icon-Logo3"></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg className="" width="106" height="60">
                <use href="./images/icons.svg#icon-Logo4"></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg className="" width="106" height="60">
                <use href="./images/icons.svg#icon-Logo5"></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <svg className="" width="106" height="60">
                <use href="./images/icons.svg#icon-Logo6"></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
