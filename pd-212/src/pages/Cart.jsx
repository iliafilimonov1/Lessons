import useProducts from "../store/useProducts";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import useDisclosure from "../hooks/useDisclosure";
import Alert from "../components/ui/Alert/Alert";
import Stepper from "../components/ui/Stepper/Stepper";

const Cart = () => {
  // Хук для навигации по страницам
  const navigate = useNavigate();

  // Показ/скрытие компонента Alert
  const alertData = useDisclosure();

  // Получение данных из стора: корзина, удаление, обновление товаров
  const { cart, deleteFromCart, updateCartQuantity } = useProducts();

  // Обработчик удаления товара и уведомления пользователя
  const handleDeleteFromCart = (productId) => {
    // Удаляем товар из стора
    deleteFromCart(productId);

    // Уведомляем пользователя
    alertData?.onOpen();
  };

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
            <button
              onClick={() => navigate(`/cart/checkout`)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            >
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
                  className="absolute top-4 right-4"
                >
                  
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="#d9d9d9"
                    ariaHidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
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
                    <Stepper
                      step={1}
                      id={item?.id}
                      onQuantityUpdate={(newQuantity) =>
                        updateCartQuantity(newQuantity, item?.id)
                      }
                      quantityValue={item?.cartQuantity}
                    />
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
