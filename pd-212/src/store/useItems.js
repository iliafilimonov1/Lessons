import { create } from "zustand";

const useItems = create((set, get) => {
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

  /**
   * Функция для обновления товара по id.
   *
   * @param {number} id - id товара, который необходимо обновить.
   * @param {Object} updatedItem - Обновленные данные товара.
   * @returns {Promise<void>} - Промис.
   * @throws {Error} - Выбрасывает ошибку, если HTTP-запрос завершился неудачей.
   */
  const editItem = async (id, updatedItem) => {
    console.log(updatedItem);
    try {
      const response = await fetch(`http://localhost:3000/items/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON?.stringify(updatedItem),
      });

      if (!response?.ok) {
        throw new Error(`HTTP error! Status: ${response?.status}`);
      }

      const data = await response?.json();

      const updatedItems = get()?.items?.map((item) => {
        if (item?.id === id) {
          return { ...item, ...data };
        }
        return item;
      });

      set({ items: updatedItems });
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return {
    items,
    fetchItems,
    editItem
  };
});

export default useItems;
