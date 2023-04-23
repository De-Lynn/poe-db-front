import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_RANGE_FILTERS = 'SET-RANGE-FILTERS'
const  CHANGE_RANGE_MIN_VALUE = 'CHANGE-RANGE-MIN-VALUE'
const  CHANGE_RANGE_MAX_VALUE = 'CHANGE-RANGE-MAX-VALUE'
const  SET_NEW_MIN_INPUT_VALUE = 'SET-NEW-MIN-INPUT-VALUE'
const  SET_NEW_MAX_INPUT_VALUE = 'SET-NEW-MAX-INPUT-VALUE'
const  CLEAN_RANGE_VALUES = 'CLEAN-RANGE-VALUES'

let initialState = {
    rangeFilters: [
        {id: v1(), title: 'Урон', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Шанс критического удара', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Атак в секунду', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Урон в секунду', header: 'Фильтры оружия', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Броня', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Уклонение', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Энергетический щит', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Блок', header: 'Фильтры защиты', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Уровень', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Сила', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Ловкость', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
        {id: v1(), title: 'Интеллект', header: 'Требования', minValue: '', maxValue: '', newMinInputValue: '', newMaxInputValue: ''},
    ],
}

export const  rangeFilterSlice = createSlice({
    name: 'rangeFilter',
    initialState,
    reducers: {
        rangeFilterReducer: (state: any, action: any) => {
            switch (action.type) {
                // case SET_RANGE_FILTERS: {
                //     state.rangeFilters = action.newRangeFilters
                //     return state
                // }
                case CHANGE_RANGE_MIN_VALUE: {
                    let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
                    if (filter) {
                        filter.minValue = action.newValue
                        // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
                    }
                    return {...state}
                }
                case CHANGE_RANGE_MAX_VALUE: {
                    let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
                    if (filter) {
                        filter.maxValue = action.newValue
                        // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
                    }
                    return {...state}
                }
                case SET_NEW_MIN_INPUT_VALUE: {
                    // let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
                    // if (filter) {
                    //     filter.newMinInputValue = action.newValue
                    //     // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
                    // }
                    // return state
                    const updatedFilterId = action.filterId
                    const newFilters = state.rangeFilters.map( (f: { id: any }) => {
                        if (f.id === updatedFilterId) {
                            return {...f, newMinInputValue: action.newValue}
                        }
                        return f
                    })
                    
                    return newFilters
                }
                case SET_NEW_MAX_INPUT_VALUE: {
                    let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
                    if (filter) {
                        filter.newMaxInputValue = action.newValue
                        // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
                    }
                    return {...state}
                }
                case CLEAN_RANGE_VALUES: {
                    let newArray = state.rangeFilters.map( (el: { header: any; minValue: any; maxValue: any; newMinInputValue: any; newMaxInputValue: any }) => {
                        if (el.header === action.header) {
                          el.minValue = action.newValue
                          el.maxValue = action.newValue
                          el.newMinInputValue = action.newValue
                          el.newMaxInputValue = action.newValue
                        }
                        return el
                    })
                    // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: newArray})
                    return {...state}
                }
                default:
                    return state
            }
        }
    }
})

export const {rangeFilterReducer} = rangeFilterSlice.actions

export default rangeFilterSlice.reducer

// export const rangeFilterReducer = (state: any = initialState, action: any) => {
//     switch (action.type) {
//         // case SET_RANGE_FILTERS: {
//         //     state.rangeFilters = action.newRangeFilters
//         //     return state
//         // }
//         case CHANGE_RANGE_MIN_VALUE: {
//             let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
//             if (filter) {
//                 filter.minValue = action.newValue
//                 // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
//             }
//             return {...state}
//         }
//         case CHANGE_RANGE_MAX_VALUE: {
//             let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
//             if (filter) {
//                 filter.maxValue = action.newValue
//                 // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
//             }
//             return {...state}
//         }
//         case SET_NEW_MIN_INPUT_VALUE: {
//             // let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
//             // if (filter) {
//             //     filter.newMinInputValue = action.newValue
//             //     // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
//             // }
//             // return state
//             const updatedFilterId = action.filterId
//             const newFilters = state.rangeFilters.map( (f: { id: any }) => {
//                 if (f.id === updatedFilterId) {
//                     return {...f, newMinInputValue: action.newValue}
//                 }
//                 return f
//             })
            
//             return newFilters
//         }
//         case SET_NEW_MAX_INPUT_VALUE: {
//             let filter = state.rangeFilters.find( (f: { id: any }) => f.id === action.filterId)
//             if (filter) {
//                 filter.newMaxInputValue = action.newValue
//                 // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: [...state.rangeFilters]})
//             }
//             return {...state}
//         }
//         case CLEAN_RANGE_VALUES: {
//             let newArray = state.rangeFilters.map( (el: { header: any; minValue: any; maxValue: any; newMinInputValue: any; newMaxInputValue: any }) => {
//                 if (el.header === action.header) {
//                   el.minValue = action.newValue
//                   el.maxValue = action.newValue
//                   el.newMinInputValue = action.newValue
//                   el.newMaxInputValue = action.newValue
//                 }
//                 return el
//             })
//             // this.dispatch({type: 'SET-RANGE-FILTERS', newRangeFilters: newArray})
//             return {...state}
//         }
//         default:
//             return state
//     }
// }

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