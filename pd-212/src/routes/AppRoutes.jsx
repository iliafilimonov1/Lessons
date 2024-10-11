import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Cards from "../pages/Cards";
import CardDetails from "../pages/CardDetails";
import Cart from "../pages/Cart";

/** Массив роутов приложения */
const routes = [
  { path: "/", element: <Home /> },
  { path: "cards", element: <Cards /> },
  { path: "cards/:alias", element: <CardDetails /> },
  { path: "cart", element: <Cart /> },
];

/**
 * Рекурсивно отображает роуты и дочерние роуты.
 * @param {Array} routes - Массив объектов роута.
 * @returns {JSX.Element} JSX элемент роута.
 */
const renderRoutes = (routes) => {
  if (!routes?.length) {
    return null;
  }

  return routes?.map(({ path, element, children }) => (
    <Route key={path} path={path} element={element}>
      {children && renderRoutes(children)}
    </Route>
  ));
};

/** Корневой компонент приложения с роутами */
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {renderRoutes(routes)}
    </Route>
  </Routes>
);

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
