import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { LiaTimesSolid } from "react-icons/lia";

/**
 * Компонент выдвигающейся панели.
 *
 * @param {Object} props - Свойства компонента.
 * @param {boolean} props.isOpen - Компонент открыт или закрыт.
 * @param {Function} props.onClose - Коллбек для закрытия компонента.
 * @param {string} [props.align="right"] - Позиционирование компонента.
 * @param {ReactNode} props.children - Дочерние элементы компонента.
 * @param {string} props.title - Заголовок компонента.
 */
export const Drawer = ({
  isOpen,
  onClose,
  children,
  align = "right",
  title,
}) => {
  const drawerRef = useRef(null);

  /**
   * Функция закрытия панели.
   *
   */
  const closeDrawer = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  /**
   * Обработчик клика за пределами компонента для закрытия.
   *
   * @param {Event} event - Событие клика.
   */
  const handleClick = useCallback(
    (event) => {
      if (drawerRef?.current && !drawerRef?.current?.contains(event?.target)) {
        closeDrawer();
      }
    },
    [drawerRef, closeDrawer]
  );

  /**
   * Обработчик закрытия компонента по нажатии клавиши Esc.
   *
   * @param {Event} event - Нажатие клавиши Esc.
   */
  const handleKeyPress = useCallback(
    (event) => {
      if (event?.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  /**
   * Добавляет/удаляет обработчик клика за пределами компонента при его открытии/закрытии.
   */
  useEffect(() => {
    if (isOpen) {
      document?.addEventListener("mousedown", handleClick);
      // Добавляем слушатель события keydown (нажатие клавиши Esc)
      document?.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      document?.removeEventListener("mousedown", handleClick);
      // Удаляем слушатель события keydown
      document?.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, handleClick, handleKeyPress]);

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
