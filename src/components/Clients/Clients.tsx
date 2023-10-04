import css from "./Clients.module.scss";
import icons from "../../images/icons.svg";

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
              aria-label="Company1"
            >
              <svg width="106" height="60">
                <use href={icons + "#icon-Logo1"}></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company2"
            >
              <svg width="106" height="60">
                <use href={icons + "#icon-Logo2"}></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company3"
            >
              <svg width="106" height="60">
                <use href={icons + "#icon-Logo3"}></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company4"
            >
              <svg width="106" height="60">
                <use href={icons + "#icon-Logo4"}></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company5"
            >
              <svg width="106" height="60">
                <use href={icons + "#icon-Logo5"}></use>
              </svg>
            </a>
          </li>
          <li className={css.clients__item}>
            <a
              href=""
              className={`${css.link} ${css.clients__link}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Company6"
            >
              <svg width="106" height="60">
                <use href={icons + "#icon-Logo6"}></use>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Clients;
