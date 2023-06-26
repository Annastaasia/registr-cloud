import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
  reducerPath: 'user/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.sbercloud.ru',
  }),
  endpoints: (build) => ({
    sendData: build.mutation<
      ResponseData,
      {
        phone: string | null
        email: string | null
        nickname: string | null
        name: string | null
        surname: string | null
        sex: string | null
        advantages: string[]
        checkboxGroup: boolean[]
        radioGroup: boolean[]
        about: string | null
      }
    >({
      query: (body) => ({
        url: '/content/v1/bootcamp/frontend',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body,
      }),
    }),
  }),
})

export const { useSendDataMutation } = userApi