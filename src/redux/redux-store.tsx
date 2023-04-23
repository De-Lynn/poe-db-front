import { combineReducers, configureStore } from '@reduxjs/toolkit'
import categoryFilterReducer from './categoryFilterReducer'
import filterGroupHeaderReducer from './filterGroupHeaderReducer'
import rangeFilterSlice from './rangeFilterReducer'

// let reducers = combineReducers({
//     categoryFilter: categoryFilterReducer,
//     filterGroupHeader: filterGroupHeaderReducer,
//     rangeFilter: rangeFilterReducer
// })

export const store = configureStore({
    reducer: {
        categoryFilter: categoryFilterReducer,
        filterGroupHeader: filterGroupHeaderReducer,
        rangeFilter: rangeFilterSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch