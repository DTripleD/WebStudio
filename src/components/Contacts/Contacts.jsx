import css from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <main>
      <section className={css.section}>
        <div className={`${css.container} ${css.contacts}`}>
          <h1 className={css.contacts_title}>Contacts</h1>

          <span className={css.contacts_about}>
            This site was written according to the layout &#8658;&#160;
            <a
              className={`${css.link} ${css.contacts_link}`}
              href="https://www.figma.com/file/3lQQ9l3yQYngZaAsfPkRSL/Web-Studio-(Version-2.1)-(Copy)?type=design&node-id=3-7653&mode=design&t=1ipfokCXHHNY9WFN-0"
            >
              click
            </a>
          </span>

          <p className={css.contacts_about}>
            Now I am actively looking for work opportunities and if you have
            interesting offers, you can contact me in any way convenient for
            you:
          </p>
          <ul className={`${css.list} ${css.contacts_list}`}>
            <li className={css.contacts__item}>
              <p className={css.contacts__list_text}>LinkedIn:&#160;</p>{" "}
              <a
                className={`${css.link} ${css.contacts_link}`}
                href="https://www.linkedin.com/in/danylo-deineka/"
              >
                click
              </a>
            </li>
            <li className={css.contacts__item}>
              <p className={css.contacts__list_text}>Gmail:&#160;</p>
              <a
                className={`${css.link} ${css.contacts_link}`}
                href="mailto:danildeineka22@gmail.com"
              >
                danildeineka22@gmail.com
              </a>
            </li>
            <li className={css.contacts__item}>
              <p className={css.contacts__list_text}>GitHub:&#160;</p>
              <a
                className={`${css.link} ${css.contacts_link}`}
                href="https://github.com/DTripleD"
              >
                click
              </a>
            </li>
            <li className={css.contacts__item}>
              <p className={css.contacts__list_text}>Telegram:&#160;</p>
              <a
                className={`${css.link} ${css.contacts_link}`}
                href="https://t.me/TripleDD"
              >
                click
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
