import { create } from "zustand";

const useItems = create((set, get) => {
  // Список товаров.
  const items = [];

  // Функция для получения списка товаров.
  const fetchItems = async () => {
    try {
      const response = await fetch(`http://localhost:3000/items`);

      const data = await response?.json();

      set({ items: data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  /**
   * Функция для добавления нового товара.
   * @param {Object} newItem - Объект с данными нового товара.
   * @param {string} newItem.name - Название товара.
   * @param {string} newItem.category - Категория товара.
   * @param {number} newItem.price - Цена товара.
   */
  const addItem = async (newItem) => {
    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response?.ok) {
        throw new Error(`HTTP error! Status: ${response?.status}`);
      }
      const data = await response.json();

      set((state) => ({
        items: [...state.items, data],
      }));
    } catch (error) {
      console.error("Error adding product:", error);
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

  /**
   * Удаляет товар по id.
   *
   * @param {number} id - id товара, который необходимо удалить.
   * @returns {Promise<void>} - Промис.
   * @throws {Error} - Выбрасывает ошибку, если HTTP-запрос завершился неудачей.
   */
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/items/${id}`, {
        method: "DELETE",
      });

      if (!response?.ok) {
        throw new Error(`HTTP error! Status: ${response?.status}`);
      }

      set((state) => ({
        items: state?.items?.filter((item) => item?.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return {
    items,
    fetchItems,
    addItem,
    editItem,
    deleteItem
  };
});

export default useItems;
