import React from "react";
import { useAuth } from "../hooks/useAuth";
import useProducts from "../store/useProducts";
import PaymentForm from "../components/payment/PaymentForm/PaymentForm";
import OrderSummary from "../components/payment/OrderSummary/OrderSummary";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Checkout = () => {
  // Достаем из стора добавленные ранее товары
  const { cart } = useProducts();
  console.log(cart);

  // Достаем пользователя из кастомного хука
  const { user } = useAuth();
  console.log(user);

  return (
    <main className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto lg:max-w-none">
        <Link
          to="/cart"
          className="inline-flex text-indigo-500 hover:text-indigo-600 mb-8"
        >
          <IoIosArrowBack className="mr-1 w-5 h-5" />
          Go back
        </Link>

        <h2 className="mb-8 text-4xl font-bold text-zinc-800">Checkout page</h2>

        <div className="flex justify-between">
          <PaymentForm />
          <OrderSummary />
        </div>
      </div>
    </main>
  );
};

Checkout.displayName = "Checkout";

export default Checkout;
