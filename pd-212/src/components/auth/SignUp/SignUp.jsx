import React from "react";
import Modal from "../../ui/Modal/Modal";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../hooks/useAuth";
import useDisclosure from "../../../hooks/useDisclosure";
import Alert from "../../ui/Alert/Alert";

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
    password: "",
  });

  // Кастомный хук для регистрации
  const { onRegister } = useAuth();

  // Кастомный хук для открытия/закрытия
  const alertSignUp = useDisclosure();

  // Обработчик закрытия модального окна и сброса данных формы
  const handleCloseModal = () => {
    onClose && onClose();
    resetForm && resetForm();
  };

  // Функция для отправки данных
  const handleSubmit = (event) => {
    // Предотвращаем отправку данных
    event?.preventDefault();

    // Передача данных пользователя в useAuth
    onRegister(formValues);

    // Очищаем форму
    resetForm && resetForm();

    // Закрываем модалку
    onClose && onClose();

    // Показываем Alert
    alertSignUp?.onOpen();
  };

  return (
    <>
      <Modal onClose={handleCloseModal} title="Регистрация" isOpen={isOpen}>
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
              <label htmlFor="email">Your password</label>
              <input
                type="password"
                name="password"
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={formValues?.password}
                data-validate="password"
                onChange={handleChange}
                placeholder="Your password"
                required
              />
              <span className="text-red-500 text-xs italic mt-2">
                {formErrors?.password}
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
      <Alert
        title="Регистрация выполнена."
        subtitle="Успешно."
        isOpen={alertSignUp?.isOpen}
        onClose={alertSignUp?.onClose}
        variant="neutral"
      />
    </>
  );
};

SignUpModal.displayName = "SignUpModal";

export default SignUpModal;
