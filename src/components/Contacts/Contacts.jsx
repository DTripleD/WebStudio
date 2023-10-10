import css from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <main>
      <section className={css.section}>
        <div className={`${css.container} ${css.portfolio}`}>
          <p>Contacts Page</p>
        </div>
      </section>
    </main>
  );
};

export default Contacts;
