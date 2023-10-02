import css from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <section className={`${css.hero} ${css.section}`}>
        <div className={`${css.container} ${css.hero__container}`}>
          <h1 className={css.hero__title}>
            Ефективні рішення для вашого бізнесу
          </h1>
          <button type="button" className={css.hero__btn} data-modal-open>
            Замовити послугу
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
