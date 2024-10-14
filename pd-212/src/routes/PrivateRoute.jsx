import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ element }) => {
  // Достаем данные пользователя и состояние загрузки
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/forbidden" />;
  }

  return element;
};

export default PrivateRoute;
