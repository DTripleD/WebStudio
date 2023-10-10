import Modal from "../Modal/Modal";
import css from "./Hero.module.scss";
import { useState } from "react";

const Hero = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <section className={`${css.hero} ${css.section}`}>
        <div className={`${css.container} ${css.hero__container}`}>
          <h1 className={css.hero__title}>
            Ефективні рішення для вашого бізнесу
          </h1>
          <button
            type="button"
            className={css.hero__btn}
            data-modal-open
            onClick={(prevState) => setIsHidden(!prevState)}
          >
            Замовити послугу
          </button>
          <Modal isHidden={isHidden} setIsHidden={setIsHidden} />
        </div>
      </section>
    </>
  );
};

export default Hero;
