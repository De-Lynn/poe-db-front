import { v1 } from "uuid"

const CLEAN_REQUIREMENT_FILTER_VALUES = 'CLEAN-REQUIREMENT-FILTER-VALUES'
const CHANGE_REQUIREMENT_FILTERS_VALUE = 'CHANGE-REQUIREMENT-FILTERS-VALUE'
const CHANGE_REQUIREMENT_FILTER_VISIBILITY = 'CHANGE-REQUIREMENT-FILTER-VISIBILITY'

let initialState = {
    requirementFilters: [
        {id: v1(), title: 'Level', minName:"minLvl", maxName:"maxLvl"},
        {id: v1(), title: 'Strength', minName:"minStr", maxName:"maxStr"},
        {id: v1(), title: 'Dexterity', minName:"minDex", maxName:"maxDex"},
        {id: v1(), title: 'Intelligence', minName:"minInt", maxName:"maxInt"},
    ],
    requirementFiltersValues: {
        minLvl: null, maxLvl: null, minStr: null, maxStr: null, minDex: null, maxDex: null, minInt: null, maxInt: null
    },
    requirementFilterVisibility: true
}

export const requirementFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CLEAN_REQUIREMENT_FILTER_VALUES: {
            let stateCopy = {...state}
            stateCopy.requirementFiltersValues = {...state.requirementFiltersValues}
            stateCopy.requirementFiltersValues = {
                minLvl: null, maxLvl: null, 
                minStr: null, maxStr: null, 
                minDex: null, maxDex: null, 
                minInt: null, maxInt: null
            }
            return stateCopy
        }
        case CHANGE_REQUIREMENT_FILTERS_VALUE: {
            let stateCopy = {...state}
            stateCopy.requirementFiltersValues = {...state.requirementFiltersValues}
            stateCopy.requirementFiltersValues = {
                minLvl: action.values.minLvl ? action.values.minLvl : null, 
                maxLvl: action.values.maxLvl ? action.values.maxLvl : null, 
                minStr: action.values.minStr ? action.values.minStr : null, 
                maxStr: action.values.maxStr ? action.values.maxStr : null, 
                minDex: action.values.minDex ? action.values.minDex : null, 
                maxDex: action.values.maxDex ? action.values.maxDex : null, 
                minInt: action.values.minInt ? action.values.minInt : null, 
                maxInt: action.values.maxInt ? action.values.maxInt : null
            }
            return stateCopy
        }
        case CHANGE_REQUIREMENT_FILTER_VISIBILITY: {
            let stateCopy = {...state}
            stateCopy.requirementFilterVisibility = {...state.requirementFilterVisibility}
            stateCopy.requirementFilterVisibility = action.visibility
            return stateCopy
        }
        default:
            return state
    }
}

export const cleanRequirementFilterValues = () => ({type: CLEAN_REQUIREMENT_FILTER_VALUES})
export const changeRequirementFiltersValue = (values: object) => ({type: CHANGE_REQUIREMENT_FILTERS_VALUE, values: values})
export const changeRequirementFilterVisibility = (visibility: boolean) => 
    ({type: CHANGE_REQUIREMENT_FILTER_VISIBILITY, visibility: visibility})