import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
import { data } from "../data";

const App = () => {

  /**
   * Обработчик получения id карточки
   * @param {string} id - id карточки.
   */
  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <main id="app" className="py-8">
      <Counter/>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {data?.length > 0 &&
            data?.map((productInfo) => {
              return (
                <Card
                  onCardClick={() => handleClick(productInfo?.id)}
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

export default App;

