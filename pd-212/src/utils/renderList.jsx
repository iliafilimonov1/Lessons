import React from "react";

/**
 * Хелпер для рендеринга списка элементов.
 *
 * @param {Object[]} items - Массив элементов.
 * @param {Function} render - Функция отрисовки.
 * @param {React.ReactNode} [emptyState=null] - Что рендерить, при отсутствии элементов массиве.
 * @param {Function} [keyExtractor=(item) => item.id] - Функция для извлечения key. По умолчанию используется item.id.
 *
 * @returns {React.ReactNode} Возвращает список элементов.
 */
const RenderList = ({
  items = [],
  render,
  emptyState = null,
  keyExtractor = (item) => item.id,
}) => {
  if (!Array.isArray(items) || !items?.length) {
    return emptyState;
  }

  return (
    <>
      {items?.map((item) => {
        if (!item || !keyExtractor(item)) {
          console.error(`Invalid item or missing keyExtractor value`);
          return null;
        }

        return React?.cloneElement(render(item), { key: keyExtractor(item) });
      })}
    </>
  );
};

export default RenderList;
