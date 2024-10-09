import { useState, useEffect } from "react";

/**
 * Кастомный хук для дебаунса значения.
 *
 * @param {T} value – Значение, которое нужно дебаунсить (строка, число, объект и т.д.)
 * @param {number} delay – Задержка в миллисекундах перед обновлением значения.
 * @returns {T} – Значение того же типа, что и входное значение.
 */
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
