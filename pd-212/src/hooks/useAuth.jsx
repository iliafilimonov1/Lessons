import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { generateTokens } from "../utils/generateTokens";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Данные об аутентификации пользователя
  const [user, setUser] = useState(null);

  // Состояние загрузки
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authDataFromLocalStorage = localStorage?.getItem("authData");

    if (authDataFromLocalStorage) {
      const authData = JSON?.parse(authDataFromLocalStorage);
      setUser(authData?.user);
    }
    setIsLoading(false);
  }, []);

  // Регистрация пользователя
  const onRegister = async (userData) => {
    try {
      // const createResponse = await fetch("http://localhost:3000/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (!createResponse.ok) {
      //   throw new Error("Ошибка регистрации пользователя");
      // }

      // const createdUser = await createResponse?.json();
      // Получение всех пользователей
      const response = await fetch("http://localhost:3000/users");

      const users = await response?.json();

      if (!response?.ok) {
        throw new Error("Ошибка при запросе на сервер");
      }

      // Проверяем, существует ли уже суперпользователь
      const adminExists = users?.some((user) => user?.role === "admin");

      // Определяем роль нового пользователя
      const newUser = {
        ...userData,
        role: adminExists ? "user" : "admin",
      };

      // Отправка запроса на создание нового пользователя
      const createResponse = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON?.stringify(newUser),
      });

      if (!createResponse?.ok) {
        throw new Error("Ошибка регистрации пользователя");
      }

      const createdUser = await createResponse?.json();

      // Генерация токенов
      const tokens = generateTokens(createdUser.id, createdUser.login);

      // Сохранение информации о пользователе и токенах
      const authData = {
        user: createdUser,
        ...tokens,
      };

      onLogin(createdUser); // Выполняем вход после регистрации

      localStorage?.setItem("authData", JSON?.stringify(authData));

      setUser(createdUser);
      navigate("/home");
    } catch (error) {
      console.error("Ошибка при регистрации пользователя:", error);
    }
  };

  // Вход пользователя
  const onLogin = async (userData) => {
    try {
      const { login, password } = userData;

      const response = await fetch(
        `http://localhost:3000/users?login=${encodeURIComponent(login)}`
      );

      if (!response.ok) {
        throw new Error("Ошибка при запросе на сервер");
      }

      const users = await response.json();

      if (users?.length === 1 && users[0]?.password === password) {
        const user = users[0];

        if (user && user?.id) {
          const tokens = generateTokens(user?.id, user?.login);

          // Сохранение информации о пользователе и токенах
          const authData = {
            user,
            ...tokens,
          };

          localStorage?.setItem("authData", JSON?.stringify(authData));
          setUser(user);
          navigate("/home");
        } else {
          console.error("User ID is missing.");
        }
      } else {
        console.error("Неверное имя пользователя или пароль");
      }
    } catch (error) {
      console.error("Ошибка при входе пользователя:", error);
    }
  };

  // Выход пользователя
  const onLogout = () => {
    setUser(null);
    localStorage?.removeItem("authData");
    navigate("/");
  };

  const contextValue = { user, isLoading, onRegister, onLogin, onLogout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Хук для доступа к контексту аутентификации
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
