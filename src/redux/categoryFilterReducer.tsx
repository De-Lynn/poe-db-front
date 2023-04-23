import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_TYPE_FILTERS = 'SET-TYPE-FILTERS'
const  CHANGE_CATEGORIES_STATE = 'CHANGE-CATEGORIES-STATE'
const  CHANGE_CATEGORIES_INPUT_VALUE = 'CHANGE-CATEGORIES-INPUT-VALUE'
const  CLEAN_CATEGORIES_INPUT_VALUE = 'CLEAN-CATEGORIES-INPUT-VALUE'

let initialState = {
    typeFilters: [
        {id: v1(), title: 'Категория предмета', header: 'Фильтр по типу', 
        content: [
            {id: v1(), option: 'Все'},
            {id: v1(), option: 'Любое оружие'},
            {id: v1(), option: 'Одноручное оружие'},
            {id: v1(), option: 'Любой доспех'},
            {id: v1(), option: 'Перчатки'},
        ], 
        state: false, filterValue: 'Все'},
        {id: v1(), title: 'Редкость предмета', header: 'Фильтр по типу', 
        content: [
            {id: v1(), option: 'Все'},
            {id: v1(), option: 'Обычный'},
            {id: v1(), option: 'Волшебный'},
            {id: v1(), option: 'Редкий'},
            {id: v1(), option: 'Уникальный'},
        ], 
        state: false, filterValue: 'Все'},
    ],
}

export const  categoryFilterSlice = createSlice({
    name: 'categoryFilter',
    initialState,
    reducers: {
        categoryFilterReducer: (state: any, action: any) => {
            switch (action.type) {
                // case SET_TYPE_FILTERS: {
                //     state.typeFilters = action.newTypeFilters
                //     break
                // }
                case CHANGE_CATEGORIES_STATE: {    
                    let filter = state.typeFilters.find( (f: { id: any }) => f.id === action.filterId)
                    if (filter) {
                        filter.state = action.newState
                        // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: [...state.typeFilters]})
                    }
                    return state
                }
                case CHANGE_CATEGORIES_INPUT_VALUE: {
                    let filter = state.typeFilters.find( (f: { id: any }) => f.id === action.filterId)
                    if (filter) {
                        filter.filterValue = action.value
                        // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: [...state.typeFilters]})
                    }
                    return state
                }
                case CLEAN_CATEGORIES_INPUT_VALUE: {
                    let newArray = state.typeFilters.map( (el: { filterValue: any }) => {
                        el.filterValue = action.value
                        return el
                    })
                    // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: newArray})
                    return state
                }
                default:
                    return state
            }
        }
    }
})

export const {categoryFilterReducer} = categoryFilterSlice.actions

export default categoryFilterSlice.reducer

// export const categoryFilterReducer = (state: any = initialState, action: any) => {
//     switch (action.type) {
//         // case SET_TYPE_FILTERS: {
//         //     state.typeFilters = action.newTypeFilters
//         //     break
//         // }
//         case CHANGE_CATEGORIES_STATE: {    
//             let filter = state.typeFilters.find( (f: { id: any }) => f.id === action.filterId)
//             if (filter) {
//                 filter.state = action.newState
//                 // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: [...state.typeFilters]})
//             }
//             return state
//         }
//         case CHANGE_CATEGORIES_INPUT_VALUE: {
//             let filter = state.typeFilters.find( (f: { id: any }) => f.id === action.filterId)
//             if (filter) {
//                 filter.filterValue = action.value
//                 // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: [...state.typeFilters]})
//             }
//             return state
//         }
//         case CLEAN_CATEGORIES_INPUT_VALUE: {
//             let newArray = state.typeFilters.map( (el: { filterValue: any }) => {
//                 el.filterValue = action.value
//                 return el
//             })
//             // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: newArray})
//             return state
//         }
//         default:
//             return state
//     }
// }

export const setTypeFilters = (newTypeFilters: any) => ({type: SET_TYPE_FILTERS, newTypeFilters: newTypeFilters})
export const changeCategoriesState = (newState: boolean, filterId: string) => 
    ({type: CHANGE_CATEGORIES_STATE, newState: newState, filterId: filterId})
export const changeCategoriesInputValue = (value: string, filterId: string) => 
    ({type: CHANGE_CATEGORIES_INPUT_VALUE, value: value, filterId: filterId})
export const cleanCategoriesInputValue = (value: string) => ({type: CLEAN_CATEGORIES_INPUT_VALUE, value: value})