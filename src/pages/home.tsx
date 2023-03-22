import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import ApiRequest from "../api/api";

const Home = () => {
  //state from the store
  const { data }: any = useAppSelector((state) => state.data);

  //Api function
  const { fetchData } = ApiRequest();
  //Redux action
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return <div></div>;
};

export default Home;
