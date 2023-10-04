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
      <div className={css.menu_container} id="mobile-menu">
        <button className={css.menu_toggle} onClick={() => setIsOpen(!isOpen)}>
          <svg width="40" height="40" className={css.menu__close}>
            <use href={icons + "#icon-close_header"}></use>
          </svg>
        </button>

        <ul className={css.mobile_menu}>
          <li>
            <NavLink
              to="/"
              className={`${css.link} ${css.mobile_pages} ${css.mobile__pages_current} `}
            >
              Студія
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={`${css.link} ${css.mobile_pages}`}
            >
              Портфоліо
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={`${css.link} ${css.mobile_pages}`}
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
