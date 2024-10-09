import React from "react";
import Modal from "../../ui/Modal/Modal";

/**
 * Модалка для регистрации.
 * @param {Object} props - Пропсы компонента.
 * @param {boolean} props.isOpen - Состояние открытости модалки.
 * @param {Function} props.onClose - Функция закрытия модалки.
 * @returns {JSX.Element} Элемент модалки.
 */
const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <Modal onClose={onClose} title="Регистрация в приложении" isOpen={isOpen}>
      <form action="#">
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="full_name">Your login</label>
            <input
              type="text"
              name="login"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              defaultValue=""
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              defaultValue=""
              placeholder="email@domain.com"
            />
          </div>

          <div className="mb-4 flex justify-end">
            <button className="border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

SignUpModal.displayName = "SignUpModal";

export default SignUpModal;
