import { v1 } from "uuid"

const  SET_RANGE_FILTERS = 'SET-RANGE-FILTERS'
const  CHANGE_RANGE_MIN_VALUE = 'CHANGE-RANGE-MIN-VALUE'
const  CHANGE_RANGE_MAX_VALUE = 'CHANGE-RANGE-MAX-VALUE'
const  SET_NEW_MIN_INPUT_VALUE = 'SET-NEW-MIN-INPUT-VALUE'
const  SET_NEW_MAX_INPUT_VALUE = 'SET-NEW-MAX-INPUT-VALUE'
const  CLEAN_RANGE_VALUES = 'CLEAN-RANGE-VALUES'

let initialState = {
    rangeFilters: [
        {id: v1(), title: 'Урон', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"damageMinValue", maxName:"damageMinValue"},
        {id: v1(), title: 'Шанс критического удара', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"critMinValue", maxName:"critMinValue"},
        {id: v1(), title: 'Атак в секунду', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"apsMinValue", maxName:"apsMinValue"},
        {id: v1(), title: 'Урон в секунду', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"dpsMinValue", maxName:"dpsMinValue"},
        {id: v1(), title: 'Броня', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"armourMinValue", maxName:"armourMinValue"},
        {id: v1(), title: 'Уклонение', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"evasionMinValue", maxName:"evasionMinValue"},
        {id: v1(), title: 'Энергетический щит', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"esMinValue", maxName:"esMinValue"},
        {id: v1(), title: 'Блок', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"blockMinValue", maxName:"blockMinValue"},
        {id: v1(), title: 'Уровень', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"lvlMinValue", maxName:"lvlMinValue"},
        {id: v1(), title: 'Сила', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"strMinValue", maxName:"strMinValue"},
        {id: v1(), title: 'Ловкость', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"dexMinValue", maxName:"dexMinValue"},
        {id: v1(), title: 'Интеллект', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: '', minName:"intMinValue", maxName:"intMinValue"},
    ],
    // activeRangeFilters: {
    //     minDamage: '', maxDamage: '', minCrit: '', maxCrit: '', minAps: '', maxAps: '', minDps: '', maxDps: '',
    //     minArmour: '', maxArmour: '', minEvasion: '', maxEvasion: '', minEs: '', maxEs: '', minBlock: '', maxBlock: '',
    //     minLvl: '', maxLvl: '', minStr: '', maxStr: '', minDex: '', maxDex: '', minInt: '', maxInt: '', 
    // }
}

export const rangeFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_RANGE_MIN_VALUE: {
            let stateCopy = {...state}
            stateCopy.rangeFilters = state.rangeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, minValue: action.newValue}
                }
                return f
            })
            return stateCopy
        }
        case CHANGE_RANGE_MAX_VALUE: {
            let stateCopy = {...state}
            stateCopy.rangeFilters = state.rangeFilters.map((f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, maxValue: action.newValue}
                }
                return f
            })
            return stateCopy
        }
        case SET_NEW_MIN_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.rangeFilters = state.rangeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, newMinInputValue: action.newValue}
                }
                return f
            })
            
            return stateCopy
        }
        case SET_NEW_MAX_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.rangeFilters = state.rangeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, newMaxInputValue: action.newValue}
                }
                return f
            })
            return stateCopy
        }
        case CLEAN_RANGE_VALUES: {
            let stateCopy = {...state}
            stateCopy.rangeFilters = state.rangeFilters.map( (el: { header: any; minValue: any; maxValue: any; newMinInputValue: any; newMaxInputValue: any }) => {
                if (el.header === action.header) {
                    return {...el, minValue: action.newValue, maxValue: action.newValue, newMinInputValue: action.newValue, newMaxInputValue: action.newValue}
                }
                return el
            })
            return stateCopy
        }
        default:
            return state
    }
}

export const setRangeFilters = (newRangeFilters: any) => ({type: SET_RANGE_FILTERS, newRangeFilters: newRangeFilters})
export const changeRangeMinValue = (newValue: string, filterId: string) => 
    ({type: CHANGE_RANGE_MIN_VALUE, newValue: newValue, filterId: filterId})
export const changeRangeMaxValue = (newValue: string, filterId: string) => 
    ({type: CHANGE_RANGE_MAX_VALUE, newValue: newValue, filterId: filterId})
export const cleanRangeValues = (newValue: string, header: string) => ({type: CLEAN_RANGE_VALUES, newValue: newValue, header: header})
export const setNewMinInputValue = (newValue: string, filterId: string) => 
({type: SET_NEW_MIN_INPUT_VALUE, newValue: newValue, filterId: filterId})
export const setNewMaxInputValue = (newValue: string, filterId: string) => 
    ({type: SET_NEW_MAX_INPUT_VALUE, newValue: newValue, filterId: filterId})