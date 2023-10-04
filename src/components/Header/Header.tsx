import { NavLink } from "react-router-dom";
import css from "./Header.module.scss";
import icons from "../../images/icons.svg";
import { useState } from "react";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={css.page_header}>
        <div className={`${css.container} ${css.container__header}`}>
          <a href="./index.html" className={`${css.logo} ${css.link}`}>
            Web<span className={css.logo__accent}>Studio</span>
          </a>
          <nav className={css.nav}>
            <ul className={`${css.pages} ${css.list}`}>
              <li className={css.pages__item}>
                <NavLink to="/" className={css.pages__link}>
                  Студія
                </NavLink>
              </li>
              <li className={css.pages__item}>
                <NavLink to="/portfolio" className={css.pages__link}>
                  Портфоліо
                </NavLink>
              </li>
              <li className={css.pages__item}>
                <NavLink to="/contacts" className={css.pages__link}>
                  Контакти
                </NavLink>
              </li>
            </ul>
          </nav>

          <ul className={`${css.list} ${css.page_header__contacts}`}>
            <li className={css.contacts__info}>
              <a
                href="mailto:info@devstudio.com"
                className={`${css.contacts__item} ${css.link}`}
              >
                <svg className={css.contacts__icons} width="16" height="12">
                  <use href={icons + "#icon-envelope-hover"}></use>
                </svg>
                info@devstudio.com
              </a>
            </li>
            <li className={css.contacts__info}>
              <a
                href="tel:+380961111111"
                className={`${css.contacts__item} ${css.link}`}
              >
                <svg className={css.contacts__icons} width="10" height="16">
                  <use href={icons + "#icon-smartphone"}></use>
                </svg>
                +38 096 111 11 11
              </a>
            </li>
          </ul>

          <button
            className={`${css.menu_toggle} `}
            aria-expanded="false"
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="40" height="40" className="menu__open">
              <use href={icons + "#icon-menu_header"}></use>
            </svg>
          </button>
        </div>
      </header>
      {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
