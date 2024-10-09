import validateForm from "../utils/validators";
import { useState } from "react";

/**
 * Хук для управления обработки, обновления и отправки данных формы.
 * @param {Object} initialValues - Начальное состояние формы (Объект).
 * @returns {formValues} - Объект с состоянием формы.
 * @returns {handleInputChange} - Функция обработчик при смене данных в инпуте.
 * @returns {resetForm} - Функция сброса состояния формы.
 */
export function useForm(initialValues) {
  // Состояние формы, хранит значения полей
  const [formValues, setFormValues] = useState(initialValues);

  // Состояние для отслеживания ошибок валидации
  const [formErrors, setFormErrors] = useState({});

  /**
   * Обработчик изменения значения полей формы.
   *
   * @param {Object} event - Событие изменения.
   */
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Обновляем состояние формы для текущего поля
    setFormValues({ ...formValues, [name]: value });

    // Находим ближайшую форму
    const form = event?.target?.closest("form");

    // Валидируем только измененное поле
    const fieldError = validateForm({ [name]: value }, form)[name] || null;

    // Обновляем состояние ошибок только для этого поля
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldError,
    }));
  };

  // Функция для сброса состояния формы и состояния ошибок
  const resetForm = () => {
    setFormValues(initialValues);
    setFormErrors({});
  };

  return {
    formValues,
    formErrors,
    handleChange,
    resetForm,
  };
}

export default useForm;
