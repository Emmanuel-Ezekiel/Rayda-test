import React from "react";
import { ImageData } from "../data/data";
import Header from "../component/navigation/nav";
import Profile from "../component/profile/profile";
import Items from "../component/items/items"
import "../styles/home.scss";
import { useGetDataQuery } from "../api/apiSlice"


const Home = () => {
  
  const { data, isLoading } = useGetDataQuery();

  //created a new data because the images from the server is showing image not found, so i downloaded the images from the figma, then join the new image and the data from the server;
  const newData = data?.data?.map((item: any, i: number): any => ({
    ...item,
    icon: ImageData[i % ImageData.length],
  }));

  return (
    <main>
      <Header />
      <section>
        <Profile />
        <Items data={newData} loading={isLoading}/>
      </section>
    </main>
  );
};

export default Home;
