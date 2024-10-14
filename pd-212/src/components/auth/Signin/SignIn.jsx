import React from "react";
import Modal from "../../ui/Modal/Modal";
import useForm from "../../../hooks/useForm";
import { useAuth } from "../../../hooks/useAuth";
import Alert from "../../ui/Alert/Alert";
import useDisclosure from "../../../hooks/useDisclosure";

/**
 * Модалка для входа.
 * @param {Object} props - Пропсы компонента.
 * @param {boolean} props.isOpen - Состояние открытости модалки.
 * @param {Function} props.onClose - Функция закрытия модалки.
 * @returns {JSX.Element} Элемент модалки.
 */
const SignIn = ({ isOpen, onClose }) => {
  // Кастомный хук для обработки и валидации полей
  const { formValues, formErrors, handleChange, resetForm } = useForm({
    login: "",
    password: "",
  });

  // Кастомный хук для открытия/закрытия
  const alertSignIn = useDisclosure();

  // Кастомный хук для входа
  const { onLogin } = useAuth();

  // Обработчик закрытия модального окна и сброса данных формы
  const handleCloseModal = () => {
    onClose && onClose();
    resetForm && resetForm();
  };

  // Функция для отправки данных
  const handleSubmit = (event) => {
    // Предотвращаем отправку данных
    event?.preventDefault();

    // Передача данных в хук useAuth
    onLogin(formValues);

    // Очищаем форму
    resetForm && resetForm();

    // Закрываем модалку
    onClose && onClose();

    // Показываем Alert
    alertSignIn?.onOpen();
  };

  return (
    <>
      <Modal onClose={handleCloseModal} title="Вход" isOpen={isOpen}>
        <form action="#" onSubmit={handleSubmit}>
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
                onChange={handleChange}
                className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                value={formValues?.password}
                data-validate="password"
                placeholder="Yout password"
                required
              />
              <span className="text-red-500 text-xs italic mt-2">
                {formErrors?.password}
              </span>
            </div>

            <div className="mb-4 flex justify-end">
              <button className="border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded x">
                Submit
              </button>
            </div>
          </div>
        </form>
      </Modal>
      <Alert
        title="Вход выполнен."
        subtitle="Успешно."
        isOpen={alertSignIn?.isOpen}
        onClose={alertSignIn?.onClose}
        variant="neutral"
      />
    </>
  );
};

SignIn.displayName = "SignIn";

export default SignIn;
