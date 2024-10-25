import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LiaTimesSolid } from "react-icons/lia";

/**
 * Компонент модальное окно.
 * @param {Object} props - Свойства компонента.
 * @param {boolean} props.isOpen - Компонент открыт/закрыт.
 * @param {string} props.title - Заголовок компонента.
 * @param {Function} props.onClose - Коллбек для закрытия компонента.
 * @param {ReactNode} props.children - Дочерние элементы.
 */
const Modal = ({ isOpen, title, onClose, children }) => {
  // Создаем ссылку на DOM-элемент
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document?.addEventListener("mousedown", handleOutsideClick, true);
      document?.addEventListener("keydown", handleKeyPress);
    }
    return () => {
      document?.removeEventListener("mousedown", handleOutsideClick, true);
      document?.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, onClose]);

  // Обработчик клика за пределами
  const handleOutsideClick = (event) => {
    if (modalRef?.current && !modalRef?.current?.contains(event?.target)) {
      // Закрываем только Modal
      event?.stopPropagation();
      onClose();
    }
  };

  // Обработчик нажатия клавиши Esc
  const handleKeyPress = (event) => {
    if (event?.key === "Escape") onClose();
  };

  return (
    isOpen &&
    createPortal(
      <div className="fixed z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-70 bg-black">
        <div
          ref={modalRef}
          onMouseDown={(e) => e.stopPropagation()}
          className="modal bg-white p-4 rounded shadow-md w-2/6"
        >
          <header className="flex justify-between mb-8">
            {title && <h2 className="text-3xl">{title}</h2>}
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 w-10 h-10 inline-flex justify-center items-center text-xl"
            >
              <LiaTimesSolid />
            </button>
          </header>
          <main className="modal-content pt-0 pb-0">{children}</main>
          <footer className="flex justify-end mt-4"></footer>
        </div>
      </div>,
      document.body
    )
  );
};

Modal.dislpayName = "Modal";

export default Modal;
