const Team = () => {
  return (
    <section className="team section">
      <div className="container team__container">
        <h2 className="team__title">Наша команда</h2>
        <ul className="list team__list">
          <li className="team__item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="
                    ./images/team/01_l@1x-270.jpg 1x,
                    ./images/team/01_l@2x-540.jpg 2x
                  "
              />
              <source
                media="(min-width: 768px)"
                srcSet="
                    ./images/team/01_m@1x-354.jpg 1x,
                    ./images/team/01_m@2x-708.jpg 2x
                  "
              />
              <source
                media="(max-width: 460px)"
                srcSet="
                    ./images/team/01_s@1x-450.jpg 1x,
                    ./images/team/01_s@2x-900.jpg 2x
                  "
              />
              <img
                src="./images/team/01_s@1x-450.jpg"
                alt="Фото з Ігор Дем'яненко"
                width="450"
                loading="lazy"
              />
            </picture>
            <div className="team__dscr">
              <h3 className="team__name">Ігор Дем'яненко</h3>
              <p className="team__position">Product Designer</p>
              <ul className="list soclinks">
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
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
          <li className="team__item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="
                    ./images/team/02_l@1x-270.jpg 1x,
                    ./images/team/02_l@2x-540.jpg 2x
                  "
              />
              <source
                media="(min-width: 768px)"
                srcSet="
                    ./images/team/02_m@1x-354.jpg 1x,
                    ./images/team/02_m@2x-708.jpg 2x
                  "
              />
              <source
                media="(max-width: 460px)"
                srcSet="
                    ./images/team/02_s@1x-450.jpg 1x,
                    ./images/team/02_s@2x-900.jpg 2x
                  "
              />
              <img
                src="./images/team/02_s@1x-450.jpg"
                alt="Фото з Ольга Рєпіна"
                width="450"
                loading="lazy"
              />
            </picture>
            <div className="team__dscr">
              <h3 className="team__name">Ольга Рєпіна</h3>
              <p className="team__position">Frontend Developer</p>
              <ul className="list soclinks">
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
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

          <li className="team__item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="
                    ./images/team/03_l@1x-270.jpg 1x,
                    ./images/team/03_l@2x-540.jpg 2x
                  "
              />
              <source
                media="(min-width: 768px)"
                srcSet="
                    ./images/team/03_m@1x-354.jpg 1x,
                    ./images/team/03_m@2x-708.jpg 2x
                  "
              />
              <source
                media="(max-width: 460px)"
                srcSet="
                    ./images/team/03_s@1x-450.jpg 1x,
                    ./images/team/03_s@2x-900.jpg 2x
                  "
              />
              <img
                src="./images/team/03_s@1x-450.jpg"
                alt="Фото з Микола Тарасов"
                width="450"
                loading="lazy"
              />
            </picture>
            <div className="team__dscr">
              <h3 className="team__name">Микола Тарасов</h3>
              <p className="team__position">Marketing</p>
              <ul className="list soclinks">
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
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
          <li className="team__item">
            <picture>
              <source
                media="(min-width: 1200px)"
                srcSet="
                    ./images/team/04_l@1x-270.jpg 1x,
                    ./images/team/04_l@2x-540.jpg 2x
                  "
              />
              <source
                media="(min-width: 768px)"
                srcSet="
                    ./images/team/04_m@1x-354.jpg 1x,
                    ./images/team/04_m@2x-708.jpg 2x
                  "
              />
              <source
                media="(max-width: 460px)"
                srcSet="
                    ./images/team/04_s@1x-450.jpg 1x,
                    ./images/team/04_s@2x-900.jpg 2x
                  "
              />
              <img
                src="./images/team/04_s@1x-450.jpg"
                alt="Фото з Михайло Єрмаков"
                width="450"
                loading="lazy"
              />
            </picture>
            <div className="team__dscr">
              <h3 className="team__name">Михайло Єрмаков</h3>
              <p className="team__position">UI Designer</p>
              <ul className="list soclinks">
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li className="soclinks__item">
                  <a
                    href=""
                    className="soclinks__link link"
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
        </ul>
      </div>
    </section>
  );
};

export default Team;
