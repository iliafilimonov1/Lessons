import { create } from "zustand";

/**
 * Стор для управления продуктами и состоянием сохраненных продуктов.
 */
const useProducts = create((set, get) => {
  // Хранение продуктов
  let products;

  // Загрузка товаров корзины из localStorage.
  const storedCart = JSON?.parse(localStorage?.getItem("cart")) || [];

  /**
   * Функция добавления товаров в корзину
   * @param {Object} product - Данные товара.
   * @returns {void}
   */
  const addToCart = (product) => {
    const updatedCart = [...get().cart, { ...product, quantity: 1 }];

    localStorage?.setItem("cart", JSON?.stringify(updatedCart));

    set({ cart: updatedCart });

    console.log("Cart after set:", get().cart);
  };

  /**
   * Функция удаления товара из корзины
   * @param {string} productId - id товара.
   * @returns {void}
   */
  const deleteFromCart = (productId) => {
    const updatedCart = get()?.cart?.filter(product => product?.id !== productId);

    localStorage?.setItem("cart", JSON?.stringify(updatedCart));

    set({ cart: updatedCart });
  };

  return {
    products,
    cart: storedCart,
    addToCart,
    deleteFromCart
  };
});

export default useProducts;
