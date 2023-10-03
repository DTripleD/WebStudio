import { worksData } from "../../data/works";
import css from "./Works.module.scss";

const Works = () => {
  return (
    <section className={`${css.section} ${css.no_padding_top}`}>
      <div className={`${css.container} ${css.work}`}>
        <h2 className={css.work__title}>Чим ми займаємося</h2>
        <ul className={`${css.list} ${css.work__list}`}>
          {worksData.map((work) => (
            <li className={css.work__item}>
              <img
                srcSet={`${work.image_l_1x} 1x, ${work.image_l_2x} 2x`}
                src={work.image_l_1x}
                alt={work.title}
                width="370"
                loading="lazy"
              />
              <h2 className={css.work__dscr}>{work.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Works;
