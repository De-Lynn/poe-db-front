import { v1 } from "uuid"

const CLEAN_FILTER_VALUES = 'CLEAN-FILTER-VALUES'
const CHANGE_ARMOUR_FILTERS_VALUE = 'CHANGE-ARMOUR-FILTERS-VALUE'
const CHANGE_ARMOUR_FILTER_VISIBILITY = 'CHANGE-ARMOUR-FILTER-VISIBILITY'

let initialState = {
    armourFilters: [
        {id: v1(), title: 'Броня', minName:"armourMinValue", maxName:"armourMaxValue",
            // header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Уклонение', minName:"evasionMinValue", maxName:"evasionMaxValue",
            // header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Энергетический щит', minName:"esMinValue", maxName:"esMaxValue",
            // header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        {id: v1(), title: 'Блок', minName:"blockMinValue", maxName:"blockMaxValue",
            // header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', 
        },
        
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
                minArmour: action.values.armourMinValue ? action.values.armourMinValue : null, 
                maxArmour: action.values.armourMaxValue ? action.values.armourMaxValue : null, 
                minEvasion: action.values.evasionMinValue ? action.values.evasionMinValue : null, 
                maxEvasion: action.values.evasionMaxValue ? action.values.evasionMaxValue : null, 
                minEs: action.values.esMinValue ? action.values.esMinValue : null, 
                maxEs: action.values.esMaxValue ? action.values.esMaxValue : null, 
                minBlock: action.values.blockMinValue ? action.values.blockMinValue : null, 
                maxBlock: action.values.blockMaxValue ? action.values.blockMaxValue : null
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