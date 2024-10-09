/**
 * Валидаторы для полей формы.
 * @property {function(string): string|null} text - Валидатор для текстового поля.
 * @property {function(string): string|null} email - Валидатор для электронной почты.
 * @property {function(string): string|null} phone - Валидатор для телефона.
 * @property {function(string): string|null} password - Валидатор для пароля.
 * @property {function(string): string|null} number - Валидатор для числовых полей.
 */
const validators = {
  /**
   * Валидатор для текстового поля.
   * @param {string} value - Значение поля.
   * @returns {string|null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  text: (value) => {
    if (!value) return "field is required";

    const regexText = /^[^!>?<_\-$№#@]+$/;

    if (!regexText.test(value))
      return "Text should not contain !>?<_-$№#@ symbols";

    return null;
  },
  /**
   * Валидатор для электронной почты.
   * @param {string} value - Значение поля.
   * @returns {string|null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  email: (value) => {
    if (!value) return "field is required";

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
      return "Invalid email";

    return null;
  },
  /**
   * Валидатор для телефона.
   * @param {string} value - Значение поля.
   * @returns {string|null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  phone: (value) => {
    if (!value) return "field is required";

    if (!/^\+?[0-9-]+$/.test(value)) return "Invalid phone number";

    return null;
  },
  /**
   * Валидатор для пароля.
   * @param {string} value - Значение поля.
   * @returns {string|null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  password: (value) => {
    if (!value) return "field is required";

    if (value.length < 8) return "Password must be at least 8 characters long";

    return null;
  },
  /**
   * Валидатор для числовых полей.
   * @param {string} value - Значение поля.
   * @returns {string|null} - Сообщение об ошибке или null, если валидация прошла успешно.
   */
  number: (value) => {
    // Удаляем пробелы с начала и конца строки
    const trimmedValue = value.trim();

    // Проверяем, что значение не пустое
    if (!trimmedValue) return "Field is required";

    // Регулярное выражение для проверки чисел, включая десятичные числа с точкой или запятой
    const regexNumber = /^-?\d+([.,]\d+)?$/;

    // Проверяем, что значение соответствует регулярному выражению
    if (!regexNumber.test(trimmedValue)) {
      return "Must be a valid number without letters or special symbols";
    }

    return null;
  },
};

/**
 * Функция для валидации формы на основе предоставленных валидаторов.
 * @param {Object} formData - Данные формы, представленные в виде объекта.
 * @param {HTMLFormElement} form - HTML-форма с полями.
 * @returns {Object} - Объект с сообщениями об ошибках для каждого поля формы.
 */
function validateForm(formData, form) {
  // Объект для хранения сообщений об ошибках
  const validationErrors = {};

  // Находим все элементы формы, у которых установлен атрибут data-validate
  form?.querySelectorAll("[data-validate]")?.forEach((input) => {
    // Получаем тип валидации из атрибута data-validate
    const validationType = input?.dataset?.validate;
    // Находим соответствующий валидатор по типу
    const validator = validators[validationType];

    if (validator) {
      // Получаем значение поля, или пустую строку, если значение не определено
      const value = formData[input?.name] || "";
      // Выполняем валидацию значения с помощью валидатора
      const errorMessage = validator(value);
      // Если есть сообщение об ошибке, добавляем его в объект ошибок
      if (errorMessage) {
        validationErrors[input?.name] = errorMessage;
      }
    }
  });

  // Возвращаем объект с сообщениями об ошибках
  return validationErrors;
}

export default validateForm;
