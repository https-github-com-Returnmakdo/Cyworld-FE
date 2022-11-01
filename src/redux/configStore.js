import { configureStore } from "@reduxjs/toolkit";
import diaries from "./module/diaries";

const store = configureStore({
  reducer: { diaries },
});

export default store;
