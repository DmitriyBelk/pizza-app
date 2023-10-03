import React from "react";

import Sort from "../components/Sort/Sort";
import CardPizza from "../components/Card-pizza/CardPizza";
import CardSkeleton from "../components/Card-pizza/CardSkeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности",
    sort: "rating",
  });

  const category = activeCategory > 0 ? `category=${activeCategory}` : "";

  React.useEffect(() => {
    fetch(
      `https://2580328108fa311f.mokky.dev/pizzas?${category}&sortBy=${sortType.sort}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setTimeout(() => {
          setItems(arr);
          setIsLoading(!isLoading);
          console.log(sortType.sort);
        }, 500);
      });
  }, [activeCategory, sortType]);

  return (
    <>
      <Sort
        activeCategory={activeCategory}
        onClickCategory={(i) => setActiveCategory(i)}
        sortType={sortType}
        onClickSort={(obj) => setSortType(obj)}
      />
      <h1 className="text">Все пиццы</h1>
      <div className="products">
        {isLoading
          ? [...new Array(6)].map((_, i) => <CardSkeleton key={i} />)
          : items.map((item, i) => <CardPizza key={i} {...item} />)}
      </div>
    </>
  );
};

export default Home;
