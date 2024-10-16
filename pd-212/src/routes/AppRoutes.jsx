import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import CardDetails from "../pages/CardDetails";
import Cart from "../pages/Cart";
import Forbidden from "../pages/Forbidden";
import PrivateRoute from "../routes/PrivateRoute";
import { useAuth } from "../hooks/useAuth";
import Checkout from "../pages/Checkout";

/** Массив роутов приложения */
const routes = [
  { path: "/home", element: <PrivateRoute element={<Home />} /> },
  { path: "cards", element: <PrivateRoute element={<Cards />} /> },
  { path: "cards/:alias", element: <PrivateRoute element={<CardDetails />} /> },
  { path: "cart", element: <PrivateRoute element={<Cart />} /> },
  { path: "/cart/checkout", element: <PrivateRoute element={<Checkout />} /> },
  { path: "/forbidden", element: <Forbidden /> },
];

/**
 * Рекурсивно отображает роуты и дочерние роуты.
 * @param {Array} routes - Массив объектов роута.
 * @returns {JSX.Element} JSX элемент роута.
 */
const renderRoute = ({ path, element, children }) => (
  <Route key={path} path={path} element={element}>
    {children && children?.map(renderRoute)}
  </Route>
);

/** Корневой компонент приложения с роутами */
const AppRoutes = () => {
  // Хук для проверки авторизации
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {user && <Route path="/" element={<Navigate to="/home" replace />} />}
        {routes?.map(renderRoute)}
      </Route>
    </Routes>
  );
};

// Или так без компонента MainLayout
/** Корневой компонент приложения с роутами */
// const AppRoutes = () => (
//   <div className="flex flex-col min-h-screen">
//     <Header />
//     <main className="flex-grow container mx-auto p-4 mt-16">
//       <Routes>
//         <Route path="/" element={<Outlet />}>
//           {renderRoutes(routes)}
//         </Route>
//       </Routes>
//     </main>
//     <Footer />
//   </div>
// );

export default AppRoutes;
