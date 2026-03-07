import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  day: '',
  month: '',
  year: '',
  hour: '',
  min: '',
  lat: 0,
  lon: 0,
  tzone: 0,
  birthplace: '',


  matchForm: {
    boyData: null,
    girlData: null,
  },
};

const daUserFormSlice = createSlice({
  name: 'daUserForm',
  initialState,
  reducers: {

    setdaUserForm: (state, action) => {
      const { name, birthplace, day, month, year, hour, min, lat, lon, tzone } =
        action.payload;
      state.name = name;
      state.birthplace = birthplace;
      state.day = day;
      state.month = month;
      state.year = year;
      state.hour = hour;
      state.min = min;
      state.lat = lat;
      state.lon = lon;
      state.tzone = tzone;
    },
    resetdaUserForm: () => initialState,

 
    setMatchData: (state, action) => {
      const { boyData, girlData } = action.payload;
      state.matchForm.boyData = boyData;
      state.matchForm.girlData = girlData;
    },
    resetMatchData: (state) => {
      state.matchForm = { boyData: null, girlData: null };
    },
  },
});

export const {
  setdaUserForm,
  resetdaUserForm,
  setMatchData,
  resetMatchData,
} = daUserFormSlice.actions;

export default daUserFormSlice.reducer;
