//  Форма оплаты заказа
const PaymentForm = () => {
  // В дз необходимо обработать форму и вывести данные в консоль

  return (
    <form className="flex flex-col w-2/5">
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Contact information
        </h2>

        <div className="mt-4">
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email-address"
              name="email-address"
              autoComplete="email"
              className="px-4 h-10 border block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-lg font-medium text-gray-900">
          Shipping information
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="apartment"
              className="block text-sm font-medium text-gray-700"
            >
              Apartment, suite, etc.
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="apartment"
                id="apartment"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="off"
                className="h-10 px-4 block bg-white border-gray-300 w-full border rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              State / Province
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="off"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              Postal code
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="h-10 px-4 block border w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">
            Delivery method
          </legend>

          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
            <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
              <input
                type="radio"
                name="delivery-method"
                value="Standard"
                className="sr-only"
                aria-labelledby="delivery-method-0-label"
                aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1"
              />
              <div className="flex-1 flex">
                <div className="flex flex-col">
                  <span
                    id="delivery-method-0-label"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Standard
                  </span>
                  <span
                    id="delivery-method-0-description-0"
                    className="mt-1 flex items-center text-sm text-gray-500"
                  >
                    4–10 business days
                  </span>
                  <span
                    id="delivery-method-0-description-1"
                    className="mt-6 text-sm font-medium text-gray-900"
                  >
                    $5.00
                  </span>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>

            <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
              <input
                type="radio"
                name="delivery-method"
                value="Express"
                className="sr-only"
                aria-labelledby="delivery-method-1-label"
                aria-describedby="delivery-method-1-description-0 delivery-method-1-description-1"
              />
              <div className="flex-1 flex">
                <div className="flex flex-col">
                  <span
                    id="delivery-method-1-label"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Express
                  </span>
                  <span
                    id="delivery-method-1-description-0"
                    className="mt-1 flex items-center text-sm text-gray-500"
                  >
                    2–5 business days
                  </span>
                  <span
                    id="delivery-method-1-description-1"
                    className="mt-6 text-sm font-medium text-gray-900"
                  >
                    $16.00
                  </span>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className="absolute -inset-px rounded-lg border-2 pointer-events-none"
                aria-hidden="true"
              ></div>
            </label>
          </div>
        </fieldset>
      </div>

      {/* Payment */}
      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-lg font-medium text-gray-900">Payment</h2>

        <fieldset className="mt-4">
          <legend className="sr-only">Payment type</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
            <div className="flex items-center">
              <input
                id="credit-card"
                name="payment-type"
                type="radio"
                checked
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="credit-card"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                Credit card
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="paypal"
                name="payment-type"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="paypal"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                PayPal
              </label>
            </div>

            <div className="flex items-center">
              <input
                id="etransfer"
                name="payment-type"
                type="radio"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label
                htmlFor="etransfer"
                className="ml-3 block text-sm font-medium text-gray-700"
              >
                eTransfer
              </label>
            </div>
          </div>
        </fieldset>

        <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
          <div className="col-span-4">
            <label
              htmlFor="card-number"
              className="block text-sm font-medium text-gray-700"
            >
              Card number
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="card-number"
                name="card-number"
                autoComplete="off"
                className="px-4 h-10 border block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="name-on-card"
              className="block text-sm font-medium text-gray-700"
            >
              Name on card
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="name-on-card"
                name="name-on-card"
                autoComplete="off"
                className="px-4 h-10 border block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="expiration-date"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration date (MM/YY)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="expiration-date"
                id="expiration-date"
                autoComplete="off"
                className="px-4 h-10 border block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="cvc"
              className="block text-sm font-medium text-gray-700"
            >
              CVC
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="cvc"
                id="cvc"
                autoComplete="csc"
                className="px-4 h-10 border block w-full border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

PaymentForm.displayName = "PaymentForm";

export default PaymentForm;
