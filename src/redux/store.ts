import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,

}
const persistedReducer = persistReducer(persistConfig, authSlice)


export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
    }).concat(baseApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Initializing `persistor` is essential to enable Redux Persist. It allows the Redux state to be saved to and rehydrated from localStorage.
// Without calling `persistStore(store)`, the store won't persist, and state won't be retained across sessions.
export const persistor = persistStore(store);
