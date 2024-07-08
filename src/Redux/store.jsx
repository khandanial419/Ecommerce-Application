import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import UserSlice from "./UserSlice";
const store = configureStore({
  reducer: { cart: cartReducer, user: UserSlice },
});

export default store;
