import css from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1>Здається, сталася помилка.Поверніться на головну сторінку.</h1>
      </div>
    </section>
  );
};

export default ErrorPage;
