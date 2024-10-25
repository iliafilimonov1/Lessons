import { useState } from "react";

/**
 * Кастомный хук для контроля открытия/закрытия компонента
 */
const useDisclosure = () => {
  // Состояние открытости/закрытости компонента
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Функция для открытия компонента
   * @returns {void}
   */
  const onOpen = () => setIsOpen(true);

  /**
   * Функция для закрытия компонента
   * @returns {void}
   */
  const onClose = (event) => {
    debugger
    event?.stopPropagation();

    setIsOpen(false);
  };

  /**
   * Функция переключения состояния компонента
   * @returns {void}
   */
  const onToggle = () => setIsOpen((prevState) => !prevState);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
