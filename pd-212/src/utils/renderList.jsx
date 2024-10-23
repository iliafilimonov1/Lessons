import React from "react";

/**
 * Хелпер для рендеринга списка элементов.
 *
 * @param {Object[]} items - Массив элементов.
 * @param {Function} render - Функция отрисовки.
 * @param {React.ReactNode} [emptyState=null] - Что рендерить, при отсутствии элементов массиве.
 * @param {Function} [keyExtractor=(item) => item.id || item.key] - Функция для извлечения key.
 *
 * @returns {React.ReactNode} Возвращает список элементов.
 */
const RenderList = ({
  items = [],
  render,
  emptyState = null,
  keyExtractor = (item) => item?.id || item?.key,
}) => {
  if (!Array.isArray(items) || !items?.length) {
    return emptyState;
  }

  return (
    <>
      {items?.map((item) => {
        const key = keyExtractor(item);

        if (!key) {
          console.error("Invalid item or missing keyExtractor value", item);
          return null;
        }

        return <React.Fragment key={key}>{render(item)}</React.Fragment>;
      })}
    </>
  );
};

export default RenderList;
