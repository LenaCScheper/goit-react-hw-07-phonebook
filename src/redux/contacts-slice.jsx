import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6270114be1c7aec428eec3e7.mockapi.io/api/v1/',
  }),
  tagTypes: ['contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
      query: () => `/contacts/`,
      providesTags: ['contact'],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts/`,
        method: 'POST',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contact'],
    }),
    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactsMutation,
} = contactsApi;
