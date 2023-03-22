import React from "react";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Link = "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"; //Api Link

const ApiRequest = () => {

    // Used RTK QUERY to Fetch Data form  the  API
  const fetchData = createAsyncThunk("data/fetchData", async () => {
    const { data } = await axios.get(Link);
    return data.data;
  });

  return {
    fetchData,
  };
};

export default ApiRequest;
