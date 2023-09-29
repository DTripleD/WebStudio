import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <NavLink className="test" to="/">
          Студія
        </NavLink>

        <NavLink to="/portfolio">Портфоліо</NavLink>

        <NavLink to="/contacts">Контакти</NavLink>
      </nav>
    </>
  );
};

export default Header;
