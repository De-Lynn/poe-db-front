import { v1 } from "uuid"

// const  SET_SHOW_MENU = 'SET-SHOW-MENU'
// const  SET_SELECTED_VALUE = 'SET-SELECTED-VALUE'
// const  SET_SEARCH_VALUE = 'SET-SEARCH-VALUE'
// const  CHANGE_CATEGORIES_STATE = 'CHANGE-CATEGORIES-STATE'
// const  CHANGE_CATEGORIES_INPUT_VALUE = 'CHANGE-CATEGORIES-INPUT-VALUE'
// const  CLEAN_CATEGORIES_INPUT_VALUE = 'CLEAN-CATEGORIES-INPUT-VALUE'
// const  CHANGE_FILTER_VISIBILITY = 'CHANGE-FILTER-VISIBILITY'

let initialState = {
    //showMenu: false, selectedValue: null, searchValue: null
}

export const dropdownReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        // case SET_SHOW_MENU: {
        //     return {...state, showMenu: action.newState}
        // }
        // case SET_SELECTED_VALUE: {
        //     return {...state, selectedValue: action.newValue}
        // }
        // case SET_SEARCH_VALUE: {
        //     return {...state, searchValue: action.newValue}
        // }
        // case CHANGE_CATEGORIES_STATE: {
        //     let stateCopy = {...state}
        //     stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, state: action.newState}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case CHANGE_CATEGORIES_INPUT_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
        //         if (f.id === action.filterId) {
        //             return {...f, filterValue: action.value, activeCategory: action.category, activeType: action.optionType}
        //         }
        //         return f
        //     })
        //     return stateCopy
        // }
        // case CLEAN_CATEGORIES_INPUT_VALUE: {
        //     let stateCopy = {...state}
        //     stateCopy.typeFilters = state.typeFilters.map( (f: { filterValue: any }) => {
        //         return {...f, filterValue: action.value}
        //     })
        //     return stateCopy
        // }
        // case CHANGE_FILTER_VISIBILITY: {
        //     let stateCopy = {...state}
        //     stateCopy.categoryFilterVisibility = {...state.categoryFilterVisibility}
        //     stateCopy.categoryFilterVisibility = action.visibility
        //     return stateCopy
        // }
        default:
            return state
    }
}

// export const setShowMenu = (newState: boolean) => ({type: SET_SHOW_MENU, newState: newState})
// export const setSelectedValue = (newValue: string) => ({type: SET_SELECTED_VALUE, newValue: newValue})
// export const setSearchValue = (newValue: string) => ({type: SET_SEARCH_VALUE, newValue: newValue})
// export const changeCategoriesState = (newState: boolean, filterId: string) => 
//     ({type: CHANGE_CATEGORIES_STATE, newState: newState, filterId: filterId})
// export const changeCategoriesInputValue = (value: string, filterId: string, category: string, optionType: string) => 
//     ({type: CHANGE_CATEGORIES_INPUT_VALUE, value: value, filterId: filterId, category: category, optionType: optionType})
// export const cleanCategoriesInputValue = (value: string) => ({type: CLEAN_CATEGORIES_INPUT_VALUE, value: value})
// export const changeFilterVisibility = (visibility: boolean) => ({type: CHANGE_FILTER_VISIBILITY, visibility:visibility})