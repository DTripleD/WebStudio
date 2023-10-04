import css from "./Benefits.module.scss";
import icons from "../../images/icons.svg";

const Benefits = () => {
  return (
    <section className={`${css.benefits} ${css.section}`}>
      <div className={css.container}>
        <h2 className={css.visually_hidden}>benefits</h2>
        <ul className={`${css.list} ${css.benefits__list}`}>
          <li className={css.benefits__item}>
            <div className={css.benefits__icon}>
              <svg width="70" height="70">
                <use href={icons + "#icon-antenna"}></use>
              </svg>
            </div>
            <h3 className={css.benefits__title}>Увага до деталей</h3>
            <p className={css.benefits__dscr}>
              Ідейні міркування, і навіть початок повсякденної роботи з
              формування позиції.
            </p>
          </li>
          <li className={css.benefits__item}>
            <div className={css.benefits__icon}>
              <svg width="70" height="70">
                <use href={icons + "#icon-clock"}></use>
              </svg>
            </div>
            <h3 className={css.benefits__title}>Пунктуальність</h3>
            <p className={css.benefits__dscr}>
              Завдання організації, особливо рамки і місце навчання кадрів тягне
              у себе.
            </p>
          </li>
          <li className={css.benefits__item}>
            <div className={css.benefits__icon}>
              <svg width="70" height="70">
                <use href={icons + "#icon-diagram"}></use>
              </svg>
            </div>
            <h3 className={css.benefits__title}>Планування</h3>
            <p className={css.benefits__dscr}>
              Так само консультація з широким активом значною мірою зумовлює.
            </p>
          </li>
          <li className={css.benefits__item}>
            <div className={css.benefits__icon}>
              <svg width="70" height="70">
                <use href={icons + "#icon-astronaut"}></use>
              </svg>
            </div>
            <h3 className={css.benefits__title}>Сучасні технології</h3>
            <p className={css.benefits__dscr}>
              Значимість цих проблем настільки очевидна, що реалізація планових
              завдань.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
