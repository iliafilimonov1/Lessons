import React, { useEffect } from "react";
import Card from "../components/ui/Card/Card";
import { useNavigate } from "react-router-dom";
import useProducts from "../store/useProducts";

const Cards = () => {
  // Достаем из стора продукты и метод получения данных
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  // хук react-router-dom для навигации по страницам
  const navigate = useNavigate();

  /**
   * Обработчик клика по карточке.
   * @param {object} cardData - Данные карточки.
   */
  const handleClick = (cardData) => {
    navigate(`/cards/${cardData?.alias}`, { state: cardData });
  };

  return (
    <main id="app" className="py-8">
      <div className="max-w-7xl mx-auto px-2">
        <h2 className="text-3xl font-bold">Cards page</h2>
        <div className="flex flex-wrap justify-between">
          {products?.length > 0 &&
            products?.map((productInfo) => {
              return (
                <Card
                  onCardClick={() => handleClick(productInfo)}
                  key={productInfo?.id}
                  details={productInfo}
                />
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Cards;
