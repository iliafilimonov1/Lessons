import { create } from "zustand";

/**
 * Стор для управления продуктами и состоянием сохраненных продуктов.
 */
const useProducts = create((set, get) => {
  // Хранение продуктов
  let products;

  // Загрузка товаров корзины из localStorage.
  const storedCart = JSON?.parse(localStorage?.getItem("cart")) || [];

  // Функция для получения данных
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");

      if (!response?.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response?.json();

      set({ products: data });
    } catch (error) {
      console.error("Error fetching products");
    }
  };

  /**
   * Функция добавления товаров в корзину
   * @param {Object} product - Данные товара.
   * @returns {void}
   */
  const addToCart = (product) => {
    // Получаем текущее состояние корзины или инициализируем пустой массив
    const currentCart = get()?.cart || [];

    // Ищем товар в корзине по id
    const existingProduct = currentCart?.find((item) => item?.id === product?.id);

    if (existingProduct) {
      // Если товар уже в корзине, увеличиваем количество
      existingProduct.cartQuantity += 1;
    } else {
      currentCart?.push({ ...product, cartQuantity: 1 });
    }

    localStorage?.setItem("cart", JSON?.stringify(currentCart));

    set({ cart: currentCart });
  };

  /**
   * Функция удаления товара из корзины
   * @param {string} productId - id товара.
   * @returns {void}
   */
  const deleteFromCart = (productId) => {
    const updatedCart = get()?.cart?.filter(
      (product) => product?.id !== productId
    );

    localStorage?.setItem("cart", JSON?.stringify(updatedCart));

    set({ cart: updatedCart });
  };

  // Общее количество добавленных ранее товаров в корзину.
  const productsQuantity = () => {
    return get().cart?.reduce((total, product) => {
      return total + product?.cartQuantity;
    }, 0);
  };

  /**
   * Функция увеличения/уменьшения количества товара.
   * @param {string} cartQuantity - Значение, на которое необходимо обновить кол-во.
   * @param {string} productId - id товара.
   */
  const updateCartQuantity = (cartQuantity, productId) => {
    const updatedCart = get()?.cart?.map((item) => {
      if (item?.id === productId) {
        return { ...item, cartQuantity };
      }
      return item;
    });

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    set({ cart: updatedCart });
  };

  return {
    products,
    cart: storedCart,
    getProducts,
    addToCart,
    deleteFromCart,
    productsQuantity,
    updateCartQuantity,
  };
});

export default useProducts;
