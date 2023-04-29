import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_TYPE_FILTERS = 'SET-TYPE-FILTERS'
const  CHANGE_CATEGORIES_STATE = 'CHANGE-CATEGORIES-STATE'
const  CHANGE_CATEGORIES_INPUT_VALUE = 'CHANGE-CATEGORIES-INPUT-VALUE'
const  CLEAN_CATEGORIES_INPUT_VALUE = 'CLEAN-CATEGORIES-INPUT-VALUE'

let initialState = {
    typeFilters: [
        {
            id: v1(), title: 'Категория предмета', header: 'Фильтр по типу', 
            content: [
                {id: v1(), option: 'Any', category: 'any', type: 'default'},
                {id: v1(), option: 'Any weapon', category: 'weapon', type: 'default'},
                {id: v1(), option: 'One-Handed Weapon', category: 'weapon', type: 'one_hand_weapon'},
                {id: v1(), option: 'Bow', category: 'weapon', type: 'bow'},
                {id: v1(), option: 'Claw', category: 'weapon', type: 'claw'},
                {id: v1(), option: 'Any Dagger', category: 'weapon', type: 'dagger'},
                {id: v1(), option: 'Base Dagger', category: 'weapon', type: 'base_dagger'},
                {id: v1(), option: 'Rune Dagger', category: 'weapon', type: 'rune_dagger'},
                {id: v1(), option: 'Любой доспех', category: 'Armour', type: 'default'},
                {id: v1(), option: 'Перчатки', category: 'Armour', type: 'gloves'},
            ], 
            state: false, filterValue: 'Any', activeCategory: 'Any', activeType: 'default' 
        },
        {
            id: v1(), title: 'Редкость предмета', header: 'Фильтр по типу', 
            content: [
                {id: v1(), option: 'Все', category: 'Any', type: 'default'},
                {id: v1(), option: 'Обычный', category: 'Weapon', type: 'default'},
                {id: v1(), option: 'Волшебный', category: 'Weapon', type: 'default'},
                {id: v1(), option: 'Редкий', category: 'Weapon', type: 'default'},
                {id: v1(), option: 'Уникальный', category: 'Weapon', type: 'default'},
            ], 
            state: false, filterValue: 'Все', activeCategory: 'Any', activeType: 'default'
        },
    ],
}

// export const  categoryFilterSlice = createSlice({
//     name: 'categoryFilter',
//     initialState,
//     reducers: {
//         categoryFilterReducer: (state: any, action: any) => {
//             switch (action.type) {
//                 // case SET_TYPE_FILTERS: {
//                 //     state.typeFilters = action.newTypeFilters
//                 //     break
//                 // }
//                 case CHANGE_CATEGORIES_STATE: {    
//                     let filter = state.typeFilters.find( (f: { id: any }) => f.id === action.filterId)
//                     if (filter) {
//                         filter.state = action.newState
//                         // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: [...state.typeFilters]})
//                     }
//                     return state
//                 }
//                 case CHANGE_CATEGORIES_INPUT_VALUE: {
//                     let filter = state.typeFilters.find( (f: { id: any }) => f.id === action.filterId)
//                     if (filter) {
//                         filter.filterValue = action.value
//                         // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: [...state.typeFilters]})
//                     }
//                     return state
//                 }
//                 case CLEAN_CATEGORIES_INPUT_VALUE: {
//                     let newArray = state.typeFilters.map( (el: { filterValue: any }) => {
//                         el.filterValue = action.value
//                         return el
//                     })
//                     // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: newArray})
//                     return state
//                 }
//                 default:
//                     return state
//             }
//         }
//     }
// })

// export const {categoryFilterReducer} = categoryFilterSlice.actions

// export default categoryFilterSlice.reducer

export const categoryFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        // case SET_TYPE_FILTERS: {
        //     state.typeFilters = action.newTypeFilters
        //     break
        // }
        case CHANGE_CATEGORIES_STATE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, state: action.newState}
                }
                return f
            })
            return stateCopy
        }
        case CHANGE_CATEGORIES_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, filterValue: action.value, activeCategory: action.category, activeType: action.optionType}
                }
                return f
            })
            return stateCopy
        }
        case CLEAN_CATEGORIES_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { filterValue: any }) => {
                return {...f, filterValue: action.value}
            })
            return stateCopy
            // let newArray = state.typeFilters.map( (el: { filterValue: any }) => {
            //     el.filterValue = action.value
            //     return el
            // })
            // // this.dispatch({type: 'SET-TYPE-FILTERS', newTypeFilters: newArray})
            // return state
        }
        default:
            return state
    }
}

export const setTypeFilters = (newTypeFilters: any) => ({type: SET_TYPE_FILTERS, newTypeFilters: newTypeFilters})
export const changeCategoriesState = (newState: boolean, filterId: string) => 
    ({type: CHANGE_CATEGORIES_STATE, newState: newState, filterId: filterId})
export const changeCategoriesInputValue = (value: string, filterId: string, category: string, optionType: string) => 
    ({type: CHANGE_CATEGORIES_INPUT_VALUE, value: value, filterId: filterId, category: category, optionType: optionType})
export const cleanCategoriesInputValue = (value: string) => ({type: CLEAN_CATEGORIES_INPUT_VALUE, value: value})