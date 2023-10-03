import css from "./Portfolio.module.scss";

import PortfolioFilter from "../PortfolioFilter/PortfolioFilter";
import { portfolioData } from "../../data/portfolio";

const Portfolio = () => {
  return (
    <main>
      <section className={css.section}>
        <div className={`${css.container} ${css.portfolio}`}>
          <h1 className={css.visually_hidden}>portfolio</h1>
          <PortfolioFilter />
          <ul className={`${css.portfolio__list} ${css.list}`}>
            {portfolioData.map((data) => (
              <li className={css.portfolio__item} key={data.id}>
                <a href="" className={`${css.link} ${css.portfolio__link}`}>
                  <div className={css.overlay}>
                    <img
                      srcSet={`${data.img_s_1x} 450w, ${data.img_s_2x} 900w, ${data.img_m_1x} 354w, ${data.img_m_2x} 708w, ${data.img_l_1x} 370w, ${data.img_l_2x} 740w`}
                      sizes="
                      (min-width: 1200px) 370px, 
                      (min-width: 768px) 354px, 
                      (min-width: 480px) 450px, 
                      100vw
                    "
                      src={data.img_s_1x}
                      alt={data.title}
                      loading="lazy"
                    />
                    <p className={css.overlay__text}>{data.overlayText}</p>
                  </div>
                  <div className={css.portfolio__border}>
                    <h2 className={css.portfolio__title}>{data.title}</h2>
                    <p className={css.portfolio__dscr}>{data.description}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
