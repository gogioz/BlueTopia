import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApiData = createAsyncThunk("apiData/fetchData", async () => {
  const articles = await axios.get("http://localhost:5000/articles");
  // const sponsers = await axios.get("http://localhost:5000/sponsers");
  // console.log(response.data.data);

  return articles.data.data;
});
