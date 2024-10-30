import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // register
        register: builder.mutation({
            query: (userInfo) => ({
                url: '/register',
                method: 'POST',
                body: userInfo,
            }),

            invalidatesTags: ["user"]
        }),

        // login

        login: builder.mutation({
            query: (userInfo) => ({
                url: '/login',
                method: 'POST',
                body: userInfo,
            }),
            invalidatesTags: ["user"]
        }),
        // other

    })
})


export const { useRegisterMutation ,useLoginMutation} = authApi;