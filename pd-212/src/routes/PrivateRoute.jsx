import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

/**
 * Компонент для приватных роутов
 * @param {object} props - Свойства компонента
 * @param {JSX.Element} props.element - Компонент для отображения
 * @param {string} props.requiredRole - Роль для доступа к роуту
 * @returns {JSX.Element} - Компонент React
 */
const PrivateRoute = ({ element, requiredRole }) => {
  // Достаем данные пользователя и состояние загрузки
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user && user?.role !== requiredRole) {
    return <Navigate to="/forbidden" />;
  }

  return element;
};

export default PrivateRoute;
