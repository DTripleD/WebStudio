import css from "./Menu.module.scss";
import icons from "../../images/icons.svg";
import { NavLink } from "react-router-dom";

type Props = {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
};
const Menu = ({ isOpen, setIsOpen }: Props) => {
  return (
    <>
      <div
        className={`${css.menu_container} ${isOpen ? css.is_open : ""}`}
        id="mobile-menu"
      >
        <button className={css.menu_toggle} onClick={() => setIsOpen(!isOpen)}>
          <svg width="40" height="40" className={css.menu__close}>
            <use href={icons + "#icon-close_header"}></use>
          </svg>
        </button>

        <ul className={css.mobile_menu}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${css.link} ${css.mobile_pages} ${css.active}`
                  : `${css.link} ${css.mobile_pages}`
              }
              to="/"
              onClick={() => setIsOpen(!isOpen)}
            >
              Студія
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? `${css.link} ${css.mobile_pages} ${css.active}`
                  : `${css.link} ${css.mobile_pages}`
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Портфоліо
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                isActive
                  ? `${css.link} ${css.mobile_pages} ${css.active}`
                  : `${css.link} ${css.mobile_pages}`
              }
              onClick={() => setIsOpen(!isOpen)}
            >
              Контакти
            </NavLink>
          </li>
        </ul>

        <ul className={`${css.list} ${css.mobile__contacts}`}>
          <li className={css.mobile_contacts__item}>
            <a
              href="tel:+380961111111"
              className={`${css.link} ${css.mobile__number}`}
            >
              +38 096 111 11 11
            </a>
          </li>
          <li className={css.mobile_contacts__item}>
            <a
              href="mailto:info@devstudio.com"
              className={`${css.link} ${css.mobile__mail}`}
            >
              info@devstudio.com
            </a>
          </li>
        </ul>

        <ul className={`${css.list} ${css.mobile_socials}`}>
          <li className={css.mobile__links_line}>
            <a href="" className={`${css.link} ${css.mobile__links}`}>
              Instagram
            </a>
          </li>
          <li className={css.mobile__links_line}>
            <a href="" className={`${css.link} ${css.mobile__links}`}>
              Twitter
            </a>
          </li>
          <li className={css.mobile__links_line}>
            <a href="" className={`${css.link} ${css.mobile__links}`}>
              Facebook
            </a>
          </li>
          <li className={css.mobile__links_line}>
            <a href="" className={`${css.link} ${css.mobile__links}`}>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
