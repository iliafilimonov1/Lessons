import { useEffect } from "react";
import {
  IoInformationCircle,
  IoWarning,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";

//  Стили для variant
const variantClasses = {
  info: "border-l-4 border-blue-600 bg-blue-200 text-zinc-800",
  warning: "border-l-4 border-amber-600 bg-amber-200 text-zinc-800",
  success: "border-l-4 border-emerald-600 bg-emerald-200 text-zinc-800",
  error: "border-l-4 border-rose-600 bg-rose-200 text-zinc-800",
  neutral: "border-l-4 border-neutral-600 bg-neutral-200 text-zinc-800",
};

// Варианты иконок
const defaultIconVariants = {
  info: <IoInformationCircle className="w-6 h-6 text-blue-600" />,
  warning: <IoWarning className="w-6 h-6 text-amber-600" />,
  success: <IoCheckmarkCircleOutline className="w-6 h-6 text-emerald-600" />,
  error: <VscError className="w-6 h-6 text-rose-600" />,
};

// Стили для align
const alignClasses = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

/**
 * Компонент уведомления.
 * @param {object} props - Свойства компонента.
 * @param {string} props.variant - Вариант компонента (info, warning, success, error).
 * @param {string} [props.align="bottom-left"] - Позиционирование компонента.
 * @param {string} props.title - Заголовок компонента.
 * @param {string} props.subtitle - Подзаголовок компонента.
 * @param {boolean} props.isOpen - Компонент показан/скрыт.
 * @param {function} props.onClose - Обработчик закрытия компонента (необязательно).
 * @param {React.ReactNode} props.icon - Пользовательская иконка (необязательно).
 * @returns {JSX.Element} Элемент JSX.
 */
const Alert = ({
  variant = "info",
  isOpen,
  icon,
  title,
  subtitle,
  align = "bottom-left",
  onClose,
}) => {
  // Вставка дефолтной или пользовательской иконки
  const iconVariant = icon || defaultIconVariants[variant];

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      // Очистка таймера при размонтировании компонента или изменении `isOpen`
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <div
      id="Alert"
      className={`inline-flex transform-gpu transition-transform duration-500 ease-in-out items-center ${
        variantClasses[variant]
      } ${alignClasses[align]} ${
        isOpen ? "translate-y-0" : "translate-y-96"
      } fixed bottom-4 left-4 z-10 w-[28rem] px-3 py-2 rounded-sm`}
      role="alert"
    >
      {iconVariant && <div id="icon">{iconVariant}</div>}
      <div className="ml-4 mr-4">
        {title && <h3 className="font-bold text-md text-zinc-800">{title}</h3>}
        {subtitle && <p className="text-md text-zinc-800">{subtitle}</p>}
      </div>
      <button className="absolute right-2 top-2" onClick={onClose}>
        <IoIosClose className="w-6 h-6 fill-zinc-800" />
      </button>
    </div>
  );
};

export default Alert;
