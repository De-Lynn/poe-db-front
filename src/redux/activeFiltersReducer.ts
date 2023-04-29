import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_TYPE_FILTERS = 'SET-TYPE-FILTERS'
const  CHANGE_CATEGORIES_STATE = 'CHANGE-CATEGORIES-STATE'
const  CHANGE_CATEGORIES_INPUT_VALUE = 'CHANGE-CATEGORIES-INPUT-VALUE'
const  CLEAN_CATEGORIES_INPUT_VALUE = 'CLEAN-CATEGORIES-INPUT-VALUE'

let initialState = {
    activeFilters: [],
}

export const activeFiltersReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        // case SET_TYPE_FILTERS: {
        //     state.typeFilters = action.newTypeFilters
        //     break
        // }
        case CHANGE_CATEGORIES_STATE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, state: action.newState}
                }
                return f
            })
            return stateCopy
        }
        case CHANGE_CATEGORIES_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, filterValue: action.value}
                }
                return f
            })
            return stateCopy
        }
        case CLEAN_CATEGORIES_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { filterValue: any }) => {
                return {...f, filterValue: action.value}
            })
            return stateCopy
        }
        default:
            return state
    }
}

export const setTypeFilters = (newTypeFilters: any) => ({type: SET_TYPE_FILTERS, newTypeFilters: newTypeFilters})
export const changeCategoriesState = (newState: boolean, filterId: string) => 
    ({type: CHANGE_CATEGORIES_STATE, newState: newState, filterId: filterId})
export const changeCategoriesInputValue = (value: string, filterId: string) => 
    ({type: CHANGE_CATEGORIES_INPUT_VALUE, value: value, filterId: filterId})
export const cleanCategoriesInputValue = (value: string) => ({type: CLEAN_CATEGORIES_INPUT_VALUE, value: value})