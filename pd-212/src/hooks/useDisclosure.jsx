import React, { useState } from "react";

/**
 * Кастомный хук для контроля открытия/закрытия компонента
 */
const useDisclosure = () => {
  // Состояние открытости/закрытости компонента
  const [isOpen, setIsOPpen] = useState(false);

  /**
   * Функция для открытия компонента
   * @returns {void}
   */
  const onOpen = () => setIsOPpen(true);

  /**
   * Функция для закрытия компонента
   * @returns {void}
   */
  const onClose = () => setIsOPpen(false);

  /**
   * Функция переключения состояния компонента
   * @returns {void}
   */
  const onToggle = () => setIsOPpen((prevState) => !prevState);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
