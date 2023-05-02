import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { categoryFilterReducer } from './categoryFilterReducer'
import { filterGroupHeaderReducer } from './filterGroupHeaderReducer'
import { rangeFilterReducer } from './rangeFilterReducer'
import { useDispatch } from 'react-redux'
import { resultsReducer } from './resultsReducer'
import { reducer as formReducer } from 'redux-form'
import { weaponsFilterReducer } from './weaponsFilterReducer'
import { armourFilterReducer } from './armourFilterReducer'
import { requirementFilterReducer } from './requirementFilterReducer'

const rootReducer = combineReducers({
    //filterGroupHeader: filterGroupHeaderReducer,
    categoryFilter: categoryFilterReducer,
    //rangeFilter: rangeFilterReducer,
    results: resultsReducer,
    form: formReducer,
    weaponsFilter: weaponsFilterReducer,
    armourFilter: armourFilterReducer,
    requirementFilter: requirementFilterReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store