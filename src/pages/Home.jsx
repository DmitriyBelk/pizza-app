import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../redux/slices/filterSlice";
import { AppContext } from "../App";

import Sort from "../components/Sort/Sort";
import CardPizza from "../components/Card-pizza/CardPizza";
import CardSkeleton from "../components/Card-pizza/CardSkeleton";

const Home = () => {
  const dispatch = useDispatch();
  // Из стора берем номер категории
  const categoryId = useSelector(state => state.filterSlice.categoryId);
  // Из стора берем сортировку
  const sortType = useSelector(state => state.filterSlice.sort);



  // Через контекст вытаскиваем значение инпута
  const { searchValue } = React.useContext(AppContext);

  // Карточки товара
  const [items, setItems] = React.useState([]);
  // Прогрузился ли товар
  const [isLoading, setIsLoading] = React.useState(true);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  }

  const onClickSortType = (obj) => {
    dispatch(setSort(obj));
  }

  React.useEffect(() => {
    fetch(
      `https://2580328108fa311f.mokky.dev/pizzas?${category}&sortBy=${sortType.sort}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setTimeout(() => {
          setItems(arr);
          setIsLoading(!isLoading);
        }, 500);
      });
  }, [categoryId, sortType]);

  const category = categoryId > 0 ? `category=${categoryId}` : "";

  const skeleton = [...new Array(6)].map((_, i) => <CardSkeleton key={i} />);

  const pizzas = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .map((item, i) => <CardPizza key={i} {...item} />);

  return (
    <>
      <Sort
        categoryId={categoryId}
        onClickCategory={onClickCategory}
        sortType={sortType}
        onClickSort={onClickSortType}
      />
      <h1 className="text">Все пиццы</h1>
      <div className="products">{isLoading ? skeleton : pizzas}</div>
    </>
  );
};

export default Home;
