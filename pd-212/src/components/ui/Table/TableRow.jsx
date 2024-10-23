import TextCell from "./TextCell";
import RenderList from "../../../utils/renderList";

/**
 * Компонент строка в таблице.
 * @param {object} props - Свойства компонента.
 * @param {object} props.rowData - Объект с характеристиками передаваемой сущности.
 * @param {function} props.onDoubleClick - Функция для обработки двойного клика (необязательный).
 * @returns {JSX.Element} Элемент JSX.
 */
const TableRow = ({ rowData, onDoubleClick }) => {
  // Получаем все ключи объекта rowData, кроме ключа id
  const rowKeys = Object?.keys(rowData || {})?.filter((key) => key !== "id");

  // Обработчик двойного клика
  const handleDoubleClick = () => {
    if (onDoubleClick) {
      onDoubleClick(rowData);
    }
  };

  return (
    <div
      className="flex cursor-pointer hover:bg-gray-100"
      onDoubleClick={handleDoubleClick}
    >
      <RenderList
        items={rowKeys}
        render={(key) => <TextCell value={rowData[key]} />}
        keyExtractor={(key) => key}
        emptyState={<div className="py-2 px-4 border">Ячейки отсутствуют.</div>}
      />
    </div>
  );
};

export default TableRow;
