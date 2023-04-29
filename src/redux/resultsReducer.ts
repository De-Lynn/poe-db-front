import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_RESULTS= 'SET-RESULTS'

let initialState = {
    results: [],
}

export const resultsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_RESULTS: {
            let stateCopy = {...state}
            stateCopy.results = action.newResults
            return stateCopy
        }
        // case CHANGE_RANGE_MIN_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.rangeFilters = state.rangeFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, minValue: action.newValue}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case CHANGE_RANGE_MAX_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.rangeFilters = state.rangeFilters.map((f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, maxValue: action.newValue}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case SET_NEW_MIN_INPUT_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.rangeFilters = state.rangeFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, newMinInputValue: action.newValue}
        //         }
        //         return f
        //     })
            
        //     return stateCopy
        // }
        // case SET_NEW_MAX_INPUT_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.rangeFilters = state.rangeFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, newMaxInputValue: action.newValue}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case CLEAN_RANGE_VALUES: {
        //     let stateCopy = {...state}
        //     stateCopy.rangeFilters = state.rangeFilters.map( (el: { header: any; minValue: any; maxValue: any; newMinInputValue: any; newMaxInputValue: any }) => {
        //         if (el.header === action.header) {
        //             return {...el, minValue: action.newValue, maxValue: action.newValue, newMinInputValue: action.newValue, newMaxInputValue: action.newValue}
        //         }
        //         return el
        //     })
        //     return stateCopy
        // }
        default:
            return state
    }
}

export const setResults = (newResults: any) => ({type: SET_RESULTS, newResults: newResults})
// export const changeRangeMinValue = (newValue: string, filterId: string) => 
//     ({type: CHANGE_RANGE_MIN_VALUE, newValue: newValue, filterId: filterId})
// export const changeRangeMaxValue = (newValue: string, filterId: string) => 
//     ({type: CHANGE_RANGE_MAX_VALUE, newValue: newValue, filterId: filterId})
// export const cleanRangeValues = (newValue: string, header: string) => ({type: CLEAN_RANGE_VALUES, newValue: newValue, header: header})
// export const setNewMinInputValue = (newValue: string, filterId: string) => 
// ({type: SET_NEW_MIN_INPUT_VALUE, newValue: newValue, filterId: filterId})
// export const setNewMaxInputValue = (newValue: string, filterId: string) => 
//     ({type: SET_NEW_MAX_INPUT_VALUE, newValue: newValue, filterId: filterId})