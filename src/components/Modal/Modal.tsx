const Modal = () => {
  return (
    <div className="backdrop is-hidden" data-modal>
      <div className="modal">
        <button className="modal__close" data-modal-close>
          <svg width="18" height="18">
            <use href="./images/icons.svg#icon-close"></use>
          </svg>
        </button>

        <p className="modal__article">Залиште свої дані, ми вам передзвонимо</p>
        <form name="modal-form">
          <div className="modal__group" role="group">
            <label htmlFor="user_name" className="modal__label">
              Ім'я
            </label>
            <div className="modal__wrapper">
              <input
                type="text"
                id="user_name"
                name="user_name"
                className="modal__input"
              />
              <svg className="modal__icon" height="18" width="18">
                <use href="./images/icons.svg#icon-person"></use>
              </svg>
            </div>

            <label htmlFor="user_phone" className="modal__label">
              Телефон
            </label>
            <div className="modal__wrapper">
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                className="modal__input"
              />
              <svg className="modal__icon" height="18" width="18">
                <use href="./images/icons.svg#icon-phone"></use>
              </svg>
            </div>

            <label htmlFor="user_mail" className="modal__label">
              Пошта
            </label>
            <div className="modal__wrapper">
              <input
                type="email"
                id="user_mail"
                name="user_mail"
                className="modal__input"
              />
              <svg className="modal__icon" height="18" width="18">
                <use href="./images/icons.svg#icon-email"></use>
              </svg>
            </div>

            <label className="modal__label" htmlFor="user_message">
              Коментар
            </label>
            <textarea
              className="modal__message"
              name="user_message"
              id="user_message"
              placeholder="Введіть текст"
            ></textarea>

            <div className="agreement">
              <label htmlFor="user_agreement" className="agreement__label">
                <input
                  type="checkbox"
                  id="user_agreement"
                  name="user_agreement"
                  className="agreement__checkbox"
                />
                <svg className="agreement__icon" width="16" height="15">
                  <use
                    className="agreement__icon--uncheck"
                    href="./images/icons.svg#icon-uncheck"
                  ></use>
                  <use
                    className="agreement__icon--check"
                    href="./images/icons.svg#icon-check"
                  ></use>
                </svg>
                <span>
                  Погоджуюся з розсилкою та приймаю
                  <a href="" className="agreement__link">
                    Умови договору
                  </a>
                </span>
              </label>
            </div>

            <button type="submit" className="modal__btn">
              Відправити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
