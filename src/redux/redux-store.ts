import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { categoryFilterReducer } from './categoryFilterReducer'
import { useDispatch } from 'react-redux'
import { resultsReducer } from './resultsReducer'
import { reducer as formReducer } from 'redux-form'
import { weaponsFilterReducer } from './weaponsFilterReducer'
import { armourFilterReducer } from './armourFilterReducer'
import { requirementFilterReducer } from './requirementFilterReducer'
import { statsFilterReducer } from './statsFilterReducer'
import { searchPanelReducer } from './searchPanelReducer'

const rootReducer = combineReducers({
    categoryFilter: categoryFilterReducer,
    results: resultsReducer,
    form: formReducer,
    weaponsFilter: weaponsFilterReducer,
    armourFilter: armourFilterReducer,
    requirementFilter: requirementFilterReducer,
    statsFilter: statsFilterReducer,
    searchPanel: searchPanelReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store