import TableRow from "./TableRow";

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
        {headers?.length > 0 && headers?.map((header) => (
          <div
            key={header?.key}
            className="leading-10 px-2 font-semibold bg-gray-300 flex items-center border border-gray-400 flex-grow w-2"
          >
            {header?.title}
          </div>
        ))}
      </div>
      {data?.length > 0 ? (
        data?.map((item) => (
          <TableRow
            onDoubleClick={onRowDoubleClick}
            key={crypto?.randomUUID()}
            rowData={item}
          />
        ))
      ) : (
        <div className="flex flex-row py-2 px-4  border">
          Данные в таблице отсутствуют.
        </div>
      )}
    </div>
  );
};

export default Table;
