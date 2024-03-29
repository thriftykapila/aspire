import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/account/accountSlice";

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
