import { baseApi } from "../../api/baseApi";

const foodItemsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Create food item
    createFoodItem: builder.mutation({
      query: (foodInfo) => ({
        url: "/foodItem-create",
        method: "POST",
        body: foodInfo,
      }),
      invalidatesTags: ["food"], // নতুন item যোগ করার পর Food ট্যাগ মেয়াদোত্তীর্ণ হবে
    }),

    findAllFoodItems: builder.query({
      query: ({
        page = 1,
        limit = 10,
        q = "",
        category = "",
        sorting = "",
      }) => {
        let url = `/foodItems?page=${page}&limit=${limit}&q=${q}`;

        // Add category and sorting to the query string if they exist
        if (category) url += `&category=${category}`;
        if (sorting) url += `&sorting=${sorting}`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["food"], // This will cache all food items
    }),

    // Find food item by ID
    findFoodItemById: builder.query({
      query: (id) => ({
        url: `foodItem/${id}`,
        method: "GET",
      }),
      providesTags: ["food"],
    }),
    // Find food item by ID
    findFoodCategory: builder.query({
      query: () => ({
        url: `foodItems-category`,
        method: "GET",
      }),
      providesTags: ["food"],
    }),

    // Update food item
    updateFoodItem: builder.mutation({
      query: ({ id, ...foodInfo }) => ({
        url: `foodItem/${id}`,
        method: "PUT",
        body: foodInfo,
      }),
      invalidatesTags: ["food"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),

    // Update food item
    addFoodReview: builder.mutation({
      query: ({ productId, body }) => ({
        url: `foodItem-review/${productId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["food"], // নির্দিষ্ট item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),

    // Delete food item
    deleteFoodItem: builder.mutation({
      query: (id) => ({
        url: `foodItem/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["food"], // মুছে ফেলা item এবং সব Food item ক্যাশ মেয়াদোত্তীর্ণ করবে
    }),
  }),
});

export const {
  useCreateFoodItemMutation,
  useFindAllFoodItemsQuery,
  useFindFoodItemByIdQuery,
  useUpdateFoodItemMutation,
  useDeleteFoodItemMutation,
  useFindFoodCategoryQuery,
  useAddFoodReviewMutation,
} = foodItemsApi;
