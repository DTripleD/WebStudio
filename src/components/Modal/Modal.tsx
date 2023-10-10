import css from "./Modal.module.scss";
import icons from "../../images/icons.svg";

type Props = {
  isHidden: boolean;
  setIsHidden: (bool: boolean) => void;
};

const Modal = ({ isHidden, setIsHidden }: Props) => {
  return (
    <div className={`${css.backdrop} ${isHidden ? css.is_hidden : ""}`}>
      <div className={css.modal}>
        <button
          className={css.modal__close}
          onClick={() => setIsHidden(!isHidden)}
        >
          <svg width="18" height="18">
            <use href={icons + "#icon-close"}></use>
          </svg>
        </button>

        <p className={css.modal__article}>
          Залиште свої дані, ми вам передзвонимо
        </p>
        <form name="modal-form">
          <div className={css.modal__group} role="group">
            <label htmlFor="user_name" className={css.modal__label}>
              Ім'я
            </label>
            <div className={css.modal__wrapper}>
              <input
                type="text"
                id="user_name"
                name="user_name"
                className={css.modal__input}
              />
              <svg className={css.modal__icon} height="18" width="18">
                <use href={icons + "#icon-person"}></use>
              </svg>
            </div>

            <label htmlFor="user_phone" className={css.modal__label}>
              Телефон
            </label>
            <div className={css.modal__wrapper}>
              <input
                type="tel"
                id="user_phone"
                name="user_phone"
                className={css.modal__input}
              />
              <svg className={css.modal__icon} height="18" width="18">
                <use href={icons + "#icon-phone"}></use>
              </svg>
            </div>

            <label htmlFor="user_mail" className={css.modal__label}>
              Пошта
            </label>
            <div className={css.modal__wrapper}>
              <input
                type="email"
                id="user_mail"
                name="user_mail"
                className={css.modal__input}
              />
              <svg className={css.modal__icon} height="18" width="18">
                <use href={icons + "#icon-email"}></use>
              </svg>
            </div>

            <label className={css.modal__label} htmlFor="user_message">
              Коментар
            </label>
            <textarea
              className={css.modal__message}
              name="user_message"
              id="user_message"
              placeholder="Введіть текст"
            ></textarea>

            <div className={css.agreement}>
              <label htmlFor="user_agreement" className={css.agreement__label}>
                <input
                  type="checkbox"
                  id="user_agreement"
                  name="user_agreement"
                  className={css.agreement__checkbox}
                />
                <svg className={css.agreement__icon} width="16" height="15">
                  <use
                    className={css.agreement__icon_uncheck}
                    href={icons + "#icon-uncheck"}
                  ></use>
                  <use
                    className={css.agreement__icon_check}
                    href={icons + "#icon-check"}
                  ></use>
                </svg>
                <span>
                  Погоджуюся з розсилкою та приймаю
                  <a href="" className={css.agreement__link}>
                    Умови договору
                  </a>
                </span>
              </label>
            </div>

            <button type="submit" className={css.modal__btn}>
              Відправити
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
