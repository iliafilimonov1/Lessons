import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card/Card";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  // Состояние для хранения данных по карточкам
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((json) => setData(json));
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
        <h3>Cards page</h3>
        <div className="flex flex-wrap justify-between">
          {data?.length > 0 &&
            data?.map((productInfo) => {
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
