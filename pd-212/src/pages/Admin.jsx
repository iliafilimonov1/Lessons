import { useState } from "react";
import Table from "../components/ui/Table/Table";
import useItems from "../store/useItems";
import useDisclosure from "../hooks/useDisclosure";
import { Drawer } from "../components/ui/Drawer/Drawer";
import useForm from "../hooks/useForm";
import Alert from "../components/ui/Alert/Alert";

const Admin = () => {
  // Достаем данные из стора.
  const { items, addItem, editItem } = useItems();

  // Drawer для чтения информации
  const itemDrawer = useDisclosure();

  // Стейт для скрытия/показа компонента Alert
  const [alertData, setAlertData] = useState({
    title: "",
    subtitle: "",
    variant: "neutral",
    isOpen: false,
  });

  // Данные полученные при двойном клике на строку таблицы
  const [selectedValue, setSelectedValue] = useState({
    name: '',
    category: 'chair',
    price: ''
  });

  // Стейт для переключения режима редактирования
  const [isEditing, setIsEditing] = useState(false);

  // Обработка данных формы.
  const { formValues, formErrors, resetForm, handleChange } = useForm(selectedValue);

  console.log(formValues);

  /**
   * Обрабатывает двойной клик по строке таблицы.
   *
   * @param {Object} rowData - Данные строки, по которой был выполнен двойной клик.
   * @returns {void}
   */
  const handleRowDoubleClick = (rowData) => {
    setSelectedValue(rowData);
    setIsEditing(false);
    itemDrawer?.onOpen();
  };

  /**
   * Обработка отправки формы.
   * Если товар выбран, редактируем его, иначе добавляем новый товар.
   *
   * @param {Event} event - Событие отправки формы.
   * @returns {void}
   */
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedValue) {
      editItem(selectedValue?.id, { ...selectedValue, ...formValues });

      // Уведомляем пользователя об изменениях
      setAlertData({
        title: "Редактирование товара.",
        subtitle: "Товар был успешно отредактирован.",
        variant: "neutral",
        isOpen: true,
      });

      // Закрываем Drawer
      itemDrawer?.onClose();

      // Сбрасываем состояние формы
      resetForm();
    } else {
      addItem({ ...formValues });

      setAlertData({
        title: "Добавление товара.",
        subtitle: "Товар был успешно добавлен.",
        variant: "neutral",
        isOpen: true,
      });

      // Закрываем Drawer
      itemDrawer?.onClose();

      // Сбрасываем состояние формы
      resetForm();
    }
  };

  return (
    <section id="home" className="max-w-7xl mx-auto px-2 relative">
      <h2 className="mb-4 text-4xl font-bold text-zinc-800">Admin Page</h2>

      <button
        className="bg-indigo-500 mb-4 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setSelectedValue(null);
          setIsEditing(true);
          itemDrawer?.onOpen();
        }}
      >
        Add new product
      </button>

      <Table
        headers={[
          { key: "name", title: "Название" },
          { key: "category", title: "Категория" },
          { key: "price", title: "Цена" },
        ]}
        data={items}
        onRowDoubleClick={handleRowDoubleClick}
      />

      <Drawer
        isOpen={itemDrawer?.isOpen}
        onClose={itemDrawer?.onClose}
        title={selectedValue ? "Read product information" : "Add new product"}
      >
        <div className="w-full max-w-xs">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm mb-2 font-medium text-gray-700"
                htmlFor="name"
              >
                Product name
              </label>
              <input
                className="read-only:border-gray-200 read-only:text-gray-400 read-only:bg-gray-100 read-only:cursor-not-allowed appearance-none h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="name"
                type="text"
                data-validate="text"
                required
                defaultValue={formValues?.name || selectedValue?.name}
                onChange={handleChange}
                placeholder="Enter name"
                readOnly={!isEditing}
              />
              <span className="text-rose-500 text-xs italic mt-2">
                {formErrors?.name}
              </span>
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm mb-2 font-medium text-gray-700"
              >
                Product category
              </label>
              <select
                name="category"
                autoComplete="off"
                required
                onChange={handleChange}
                disabled={!isEditing}
                defaultValue={formValues?.category || selectedValue?.category}
                className="h-10 px-4 block bg-white border-gray-300 w-full border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm disabled:border-gray-200 disabled:text-gray-400 disabled:bg-gray-100 disabled:cursor-not-allowed appearance-none"
              >
                <option value="chair" >Chair</option>
                <option value="bed">Bed</option>
                <option value="bench">Bench</option>
                <option value="children's furniture">
                  Children's Furniture
                </option>
                <option value="sofa beds">Sofa Beds</option>
              </select>
            </div>

            <div className="mb-8">
              <label
                className="block text-sm mb-2 font-medium text-gray-700"
                htmlFor="price"
              >
                Product price
              </label>
              <input
                readOnly={!isEditing}
                className="w-32 read-only:border-gray-200 read-only:text-gray-400 read-only:bg-gray-100 read-only:cursor-not-allowed appearance-none px-4 h-10 border block border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                name="price"
                type="text"
                data-validate="text"
                required
                defaultValue={formValues?.price || selectedValue?.price}
                onChange={handleChange}
                placeholder="Enter price"
              />
              <span className="text-rose-500 text-xs italic mt-2">
                {formErrors?.price}
              </span>
            </div>

            <div className="mb-4 flex justify-end">
              {!isEditing && selectedValue && (
                <>
                  <button className="flex-1 border-2 border-rose-500 bg-rose-500 text-white font-medium py-2 px-4 rounded">
                    Delete
                  </button>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex-1 ml-2 border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                </>
              )}
              {isEditing && (
                <button
                  disabled={!formValues}
                  className="w-full border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded disabled:bg-gray-100 disabled:text-gray-400 disabled:pointer-events-none disabled:border-none"
                >
                  Save changes
                </button>
              )}
            </div>
          </form>
        </div>
      </Drawer>

      <Alert
        title={alertData?.title}
        subtitle={alertData?.subtitle}
        variant={alertData?.variant}
        isOpen={alertData?.isOpen}
        onClose={() => {
          setAlertData((prevAlertData) => ({
            isOpen: !prevAlertData.isOpen,
          }));
        }}
      />
    </section>
  );
};

Admin.displayName = "Admin";

export default Admin;
