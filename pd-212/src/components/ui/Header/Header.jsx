import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import Modal from "../Modal/Modal";
import SignIn from "../../auth/SignIn/SignIn";
import SignUp from "../../auth/SignUp/SignUp";
import useDisclosure from "../../../hooks/useDisclosure";
import { useAuth } from "../../../hooks/useAuth";

/** Массив пунктов меню */
const navItems = [
  { name: "Home", path: "/home" },
  { name: "Cards", path: "/cards" },
];

/**
 * Компонент Шапка.
 * @returns {JSX.Element} Элемент header.
 */
const Header = () => {
  // Кастомный хук для проверки данных пользователя, выхода
  const { user, onLogout } = useAuth();

  // Модалка для входа
  const signIn = useDisclosure();

  // Модалка для регистрации
  const signUp = useDisclosure();

  // Получаем информацию из адресной строки
  const location = useLocation();

  // Хук для направления пользователя в корзину товаров
  const navigate = useNavigate();

  /**
   * Определяет, активна ли ссылка.
   * @param {string} path - Путь ссылки.
   * @returns {boolean} ссылка активна или нет.
   */
  const isActiveLink = (path) => {
    return (
      location?.pathname === path ||
      (path === "/cards" && location?.pathname?.startsWith("/cards"))
    );
    // return location?.pathname === path; // Если нет вложенных страниц
  };

  // Обработчик открытия корзины товара
  const handleOpenCart = () => navigate("/cart");

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-2">
        <div className="relative flex justify-between h-16">
          <nav className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <img
                className="w-36 object-contain"
                src="../../../assets/header/logo.svg"
                alt="Logo"
              />
            </NavLink>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
              {user &&
                navItems?.length > 0 &&
                navItems?.map((item) => {
                  return (
                    <NavLink
                      to={item?.path}
                      key={item?.path}
                      className={`text-zinc-800 inline-flex items-center px-1 pt-1 text-sm ${
                        isActiveLink(item?.path)
                          ? "text-indigo-500 border-b-2 border-indigo-500"
                          : "hover:text-indigo-500"
                      }`}
                    >
                      {item?.name}
                    </NavLink>
                  );
                })}
            </div>
          </nav>
          {user && (
            <div className="flex items-center pr-2">
              <button
                onClick={handleOpenCart}
                id="cart"
                type="button"
                className={`relative bg-transparent p-1 mr-3 rounded-full    ${
                  location?.pathname === "/cart"
                    ? "text-indigo-500 hover:text-indigo-600"
                    : "text-gray-400 hover:text-gray-500"
                }`}
              >
                <svg
                  fill="currentColor"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M17 24H21V28H17zM24 24H28V28H24zM17 17H21V21H17zM24 17H28V21H24z"></path>
                  <path d="M28,11h-6V7c0-1.7-1.3-3-3-3h-6c-1.7,0-3,1.3-3,3v4H4c-0.6,0-1,0.4-1,1c0,0.1,0,0.1,0,0.2l1.9,12.1c0.1,1,1,1.7,2,1.7H15v-2	H6.9L5.2,13H28V11z M12,7c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v4h-8V7z"></path>
                </svg>
                {/* {!!cartCount && (
                <span className="w-5 h-5 text-xs px-1 leading-5 text-white inline-flex items-center justify-center bg-indigo-500 rounded-full absolute top-[-4px] right-[-4px]">
                  {cartCount}
                </span>
              )} */}
              </button>
            </div>
          )}

          <div id="buttons-wrapper" className="inline-flex items-center">
            {!user ? (
              <>
                <button
                  type="button"
                  className="border-2 text-indigo-500 border-indigo-500 font-medium py-2 px-4 rounded"
                  onClick={signIn?.onOpen}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={signUp?.onOpen}
                  className="ml-3 border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded"
                >
                  Register
                </button>
              </>
            ) : (
              <button
                type="button"
                className="ml-3 border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded"
                onClick={onLogout}
              >
                Logout
              </button>
            )}
          </div>
          <SignIn isOpen={signIn.isOpen} onClose={signIn.onClose} />
          <SignUp isOpen={signUp?.isOpen} onClose={signUp?.onClose} />
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
