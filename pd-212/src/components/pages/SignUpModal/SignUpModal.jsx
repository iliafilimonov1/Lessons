import React from "react";
import Modal from "../../ui/Modal/Modal";
import useForm from "../../../hooks/useForm";

/**
 * Модалка для регистрации.
 * @param {Object} props - Пропсы компонента.
 * @param {boolean} props.isOpen - Состояние открытости модалки.
 * @param {Function} props.onClose - Функция закрытия модалки.
 * @returns {JSX.Element} Элемент модалки.
 */
const SignUpModal = ({ isOpen, onClose }) => {
  // Кастомный хук для обработки и валидации полей
  const { formValues, formErrors, handleChange, resetForm } = useForm({
    login: "",
    email: "",
  });

  // Обработчик закрытия модального окна и сброса данных формы
  const handleCloseModal = () => {
    onClose && onClose();
    resetForm && resetForm();
  };

  // Функция для отправки данных
  const handleSubmit = (event) => {
    // Предотвращаем отправку данных
    event?.preventDefault();

    // Очищаем форму
    resetForm && resetForm();

    // Закрываем модалку
    onClose && onClose();
  };

  return (
    <Modal
      onClose={handleCloseModal}
      title="Регистрация в приложении"
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit} action="#">
        <div className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="full_name">Your login</label>
            <input
              type="text"
              name="login"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={formValues?.login}
              data-validate="text"
              onChange={handleChange}
              placeholder="Your login"
              required
            />
            <span className="text-red-500 text-xs italic mt-2">
              {formErrors?.login}
            </span>
          </div>

          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
              value={formValues?.email}
              data-validate="email"
              onChange={handleChange}
              placeholder="Your email"
              required
            />
            <span className="text-red-500 text-xs italic mt-2">
              {formErrors?.email}
            </span>
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
