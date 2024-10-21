import { useEffect } from "react";
import Table from "../components/ui/Table/Table";
import useItems from "../store/useItems";

const Admin = () => {
  // Достаем данные из стора.
  const { items, fetchItems } = useItems();

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

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
      />
    </section>
  );
};

Admin.displayName = "Admin";

export default Admin;
