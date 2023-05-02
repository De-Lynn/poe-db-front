import { v1 } from "uuid"

const CLEAN_REQUIREMENT_FILTER_VALUES = 'CLEAN-REQUIREMENT-FILTER-VALUES'
const CHANGE_REQUIREMENT_FILTERS_VALUE = 'CHANGE-REQUIREMENT-FILTERS-VALUE'
const CHANGE_REQUIREMENT_FILTER_VISIBILITY = 'CHANGE-REQUIREMENT-FILTER-VISIBILITY'

let initialState = {
    requirementFilters: [
        {id: v1(), title: 'Уровень', minName:"lvlMinValue", maxName:"lvlMaxValue",
            // header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Сила', minName:"strMinValue", maxName:"strMaxValue",
            // header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Ловкость', minName:"dexMinValue", maxName:"dexMaxValue",
            // header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Интеллект', minName:"intMinValue", maxName:"intMaxValue",
            // header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        
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
                minLvl: action.values.lvlMinValue ? action.values.lvlMinValue : null, 
                maxLvl: action.values.lvlMaxValue ? action.values.lvlMaxValue : null, 
                minStr: action.values.strMinValue ? action.values.strMinValue : null, 
                maxStr: action.values.strMaxValue ? action.values.strMaxValue : null, 
                minDex: action.values.dexMinValue ? action.values.dexMinValue : null, 
                maxDex: action.values.dexMaxValue ? action.values.dexMaxValue : null, 
                minInt: action.values.intMinValue ? action.values.intMinValue : null, 
                maxInt: action.values.intMaxValue ? action.values.intMaxValue : null
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