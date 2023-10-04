import css from "./Footer.module.scss";
import icons from "../../images/icons.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`${css.container} ${css.footer__container}`}>
        <div className={css.footer__container_flex}>
          <div className={css.footer__adress}>
            <a href="./index.html" className={`${css.logo} ${css.link}`}>
              Web<span className={css.logo_footer}>Studio</span>
            </a>
            <address className={css.footer__info}>
              <ul className={css.list}>
                <li className={css.footer__item}>
                  <a
                    className={`${css.adress} ${css.link}`}
                    href="https://www.google.com/maps/place/бул.+Леси+Украинки,+26,+Киев,+02000/@50.4265807,30.5361971,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cf0e033ecbe9:0x57a4dffefec77da0!8m2!3d50.4265807!4d30.5383858"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    м. Київ, пр-т Лесі Українки, 26
                  </a>
                </li>
                <li className={css.footer__item}>
                  <a
                    href="mailto:info@devstudio.com"
                    className={`${css.tel_footer} ${css.link}`}
                  >
                    info@devstudio.com
                  </a>
                </li>
                <li className={css.footer__item}>
                  <a
                    href="tel:+380961111111"
                    className={`${css.tel_footer} ${css.link}`}
                  >
                    +38 096 111 11 11
                  </a>
                </li>
              </ul>
            </address>
          </div>
          <div className={css.footer__wrapper}>
            <strong className={css.footer__join}>приєднуйтесь</strong>
            <ul className={`${css.list} ${css.footer__list}`}>
              <li className={css.footer__soclist}>
                <a
                  href=""
                  className={`${css.footer__soclinks} ${css.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram"
                >
                  <svg width="20" height="20">
                    <use href={icons + "#icon-instagram1"}></use>
                  </svg>
                </a>
              </li>
              <li className={css.footer__soclist}>
                <a
                  href=""
                  className={`${css.footer__soclinks} ${css.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="twitter"
                >
                  <svg width="20" height="20">
                    <use href={icons + "#icon-twitter1"}></use>
                  </svg>
                </a>
              </li>
              <li className={css.footer__soclist}>
                <a
                  href=""
                  className={`${css.footer__soclinks} ${css.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook"
                >
                  <svg width="20" height="20">
                    <use href={icons + "#icon-facebook1"}></use>
                  </svg>
                </a>
              </li>
              <li className={css.footer__soclist}>
                <a
                  href=""
                  className={`${css.footer__soclinks} ${css.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkedin"
                >
                  <svg width="20" height="20">
                    <use href={icons + "#icon-linkedin1"}></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={css.subscribe}>
          <strong className={css.subscribe__text}>
            Підпишіться на розсилку
          </strong>
          <form className={css.footer__form}>
            <label>
              <input
                name="email-subscribe"
                type="email"
                placeholder="E-mail"
                className={css.footer__input}
              />
            </label>
            <button type="submit" className={css.subscribe__btn}>
              Підписатися
              <svg width="24" height="24">
                <use href={icons + "#icon-send"}></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
