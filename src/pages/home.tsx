import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import ApiRequest from "../api/api";
import { ImageData } from "../data/data";
import Header from "../component/navigation/nav";
import Profile from "../component/profile/profile";
import "../styles/home.scss";

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

  // created a new data because the images from the server is showing invalid, so i downloaded the images from the figma, then join the new image and the data from the server;
  const newData = data?.map((item: any, i: number): any => ({
    ...item,
    icon: ImageData[i % ImageData.length],
  }));

  return (
    <main>
      <Header />
      <section>
        <Profile />
      </section>
    </main>
  );
};

export default Home;
