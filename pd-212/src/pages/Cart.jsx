import useProducts from "../store/useProducts";
import { LiaTimesSolid } from "react-icons/lia";
// import Alert from "../components/ui/Alert/Alert";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import useDisclosure from "../hooks/useDisclosure";
import Alert from "../components/ui/Alert/Alert";

const Cart = () => {
  // Показ/скрытие компонента Alert
  const alertData = useDisclosure();

  // Получение данных из стора (корзина товаров)
  const { cart, deleteFromCart } = useProducts();

  // Обработчик удаления товара и уведомления пользователя
  const handleDeleteFromCart = (productId) => {
    // Удаляем товар из стора
    deleteFromCart(productId);

    // Уведомляем пользователя
    alertData?.onOpen();
  };

  console.log("товары в корзине", cart);

  return (
    <section className="cart min-h-80">
      <div className="max-w-7xl mx-auto px-2">
        <Link
          to="/cards"
          className=" text-indigo-500 hover:text-indigo-600 mb-8 inline-flex"
        >
          <IoIosArrowBack className="mr-1 w-5 h-5" />
          Go to page Cards
        </Link>
        <div className="flex justify-between items-start">
          <h2 className="mb-4 text-4xl font-bold text-zinc-800">
            {cart?.length ? "Previously saved products" : "Cart is empty"}
          </h2>
          {cart?.length > 0 && (
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button>
          )}
        </div>

        {cart?.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {cart?.map((item) => (
              <div
                key={item?.id}
                className="border rounded shadow p-4 max-w-3xl relative"
              >
                <button
                  onClick={() => handleDeleteFromCart(item?.id)}
                  className="absolute top-2 right-2"
                >
                  <LiaTimesSolid />
                </button>
                <div className="flex items-start">
                  <img
                    src={item?.imgSrc}
                    alt={item?.title}
                    className="w-48 h-48 mr-4 object-cover bg-indigo-500"
                  />
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-xl font-bold mb-4">{item?.name}</h3>
                    <p className="text-gray-600 mb-4">{item?.description}</p>
                    <span className="text-lg font-bold mb-4">
                      {item?.price}$
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Alert
        variant="info"
        title="Удаление товара"
        subtitle="Товар был удален!"
        isOpen={alertData?.isOpen}
        onClose={alertData?.onClose}
      />
    </section>
  );
};

export default Cart;
