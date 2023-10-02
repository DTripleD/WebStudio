const Benefits = () => {
  return (
    <section className="benefits section">
      <div className="container">
        <h2 className="visually-hidden">benefits</h2>
        <ul className="list benefits__list">
          <li className="benefits__item">
            <div className="benefits__icon">
              <svg className="" width="70" height="70">
                <use href="./images/icons.svg#icon-antenna"></use>
              </svg>
            </div>
            <h3 className="benefits__title">Увага до деталей</h3>
            <p className="benefits__dscr">
              Ідейні міркування, і навіть початок повсякденної роботи з
              формування позиції.
            </p>
          </li>
          <li className="benefits__item">
            <div className="benefits__icon">
              <svg className="" width="70" height="70">
                <use href="./images/icons.svg#icon-clock"></use>
              </svg>
            </div>
            <h3 className="benefits__title">Пунктуальність</h3>
            <p className="benefits__dscr">
              Завдання організації, особливо рамки і місце навчання кадрів тягне
              у себе.
            </p>
          </li>
          <li className="benefits__item">
            <div className="benefits__icon">
              <svg className="" width="70" height="70">
                <use href="./images/icons.svg#icon-diagram"></use>
              </svg>
            </div>
            <h3 className="benefits__title">Планування</h3>
            <p className="benefits__dscr">
              Так само консультація з широким активом значною мірою зумовлює.
            </p>
          </li>
          <li className="benefits__item">
            <div className="benefits__icon">
              <svg className="" width="70" height="70">
                <use href="./images/icons.svg#icon-astronaut"></use>
              </svg>
            </div>
            <h3 className="benefits__title">Сучасні технології</h3>
            <p className="benefits__dscr">
              Значимість цих проблем настільки очевидна, що реалізація планових
              завдань.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
