import { v1 } from "uuid"

// const SET_RANGE_FILTERS = 'SET-RANGE-FILTERS'
// const CHANGE_FILTER_MIN_VALUE = 'CHANGE-FILTER-MIN-VALUE'
// const CHANGE_FILTER_MAX_VALUE = 'CHANGE-FILTER-MAX-VALUE'
// const SET_NEW_MIN_INPUT_VALUE = 'SET-NEW-MIN-INPUT-VALUE'
// const SET_NEW_MAX_INPUT_VALUE = 'SET-NEW-MAX-INPUT-VALUE'
const CLEAN_WEAPONS_FILTER_VALUES = 'CLEAN-WEAPONS-FILTER-VALUES'
const CHANGE_WEAPONS_FILTERS_VALUE = 'CHANGE-WEAPONS-FILTERS-VALUE'
const CHANGE_WEAPONS_FILTER_VISIBILITY = 'CHANGE-WEAPONS-FILTER-VISIBILITY'

// export type FilterValuesType = {
//     minDamage: null | string, 
//     maxDamage: null | string, 
//     minCrit: null | string, 
//     maxCrit: null | string, 
//     minAps: null | string, 
//     maxAps: null | string, 
//     minDps: null | string, 
//     maxDps: null | string
// } 

let initialState = {
    weaponsFilters: [
        {id: v1(), title: 'Damage', minName: "damageMinValue", maxName: "damageMaxValue"
            // header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Critical Chance', minName: "critMinValue", maxName: "critMaxValue",
            // header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Attacks per Second', minName: "apsMinValue", maxName: "apsMaxValue",
            // header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Damage per Second', minName: "dpsMinValue", maxName: "dpsMaxValue",
            // header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
    ],
    weaponsFiltersValues: {
        minDamage: null, maxDamage: null, minCrit: null, maxCrit: null, minAps: null, maxAps: null, minDps: null, maxDps: null
    },
    weaponFilterVisibility: true
}

export const weaponsFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        // case SET_RANGE_FILTERS: {
        //     state.rangeFilters = action.newRangeFilters
        //     return state
        // }
        // case CHANGE_FILTER_MIN_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.weaponsFilters = state.weaponsFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, minValue: action.newValue}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case CHANGE_FILTER_MAX_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.weaponsFilters = state.weaponsFilters.map((f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, maxValue: action.newValue}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case SET_NEW_MIN_INPUT_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.weaponsFilters = state.weaponsFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, newMinInputValue: action.newValue}
        //         }
        //         return f
        //     })
            
        //     return stateCopy
        // }
        // case SET_NEW_MAX_INPUT_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.weaponsFilters = state.weaponsFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, newMaxInputValue: action.newValue}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        case CLEAN_WEAPONS_FILTER_VALUES: {
            let stateCopy = {...state}
            stateCopy.weaponsFiltersValues = {...state.weaponsFiltersValues}
            stateCopy.weaponsFiltersValues = {
                minDamage: null, maxDamage: null, 
                minCrit: null, maxCrit: null, 
                minAps: null, maxAps: null, 
                minDps: null, maxDps: null
            }
            return stateCopy
        }
        case CHANGE_WEAPONS_FILTERS_VALUE: {
            let stateCopy = {...state}
            stateCopy.weaponsFiltersValues = {...state.weaponsFiltersValues}
            stateCopy.weaponsFiltersValues = {
                minDamage: action.values.damageMinValue ? action.values.damageMinValue : null, 
                maxDamage: action.values.damageMaxValue ? action.values.damageMaxValue : null, 
                minCrit: action.values.critMinValue ? action.values.critMinValue : null, 
                maxCrit: action.values.critMaxValue ? action.values.critMaxValue : null, 
                minAps: action.values.apsMinValue ? action.values.apsMinValue : null, 
                maxAps: action.values.apsMaxValue ? action.values.apsMaxValue : null, 
                minDps: action.values.dpsMinValue ? action.values.dpsMinValue : null, 
                maxDps: action.values.dpsMaxValue ? action.values.dpsMaxValue : null
            }
            return stateCopy
        }
        case CHANGE_WEAPONS_FILTER_VISIBILITY: {
            let stateCopy = {...state}
            stateCopy.weaponFilterVisibility = {...state.weaponFilterVisibility}
            stateCopy.weaponFilterVisibility = action.visibility
            return stateCopy
        }
        default:
            return state
    }
}

// export const setRangeFilters = (newRangeFilters: any) => ({type: SET_RANGE_FILTERS, newRangeFilters: newRangeFilters})
// export const changeFilterMinValue = (newValue: string, filterId: string) => 
//     ({type: CHANGE_FILTER_MIN_VALUE, newValue: newValue, filterId: filterId})
// export const changeFilterMaxValue = (newValue: string, filterId: string) => 
//     ({type: CHANGE_FILTER_MAX_VALUE, newValue: newValue, filterId: filterId})
export const cleanWeaponsFilterValues = () => ({type: CLEAN_WEAPONS_FILTER_VALUES})
// export const setNewMinInputValue = (newValue: string, filterId: string) => 
// ({type: SET_NEW_MIN_INPUT_VALUE, newValue: newValue, filterId: filterId})
// export const setNewMaxInputValue = (newValue: string, filterId: string) => 
//     ({type: SET_NEW_MAX_INPUT_VALUE, newValue: newValue, filterId: filterId})
export const changeWeaponsFiltersValue = (values: object) => ({type: CHANGE_WEAPONS_FILTERS_VALUE, values: values})
export const changeWeaponsFilterVisibility = (visibility: boolean) => 
    ({type: CHANGE_WEAPONS_FILTER_VISIBILITY, visibility: visibility})