import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    currentSlide: 0,
    accountData: [
      {
        cardDisplayName: "Monkey Man",
        cardNumber: "1234567899876543",
        cardExpiry: "12/24",
        cardCvv: "123",
        freeze: false,
      },
      {
        cardDisplayName: "Praveen Man",
        cardNumber: "1234567899876543",
        cardExpiry: "12/24",
        cardCvv: "123",
        freeze: false,
      },
      {
        cardDisplayName: "Beer Man",
        cardNumber: "1234567899876543",
        cardExpiry: "12/24",
        cardCvv: "123",
        freeze: false,
      },
      {
        cardDisplayName: "Lion Man",
        cardNumber: "1234567899876543",
        cardExpiry: "12/24",
        cardCvv: "123",
        freeze: false,
      },
    ],
  },
  reducers: {
    setSlide: (state, { payload }) => {
      state.currentSlide = payload;
    },
    handleDeleteCard: (state) => {
      const updatedAccount = state.accountData
        .map((item, index) => {
          if (index === state.currentSlide) {
            return null;
          } else {
            return item;
          }
        })
        .filter(Boolean);
      state.accountData = updatedAccount;
    },
    handleFreezeCard: (state) => {
      const updatedAccount = state.accountData.map((item, index) => {
        if (index === state.currentSlide) {
          return { ...item, freeze: !item.freeze };
        } else {
          return item;
        }
      });
      state.accountData = updatedAccount;
    },
    addCard: (state, { payload }) => {
      state.accountData = [...state.accountData, payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSlide, handleDeleteCard, handleFreezeCard, addCard } =
  accountSlice.actions;

export default accountSlice.reducer;
