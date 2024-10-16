import React from "react";
import { useAuth } from "../hooks/useAuth";
import useProducts from "../store/useProducts";

const Checkout = () => {
  // Достаем из стора добавленные ранее товары
  const { cart } = useProducts();
  console.log(cart);

  // Достаем пользователя из кастомного хука
  const { user } = useAuth();
  console.log(user);

  return (
    <section id="home" className="max-w-7xl mx-auto px-2 relative">
      <h3>Checkout page</h3>
    </section>
  );
};

Checkout.displayName = "Checkout";

export default Checkout;
