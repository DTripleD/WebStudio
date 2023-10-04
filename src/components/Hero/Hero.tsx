import Modal from "../Modal/Modal";
import css from "./Hero.module.scss";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
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
            onClick={() => setIsOpen(!isOpen)}
          >
            Замовити послугу
          </button>
          {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </section>
    </>
  );
};

export default Hero;
