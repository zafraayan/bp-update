import { createSlice } from "@reduxjs/toolkit";
import { navItems } from "./Sidebar/array/arrays";

const initialState = {
  title: "",
  popup: true,
  disable: "auto",
  editPopup: {
    id: "",
    state: false,
  },
  // const [comps, setComps] = useState();
  forPrinting: "",
  toPrint: "",
};

const businessReducer = createSlice({
  name: "business",
  initialState,
  reducers: {
    setSliceId: (state, action) => {
      state.title = action.payload;
    },
    setPopup: (state, action) => {
      state.popup = action.payload;
    },
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
    setEditPopup: (state, action) => {
      state.editPopup = {
        ...state.editPopup, // Preserve existing properties
        ...action.payload, // Update only the ones provided in the payload
      };
    },
    setForPrinting: (state, action) => {
      state.forPrinting = action.payload;
    },
    setToPrint: (state, action) => {
      state.toPrint = { ...state.toPrint, ...action.payload };
    },
  },
});

export const {
  setSliceId,
  setPopup,
  setDisable,
  setEditPopup,
  setForPrinting,
  setToPrint,
} = businessReducer.actions;

export default businessReducer.reducer;
