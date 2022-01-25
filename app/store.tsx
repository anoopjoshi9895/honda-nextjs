import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "../feature/slideSlice";
import newsReducer from "../feature/newsSlice";
import footerReducer from "../feature/footerSlice";
import { commonReducer, productModelsReducer } from "alg-ecom-frontend-core";
export const store = configureStore({
  reducer: {
    slide: slideReducer,
    news: newsReducer,
    productModelsState: productModelsReducer,
    commonState: commonReducer,
    footer: footerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
