import { data } from "../../data/team";
import css from "./Team.module.scss";

const Team = () => {
  return (
    <section className={`${css.team} ${css.section}`}>
      <div className={`${css.container} ${css.team__container}`}>
        <h2 className={css.team__title}>Наша команда</h2>
        <ul className={`${css.list} ${css.team__list}`}>
          {data.map((person) => (
            <li className={css.team__item} key={person.id}>
              <picture>
                <source
                  media="(min-width: 1200px)"
                  srcSet={`${person.photo_L1x} 1x, ${person.photo_L1x} 2x`}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${person.photo_M1x} 1x, ${person.photo_M2x} 2x`}
                />
                <source
                  media="(max-width: 460px)"
                  srcSet={`${person.photo_S1x} 1x, ${person.photo_S2x} 2x`}
                />
                <img
                  src={person.photo_S1x}
                  alt={`Фото з ${person.name}`}
                  width="450"
                  loading="lazy"
                />
              </picture>
              <div className={css.team__dscr}>
                <h3 className={css.team__name}>{person.name}</h3>
                <p className={css.team__position}>{person.position}</p>
                <ul className={`${css.list} ${css.soclinks}`}>
                  <li className={css.soclinks__item}>
                    <a
                      href=""
                      className={`${css.soclinks__link} ${css.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg className="" width="20" height="20">
                        <use href="./images/icons.svg#icon-instagram"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={css.soclinks__item}>
                    <a
                      href=""
                      className={`${css.soclinks__link} ${css.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg className="" width="20" height="20">
                        <use href="./images/icons.svg#icon-twitter"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={css.soclinks__item}>
                    <a
                      href=""
                      className={`${css.soclinks__link} ${css.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg className="" width="20" height="20">
                        <use href="./images/icons.svg#icon-facebook"></use>
                      </svg>
                    </a>
                  </li>
                  <li className={css.soclinks__item}>
                    <a
                      href=""
                      className={`${css.soclinks__link} ${css.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="instagram"
                    >
                      <svg className="" width="20" height="20">
                        <use href="./images/icons.svg#icon-linkedin"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
