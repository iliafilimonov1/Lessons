import { create } from "zustand";

const useItems = create((set) => {
  // Список товаров.
  const items = [];

  // Функция для получения списка товаров.
  const fetchItems = async () => {
    try {
      const response = await fetch(`http://localhost:3000/items`);
      const data = await response?.json();

      console.log("Fetched items:", data);

      set({ items: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return {
    items,
    fetchItems,
  };
});

export default useItems;
