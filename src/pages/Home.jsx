import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../redux/slices/filterSlice";
import { AppContext } from "../App";

import Sort from "../components/Sort/Sort";
import CardPizza from "../components/Card-pizza/CardPizza";
import CardSkeleton from "../components/Card-pizza/CardSkeleton";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

const Home = () => {
  const dispatch = useDispatch();
  // Из стора берем номер категории
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  // Из стора берем сортировку
  const sortType = useSelector((state) => state.filterSlice.sort);

  const { items, status } = useSelector((state) => state.pizzaSlice);

  // Через контекст вытаскиваем значение инпута
  const { searchValue } = React.useContext(AppContext);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onClickSortType = (obj) => {
    dispatch(setSort(obj));
  };

  const category = categoryId > 0 ? `category=${categoryId}` : "";

  const skeleton = [...new Array(6)].map((_, i) => <CardSkeleton key={i} />);

  const pizzas = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    )
    .map((item, i) => <CardPizza key={i} {...item} />);

  const getPizzas = async () => {
    setTimeout(() => {
      dispatch(
        fetchPizzas({
          category,
          sortType: sortType.sort,
        })
      );
    }, 500);
  };

  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sortType]);

  return (
    <>
      <Sort
        categoryId={categoryId}
        onClickCategory={onClickCategory}
        sortType={sortType}
        onClickSort={onClickSortType}
      />
      <h1 className="text">Все пиццы</h1>
      <div className="products">{status === "loading" ? skeleton : pizzas}</div>
    </>
  );
};

export default Home;
