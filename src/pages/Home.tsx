import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setSort } from "../redux/slices/filterSlice";

import Sort from "../components/Sort/Sort";
import CardPizza from "../components/Card-pizza/CardPizza";
import CardSkeleton from "../components/Card-pizza/CardSkeleton";
import { fetchPizzas } from "../redux/slices/pizzaSlice";
import { RootState, useAppDispatch } from "../redux/store";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  // Из стора берем номер категории
  const categoryId = useSelector((state: RootState) => state.filterSlice.categoryId);
  // Из стора берем сортировку
  const sortType = useSelector((state: RootState) => state.filterSlice.sort);

  const { items, status } = useSelector((state: RootState) => state.pizzaSlice);

  const onClickCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onClickSortType = (obj: { name: string; sort: string }) => {
    dispatch(setSort(obj));
  };

  const category = categoryId > 0 ? `category=${categoryId}` : "";

  const skeleton = [...new Array(6)].map((_, i) => <CardSkeleton key={i} />);

  const pizzas = items.map((item, i) => <CardPizza key={i} {...item} />);

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
