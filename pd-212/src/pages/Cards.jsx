import React from "react";
import Card from "../components/ui/Card/Card";
import { data } from "../../data";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  
  /**
   * Обработчик клика по карточке.
   * @param {object} data - Данные карточки.
   */
  const handleClick = (data) => {
    navigate(`/cards/${data?.id}`, { state: data });
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
