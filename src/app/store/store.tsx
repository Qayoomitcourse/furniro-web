import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './features/cart'
import  ProductSlice from './features/product'
// ...

export const store = configureStore({
  reducer: {
    cart:cartSlice,
    product: ProductSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch