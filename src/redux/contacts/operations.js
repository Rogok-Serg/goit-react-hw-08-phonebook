// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thankApi) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return thankApi.rejectWithValue(error.message);
//     }
//   }
// );
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contacts, thankApi) => {
//     try {
//       const { data } = await axios.post('/contacts', contacts);
//       return data;
//     } catch (error) {
//       return thankApi.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, thankApi) => {
//     try {
//       const { data } = await axios.delete(`${'/contacts'}/${contactId}`);
//       return data;
//     } catch (error) {
//       return thankApi.rejectWithValue(error.message);
//     }
//   }
// );
