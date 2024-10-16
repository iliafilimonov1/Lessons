import { useRef, useEffect } from "react";
import React from "react";

/**
 * Компонент изображения с ленивой загрузкой и асинхронным декодированием.
 * @param {Object} props - Свойства компонента.
 * @param {string} props.src - URL изображения.
 * @param {string} props.className - Класс CSS для изображения.
 * @param {string} props.alt - Альтернативный текст для изображения.
 * @param {boolean} props.isCritical - Флаг для критичных изображений.
 * @returns {JSX.Element} Элемент JSX.
 */
const Image = ({ src, className, alt, isCritical }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Время начала загрузки изображения
    const startTime = performance?.now();

    const loadImage = async () => {
      try {
        if (imgRef.current) {
          // Ленивая или мгновенная загрузка изображения
          imgRef.current.loading = isCritical ? "eager" : "lazy";
          // Асинхронное декодирование
          imgRef.current.decoding = "async";
          await imgRef?.current?.decode();
        }
      } catch (error) {
        console.error("Error decoding image:", error);
      } finally {
        // Время окончания загрузки изображения
        const endTime = performance?.now();
        console.log(`Image loading time: ${endTime - startTime} ms`);
      }
    };

    loadImage();
  }, [src, isCritical]);

  return (
    <img
      className={className}
      ref={imgRef}
      src={src}
      alt={alt}
      loading={isCritical ? "eager" : "lazy"}
      decoding="async"
      width="100%"
      height="auto"
    />
  );
};

Image.displayName = "Image";

export default Image;
