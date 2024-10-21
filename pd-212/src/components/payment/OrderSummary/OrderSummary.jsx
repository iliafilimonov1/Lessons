import useProducts from "../../../store/useProducts";
import Stepper from "../../ui/Stepper/Stepper";

const OrderSummary = () => {
  // Получаем товары в корзине из стора
  const { cart } = useProducts();

  return (
    <div className="w-2/5">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-4 bg-white border  rounded-lg shadow-sm">
        <h3 className="sr-only">Items in your cart</h3>
        <ul role="list">
          {cart?.length > 0 && (
            <div className="flex flex-col">
              {cart?.map((item) => (
                <div
                  key={item?.id}
                  className="py-6 border-t px-4 max-w-3xl relative"
                >
                  <button
                    className="absolute top-4 right-4"
                  >
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="#4B5563"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
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
                        quantityValue={item?.cartQuantity}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ul>

        <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
          <div className="flex items-center justify-between">
            <dt className="text-sm">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">$64.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Shipping</dt>
            <dd className="text-sm font-medium text-gray-900">$5.00</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt className="text-sm">Taxes</dt>
            <dd className="text-sm font-medium text-gray-900">$5.52</dd>
          </div>
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <dt className="text-base font-medium">Total</dt>
            <dd className="text-base font-medium text-gray-900">$75.52</dd>
          </div>
        </dl>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <button
            type="submit"
            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
          >
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

OrderSummary.displayName = "OrderSummary";

export default OrderSummary;
