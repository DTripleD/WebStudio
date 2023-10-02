import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="hero section">
          <div className="container hero__container">
            <h1 className="hero__title">
              Ефективні рішення для вашого бізнесу
            </h1>
            <button type="button" className="hero__btn" data-modal-open>
              Замовити послугу
            </button>
          </div>
        </section>

        <section className="benefits section">
          <div className="container">
            <h2 className="visually-hidden">benefits</h2>
            <ul className="list benefits__list">
              <li className="benefits__item">
                <div className="benefits__icon">
                  <svg className="" width="70" height="70">
                    <use href="./images/icons.svg#icon-antenna"></use>
                  </svg>
                </div>
                <h3 className="benefits__title">Увага до деталей</h3>
                <p className="benefits__dscr">
                  Ідейні міркування, і навіть початок повсякденної роботи з
                  формування позиції.
                </p>
              </li>
              <li className="benefits__item">
                <div className="benefits__icon">
                  <svg className="" width="70" height="70">
                    <use href="./images/icons.svg#icon-clock"></use>
                  </svg>
                </div>
                <h3 className="benefits__title">Пунктуальність</h3>
                <p className="benefits__dscr">
                  Завдання організації, особливо рамки і місце навчання кадрів
                  тягне у себе.
                </p>
              </li>
              <li className="benefits__item">
                <div className="benefits__icon">
                  <svg className="" width="70" height="70">
                    <use href="./images/icons.svg#icon-diagram"></use>
                  </svg>
                </div>
                <h3 className="benefits__title">Планування</h3>
                <p className="benefits__dscr">
                  Так само консультація з широким активом значною мірою
                  зумовлює.
                </p>
              </li>
              <li className="benefits__item">
                <div className="benefits__icon">
                  <svg className="" width="70" height="70">
                    <use href="./images/icons.svg#icon-astronaut"></use>
                  </svg>
                </div>
                <h3 className="benefits__title">Сучасні технології</h3>
                <p className="benefits__dscr">
                  Значимість цих проблем настільки очевидна, що реалізація
                  планових завдань.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="section no-padding-top">
          <div className="container work">
            <h2 className="work__title">Чим ми займаємося</h2>
            <ul className="list work__list">
              <li className="work__item">
                <img
                  srcSet="
                  ../images/works/img1_l@1x.jpg 1x,
                  ../images/works/img1_l@2x.jpg 2x
                "
                  src="../images/works/img1_l@1x.jpg"
                  alt="hands on keyboard"
                  width="370"
                  loading="lazy"
                />
                <h2 className="work__dscr">Десктопні додатки</h2>
              </li>
              <li className="work__item">
                <img
                  srcSet="
                  ../images/works/img2_l@1x.jpg 1x,
                  ../images/works/img2_l@2x.jpg 2x
                "
                  src="./images/works/img2_l@1x.jpg"
                  alt="phones on laptop"
                  width="370"
                  loading="lazy"
                />
                <h2 className="work__dscr">Мобільні додатки</h2>
              </li>
              <li className="work__item">
                <img
                  srcSet="
                  ../images/works/img3_l@1x.jpg 1x,
                  ../images/works/img3_l@2x.jpg 2x
                "
                  src="../images/works/img3_l@1x.jpg"
                  alt="tablet"
                  width="370"
                  loading="lazy"
                />
                <h2 className="work__dscr">Дизайнерські рішення</h2>
              </li>
            </ul>
          </div>
        </section>

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

        <section className="section section-clients">
          <div className="container clients">
            <h2 className="clients__title">Постійні клієнти</h2>
            <ul className="list clients__list">
              <li className="clients__item">
                <a
                  href=""
                  className="link clients__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg className="" width="106" height="60">
                    <use href="./images/icons.svg#icon-Logo1"></use>
                  </svg>
                </a>
              </li>
              <li className="clients__item">
                <a
                  href=""
                  className="link clients__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg className="" width="106" height="60">
                    <use href="./images/icons.svg#icon-Logo2"></use>
                  </svg>
                </a>
              </li>
              <li className="clients__item">
                <a
                  href=""
                  className="link clients__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg className="" width="106" height="60">
                    <use href="./images/icons.svg#icon-Logo3"></use>
                  </svg>
                </a>
              </li>
              <li className="clients__item">
                <a
                  href=""
                  className="link clients__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg className="" width="106" height="60">
                    <use href="./images/icons.svg#icon-Logo4"></use>
                  </svg>
                </a>
              </li>
              <li className="clients__item">
                <a
                  href=""
                  className="link clients__link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg className="" width="106" height="60">
                    <use href="./images/icons.svg#icon-Logo5"></use>
                  </svg>
                </a>
              </li>
              <li className="clients__item">
                <a
                  href=""
                  className="link clients__link"
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
      </main>

      <footer className="footer">
        <div className="container footer__container">
          <div className="footer__container--flex">
            <div className="footer__adress">
              <a href="./index.html" className="logo link">
                Web<span className="logo-footer">Studio</span>
              </a>
              <address className="footer__info">
                <ul className="list">
                  <li className="footer__item">
                    <a
                      className="adress link"
                      href="https://www.google.com/maps/place/бул.+Леси+Украинки,+26,+Киев,+02000/@50.4265807,30.5361971,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf0e033ecbe9:0x57a4dffefec77da0!8m2!3d50.4265807!4d30.5383858"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      м. Київ, пр-т Лесі Українки, 26
                    </a>
                  </li>
                  <li className="footer__item">
                    <a
                      href="mailto:info@devstudio.com"
                      className="tel-footer link"
                    >
                      info@devstudio.com
                    </a>
                  </li>
                  <li className="footer__item">
                    <a href="tel:+380961111111" className="tel-footer link">
                      +38 096 111 11 11
                    </a>
                  </li>
                </ul>
              </address>
            </div>
            <div className="footer__wrapper">
              <strong className="footer__join">приєднуйтесь</strong>
              <ul className="list footer__list">
                <li className="footer__soclist">
                  <a
                    href=""
                    className="footer__soclinks link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-instagram1"></use>
                    </svg>
                  </a>
                </li>
                <li className="footer__soclist">
                  <a
                    href=""
                    className="footer__soclinks link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-twitter1"></use>
                    </svg>
                  </a>
                </li>
                <li className="footer__soclist">
                  <a
                    href=""
                    className="footer__soclinks link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-facebook1"></use>
                    </svg>
                  </a>
                </li>
                <li className="footer__soclist">
                  <a
                    href=""
                    className="footer__soclinks link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="instagram"
                  >
                    <svg className="" width="20" height="20">
                      <use href="./images/icons.svg#icon-linkedin1"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="subscribe">
            <strong className="subscribe__text">Підпишіться на розсилку</strong>
            <form className="footer__form">
              <label>
                <input
                  name="email-subscribe"
                  type="email"
                  placeholder="E-mail"
                  className="footer__input"
                />
              </label>
              <button type="submit" className="subscribe__btn">
                Підписатися
                <svg width="24" height="24">
                  <use href="./images/icons.svg#icon-send"></use>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </footer>

      <div className="backdrop is-hidden" data-modal>
        <div className="modal">
          <button className="modal__close" data-modal-close>
            <svg width="18" height="18">
              <use href="./images/icons.svg#icon-close"></use>
            </svg>
          </button>

          <p className="modal__article">
            Залиште свої дані, ми вам передзвонимо
          </p>
          <form name="modal-form">
            <div className="modal__group" role="group">
              <label htmlFor="user_name" className="modal__label">
                Ім'я
              </label>
              <div className="modal__wrapper">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="modal__input"
                />
                <svg className="modal__icon" height="18" width="18">
                  <use href="./images/icons.svg#icon-person"></use>
                </svg>
              </div>

              <label htmlFor="user_phone" className="modal__label">
                Телефон
              </label>
              <div className="modal__wrapper">
                <input
                  type="tel"
                  id="user_phone"
                  name="user_phone"
                  className="modal__input"
                />
                <svg className="modal__icon" height="18" width="18">
                  <use href="./images/icons.svg#icon-phone"></use>
                </svg>
              </div>

              <label htmlFor="user_mail" className="modal__label">
                Пошта
              </label>
              <div className="modal__wrapper">
                <input
                  type="email"
                  id="user_mail"
                  name="user_mail"
                  className="modal__input"
                />
                <svg className="modal__icon" height="18" width="18">
                  <use href="./images/icons.svg#icon-email"></use>
                </svg>
              </div>

              <label className="modal__label" htmlFor="user_message">
                Коментар
              </label>
              <textarea
                className="modal__message"
                name="user_message"
                id="user_message"
                placeholder="Введіть текст"
              ></textarea>

              <div className="agreement">
                <label htmlFor="user_agreement" className="agreement__label">
                  <input
                    type="checkbox"
                    id="user_agreement"
                    name="user_agreement"
                    className="agreement__checkbox"
                  />
                  <svg className="agreement__icon" width="16" height="15">
                    <use
                      className="agreement__icon--uncheck"
                      href="./images/icons.svg#icon-uncheck"
                    ></use>
                    <use
                      className="agreement__icon--check"
                      href="./images/icons.svg#icon-check"
                    ></use>
                  </svg>
                  <span>
                    Погоджуюся з розсилкою та приймаю
                    <a href="" className="agreement__link">
                      Умови договору
                    </a>
                  </span>
                </label>
              </div>

              <button type="submit" className="modal__btn">
                Відправити
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="menu-container js-menu-container" id="mobile-menu">
        <button className="menu-toggle js-close-menu">
          <svg width="40" height="40" className="menu__close">
            <use href="./images/icons.svg#icon-close_header"></use>
          </svg>
        </button>

        <ul className="mobile-menu">
          <li>
            <a href="" className="link mobile-pages mobile__pages--current">
              Студія
            </a>
          </li>
          <li>
            <a href="" className="link mobile-pages">
              Портфоліо
            </a>
          </li>
          <li>
            <a href="" className="link mobile-pages">
              Контакти
            </a>
          </li>
        </ul>

        <ul className="list mobile__contacts">
          <li className="mobile-contacts__item">
            <a href="tel:+380961111111" className="link mobile__number">
              +38 096 111 11 11
            </a>
          </li>
          <li className="mobile-contacts__item">
            <a href="mailto:info@devstudio.com" className="link mobile__mail">
              info@devstudio.com
            </a>
          </li>
        </ul>

        <ul className="list mobile-socials">
          <li className="mobile__links--line">
            <a href="" className="link mobile__links">
              Instagram
            </a>
          </li>
          <li className="mobile__links--line">
            <a href="" className="link mobile__links">
              Twitter
            </a>
          </li>
          <li className="mobile__links--line">
            <a href="" className="link mobile__links">
              Facebook
            </a>
          </li>
          <li className="mobile__links--line">
            <a href="" className="link mobile__links">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
