import TableRow from "./TableRow";
import RenderList from "../../../utils/renderList";

/**
 * Компонент таблица.
 * @param {object} props - Свойства компонента.
 * @param {Array} props.headerData - Названия столбцов в шапке таблицы.
 * @param {Array} props.data - Содержимое таблицы.
 * @param {function} props.onRowDoubleClick - Функция для обработки двойного клика по строке (необязательный).
 * @returns {JSX.Element} Элемент JSX.
 */
const Table = ({ data, headers, onRowDoubleClick }) => {
  return (
    <div className="w-full">
      <div className="flex flex-row">
        <RenderList
          items={headers}
          render={(header) => (
            <div className="leading-10 px-2 text-base font-medium bg-gray-200 flex items-center border border-gray-300 flex-grow w-2">
              {header?.title}
            </div>
          )}
          keyExtractor={(header) => header?.key}
          emptyState={
            <div className="py-2 px-4 border">Заголовки отсутствуют.</div>
          }
        />
      </div>
      <RenderList
        items={data}
        render={(dataInfo) => (
          <TableRow onDoubleClick={onRowDoubleClick} rowData={dataInfo} />
        )}
        emptyState={
          <div className="flex justify-center py-2 px-4 border">
            Данные в таблице отсутствуют.
          </div>
        }
      />
    </div>
  );
};

export default Table;
