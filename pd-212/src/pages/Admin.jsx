import Table from "../components/ui/Table/Table";
import useItems from "../store/useItems";
import useDisclosure from "../hooks/useDisclosure";
import { Drawer } from "../components/ui/Drawer/Drawer";
import { useState } from "react";

const Admin = () => {
  // Достаем данные из стора.
  const { items } = useItems();

  // Drawer для чтения информации
  const itemDrawer = useDisclosure();

  // Состояние для передачи данных в Drawer
  const [itemData, setItemData] = useState(null);

  /**
   * Обрабатывает двойной клик по строке таблицы.
   *
   * @param {Object} rowData - Данные строки, по которой был выполнен двойной клик.
   * @returns {void}
   */
  const handleRowDoubleClick = (rowData) => {
    setItemData(rowData);
    itemDrawer?.onOpen();
  };

  return (
    <section id="home" className="max-w-7xl mx-auto px-2 relative">
      <h2 className="mb-4 text-4xl font-bold text-zinc-800">Admin Page</h2>

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
        title="Чтение данных по товару"
      >
        <div className="w-full max-w-xs">{itemData?.name}</div>
      </Drawer>
    </section>
  );
};

Admin.displayName = "Admin";

export default Admin;
