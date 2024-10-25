import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { LiaTimesSolid } from "react-icons/lia";

/**
 * Компонент выдвигающейся панели.
 * @param {Object} props - Свойства компонента.
 * @param {boolean} props.isOpen - Компонент открыт/закрыт.
 * @param {Function} props.onClose - Коллбек для закрытия компонента.
 * @param {string} [props.align="right"] - Позиционирование компонента.
 * @param {ReactNode} props.children - Дочерние элементы.
 * @param {string} props.title -  Заголовок компонента.
 */
export const Drawer = ({
  isOpen,
  onClose,
  children,
  align = "right",
  title,
}) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document?.addEventListener("mousedown", handleClick);
      document?.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      document?.removeEventListener("mousedown", handleClick);
      document?.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen]);

  // Функция закрытия
  const closeDrawer = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  // Обработчик клика за пределами компонента
  const handleClick = (event) => {
    // Проверяем, находится ли фокус на модальном окне
    if (drawerRef?.current && !drawerRef?.current?.contains(event?.target)) {
      // Закрываем Drawer, если Modal не открыт (WIP)
      if (!document?.querySelector(".modal")) {
        onClose();
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event?.key === "Escape" && !document?.querySelector(".modal")) {
      onClose();
    }
  };

  return (
    isOpen &&
    createPortal(
      <div className="absolute z-3 top-0 left-0 right-0 bottom-0 bg-opacity-70 bg-black">
        <aside
          ref={drawerRef}
          className={`fixed top-0 bottom-0 ${
            align === "right" ? "right-0" : "left-0"
          } right-0 z-3 w-2/6 p-8 bg-white transition-transform duration-300 ease-in-out`}
        >
          <header className="flex justify-between mb-4">
            {title && <h2 className="text-3xl font-bold mb-8">{title}</h2>}
            <button
              onClick={closeDrawer}
              className="text-gray-600 hover:text-gray-800 w-10 h-10 inline-flex justify-center items-center absolute top-0 right-0 text-xl"
            >
              <LiaTimesSolid />
            </button>
          </header>
          <main className="pt-0 pb-0">{children}</main>
          <footer className="flex justify-end mt-4"></footer>
        </aside>
      </div>,
      document.body
    )
  );
};
