import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.baseURL = 'https://62093c148f06050017619019.mockapi.io/api/v1/';

const errorNotice = () =>
  toast.error(
    "The request couldn't be processed. Some server issue has occured."
  );

export const FetchContacts = createAsyncThunk(
  'contacts/fetchContactSuccess',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      console.log('test');
      return data;
    } catch (error) {
      errorNotice();
      return rejectWithValue(error);
    }
  }
);

export const AddContact = createAsyncThunk(
  'contacts/addContactSuccess',
  async ({ name, number }, { rejectWithValue }) => {
    const contacts = { name: name, number: number };
    // const { data } = await axios.post('/contacts', contacts);
    // return data;

    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (error) {
      errorNotice();
      return rejectWithValue(error);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContactSuccess',
  async (contactId, { rejectWithValue }) => {
    // const { data } = await axios.delete(`/contacts/${contactId}`);
    // return data;
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      errorNotice();
      return rejectWithValue(error);
    }
  }
);