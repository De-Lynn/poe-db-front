import { v1 } from "uuid"

const CLEAN_FILTER_VALUES = 'CLEAN-FILTER-VALUES'
const CHANGE_ARMOUR_FILTERS_VALUE = 'CHANGE-ARMOUR-FILTERS-VALUE'
const CHANGE_ARMOUR_FILTER_VISIBILITY = 'CHANGE-ARMOUR-FILTER-VISIBILITY'

let initialState = {
    armourFilters: [
        {id: v1(), title: 'Armour', minName:"minArmour", maxName:"maxArmour"},
        {id: v1(), title: 'Evasion', minName:"minEvasion", maxName:"maxEvasion"},
        {id: v1(), title: 'Enegry Shield', minName:"minEs", maxName:"maxEs"},
        {id: v1(), title: 'Block', minName:"minBlock", maxName:"maxBlock"},
    ],
    armourFiltersValues: {
        minArmour: null, maxArmour: null, minEvasion: null, maxEvasion: null, minEs: null, maxEs: null, minBlock: null, maxBlock: null
    },
    armourFilterVisibility: true
}

export const armourFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CLEAN_FILTER_VALUES: {
            let stateCopy = {...state}
            stateCopy.armourFiltersValues = {...state.armourFiltersValues}
            stateCopy.armourFiltersValues = {
                minArmour: null, maxArmour: null, 
                minEvasion: null, maxEvasion: null, 
                minEs: null, maxEs: null, 
                minBlock: null, maxBlock: null
            }
            return stateCopy
        }
        case CHANGE_ARMOUR_FILTERS_VALUE: {
            let stateCopy = {...state}
            stateCopy.armourFiltersValues = {...state.armourFiltersValues}
            stateCopy.armourFiltersValues = {
                minArmour: action.values.minArmour ? action.values.minArmour : null, 
                maxArmour: action.values.maxArmour ? action.values.maxArmour : null, 
                minEvasion: action.values.minEvasion ? action.values.minEvasion : null, 
                maxEvasion: action.values.maxEvasion ? action.values.maxEvasion : null, 
                minEs: action.values.minEs ? action.values.minEs : null, 
                maxEs: action.values.maxEs ? action.values.maxEs : null, 
                minBlock: action.values.minBlock ? action.values.minBlock : null, 
                maxBlock: action.values.maxBlock ? action.values.maxBlock : null
            }
            return stateCopy
        }
        case CHANGE_ARMOUR_FILTER_VISIBILITY: {
            let stateCopy = {...state}
            stateCopy.armourFilterVisibility = {...state.armourFilterVisibility}
            stateCopy.armourFilterVisibility = action.visibility
            return stateCopy
        }
        default:
            return state
    }
}

export const cleanArmourFilterValues = () => ({type: CLEAN_FILTER_VALUES})
export const changeArmourFiltersValue = (values: object) => ({type: CHANGE_ARMOUR_FILTERS_VALUE, values: values})
export const changeArmourFilterVisibility = (visibility: boolean) => 
    ({type: CHANGE_ARMOUR_FILTER_VISIBILITY, visibility: visibility})