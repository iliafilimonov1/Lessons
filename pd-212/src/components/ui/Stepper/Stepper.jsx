import { useState, useEffect } from "react";

/**
 * Компонент увеличения/уменьшения количества товара.
 * @param {object} props - Свойства компонента.
 * @param {string} [props.minValue = 1] - Минимальное значение.
 * @param {string} [props.maxValue = 10] - Максимальное значение.
 * @param {number} [props.step = 1] - Шаг изменения значения.
 * @param {function} props.onQuantityUpdate - Функция для обновления количества товара (обязательный).
 * @param {number} props.quantityValue - Количество (в виде значения).
 * @returns {JSX.Element} Элемент JSX.
 */
export const Stepper = ({
  minValue = 1,
  maxValue = 10,
  step = 1,
  quantityValue = minValue,
  onQuantityUpdate,
}) => {
  // Стейт для увеличения/уменьшения значения в компоненте.
  const [value, setValue] = useState(minValue);

  useEffect(() => {
    setValue(quantityValue);
  }, [quantityValue]);

  /**
   * Обработчик увеличения значения
   */
  const handleBtnIncrement = () => {
    if (value + step <= maxValue) {
      const newValue = value + step;
      setValue(newValue);
      onQuantityUpdate && onQuantityUpdate(newValue);
    }
  };

  /**
   * Обработчик уменьшения значения
   */
  const handleBtnDecrement = () => {
    if (value - step >= minValue) {
      const newValue = value - step;
      setValue(newValue);
      onQuantityUpdate && onQuantityUpdate(newValue);
    }
  };

  return (
    <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded dark:bg-neutral-900 dark:border-neutral-700">
      <div className="flex items-center gap-x-1.5">
        <button
          disabled={value === minValue}
          onClick={handleBtnDecrement}
          type="button"
          className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          tabIndex="-1"
          aria-label="Decrease"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
          </svg>
        </button>

        <input
          value={value}
          min={minValue}
          max={maxValue}
          readOnly
          className="p-0 w-7 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
          style={{ MozAppearance: "textfield" }}
          type="number"
        ></input>

        <button
          onClick={handleBtnIncrement}
          disabled={value === maxValue}
          type="button"
          className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          tabIndex="-1"
        >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Stepper;
