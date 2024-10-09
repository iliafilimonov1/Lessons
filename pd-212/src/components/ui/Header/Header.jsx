import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import Modal from "../Modal/Modal";
import SignInModal from "../../pages/SigninModal/SignInModal";
import SignUpModal from "../../pages/SignUpModal/SignUpModal";
import useDisclosure from "../../../hooks/useDisclosure";

/** Массив пунктов меню */
const navItems = [
  { name: "Home", path: "/" },
  { name: "Cards", path: "/cards" },
];

/**
 * Компонент Шапка.
 * @returns {JSX.Element} Элемент header.
 */
const Header = () => {
  // Модалка для входа
  const signIn = useDisclosure();

  // Модалка для регистрации
  const signUp = useDisclosure();

  // Получаем информацию из адресной строки
  const location = useLocation();

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
              {navItems?.length > 0 &&
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
          <div id="buttons-wrapper" className="inline-flex items-center">
            <button
              type="button"
              onClick={signIn?.onOpen}
              className="border-2 text-indigo-500 border-indigo-500 font-medium py-2 px-4 rounded"
            >
              Sign in
            </button>
            <button
              onClick={signUp?.onOpen}
              type="button"
              className="ml-3 border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-2 px-4 rounded"
            >
              Sign up
            </button>
          </div>
          <SignInModal isOpen={signIn.isOpen} onClose={signIn.onClose} />
          <SignUpModal isOpen={signUp?.isOpen} onClose={signUp?.onClose} />
        </div>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
