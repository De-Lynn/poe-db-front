import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_FILTER_HEADERS = 'SET-FILTER-HEADERS'
const  CHANGE_FILTERS_VISIBILITY = 'CHANGE-FILTERS-VISIBILITY'

let initialState = {
    filterHeaders: [
        { id: v1(), title: 'Фильтр по типу', visibility: true},
        { id: v1(), title: 'Фильтры оружия', visibility: true},
        { id: v1(), title: 'Фильтры защиты', visibility: true},
        { id: v1(), title: 'Требования', visibility: true},
        { id: v1(), title: 'Фильтр свойств', visibility: true}
    ],
}

export const  filterGroupHeaderSlice = createSlice({
    name: 'filterGroupHeader',
    initialState,
    reducers: { 
        filterGroupHeaderReducer: (state: any, action: any) => {
            switch (action.type) {
                // case SET_FILTER_HEADERS: {
                //     state.filterHeaders = action.newFilterHeaders
                //     return state
                // }
                case CHANGE_FILTERS_VISIBILITY: {
                    let filter = state.filterHeaders.find( (f: { id: any }) => f.id === action.filterId)
                    if (filter) {
                        filter.visibility = action.visibility
                        // this.dispatch({type: 'SET-FILTER-HEADERS', newFilterHeaders:[...state.filterHeaders]})
                    }
                    return state
                }
                default:
                    return state
            }
        }
    }
})

export const {filterGroupHeaderReducer} = filterGroupHeaderSlice.actions

export default filterGroupHeaderSlice.reducer

// export const filterGroupHeaderReducer = (state: any = initialState, action: any) => {
//     switch (action.type) {
//         // case SET_FILTER_HEADERS: {
//         //     state.filterHeaders = action.newFilterHeaders
//         //     return state
//         // }
//         case CHANGE_FILTERS_VISIBILITY: {
//             let filter = state.filterHeaders.find( (f: { id: any }) => f.id === action.filterId)
//             if (filter) {
//                 filter.visibility = action.visibility
//                 // this.dispatch({type: 'SET-FILTER-HEADERS', newFilterHeaders:[...state.filterHeaders]})
//             }
//             return state
//         }
//         default:
//             return state
//     }
// }

export const setFilterHeaders = (newFilterHeaders: any) => ({type: SET_FILTER_HEADERS, newFilterHeaders: newFilterHeaders})
export const changeFiltersVisibility = (visibility: boolean, filterId: string) => 
    ({type: CHANGE_FILTERS_VISIBILITY, visibility: visibility, filterId: filterId})
