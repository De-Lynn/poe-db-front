import { v1 } from "uuid"

const CLEAN_WEAPONS_FILTER_VALUES = 'CLEAN-WEAPONS-FILTER-VALUES'
const CHANGE_WEAPONS_FILTERS_VALUE = 'CHANGE-WEAPONS-FILTERS-VALUE'
const CHANGE_WEAPONS_FILTER_VISIBILITY = 'CHANGE-WEAPONS-FILTER-VISIBILITY'

let initialState = {
    weaponsFilters: [
        {id: v1(), title: 'Damage', minName: "minDamage", maxName: "maxDamage"},
        {id: v1(), title: 'Critical Chance', minName: "minCrit", maxName: "maxCrit",},
        {id: v1(), title: 'Attacks per Second', minName: "minAps", maxName: "maxAps",},
        {id: v1(), title: 'Damage per Second', minName: "minDps", maxName: "maxDps",},
    ],
    weaponsFiltersValues: {
        minDamage: null, maxDamage: null, minCrit: null, maxCrit: null, minAps: null, maxAps: null, minDps: null, maxDps: null
    },
    weaponFilterVisibility: true
}

export const weaponsFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
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
                minDamage: action.values.minDamage ? action.values.minDamage : null, 
                maxDamage: action.values.maxDamage ? action.values.maxDamage : null, 
                minCrit: action.values.minCrit ? action.values.minCrit : null, 
                maxCrit: action.values.maxCrit ? action.values.maxCrit : null, 
                minAps: action.values.minAps ? action.values.minAps : null, 
                maxAps: action.values.maxAps ? action.values.maxAps : null, 
                minDps: action.values.minDps ? action.values.minDps : null, 
                maxDps: action.values.maxDps ? action.values.maxDps : null
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

export const cleanWeaponsFilterValues = () => ({type: CLEAN_WEAPONS_FILTER_VALUES})
export const changeWeaponsFiltersValue = (values: object) => ({type: CHANGE_WEAPONS_FILTERS_VALUE, values: values})
export const changeWeaponsFilterVisibility = (visibility: boolean) => 
    ({type: CHANGE_WEAPONS_FILTER_VISIBILITY, visibility: visibility})