import css from "./Menu.module.scss";

const Menu = () => {
  return (
    <>
      <div className="menu-container js-menu-container" id="mobile-menu">
        <button className="menu-toggle js-close-menu">
          <svg width="40" height="40" className="menu__close">
            <use href="./images/icons.svg#icon-close_header"></use>
          </svg>
        </button>

        <ul className={css.mobile_menu}>
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

export default Menu;
