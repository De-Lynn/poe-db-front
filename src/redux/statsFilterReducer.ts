import { v1 } from "uuid"

// const  SET_TYPE_FILTERS = 'SET-TYPE-FILTERS'
// const  CHANGE_CATEGORIES_STATE = 'CHANGE-CATEGORIES-STATE'
// const  CHANGE_CATEGORIES_INPUT_VALUE = 'CHANGE-CATEGORIES-INPUT-VALUE'
const  CLEAN_SELECTED_STAT = 'CLEAN-SELECTED-STAT'
const CHANGE_STATS_FILTER_VISIBILITY = 'CHANGE-STATS-FILTER-VISIBILITY'
const SET_STATS = 'SET-STATS'
const SET_SIMILAR_STATS = 'SET-SIMILAR-STATS'
//const SET_ACTIVE_STAT = 'SET-ACTIVE-STAT'
const  SET_STAT_SHOW_MENU = 'SET-STAT-SHOW-MENU'
const  SET_STAT_SELECTED_VALUE = 'SET-STAT-SELECTED-VALUE'
const  SET_STAT_SEARCH_VALUE = 'SET-STAT-SEARCH-VALUE'
const CHANGE_STAT_STATUS = 'CHANGE-STAT-STATUS'
const REMOVE_STAT = 'REMOVE-STAT'

let initialState = {
    statsToSelect: [
        //{id: v1(), stat: '+ Add Stat Filter', stat_order: 0},
    ],
    similarStats: [],
    statsFilterVisibility: true, //statOrder: null,
    statShowMenu: false, statSelectedValue: [], statSearchValue: null
}

export const statsFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
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
        case CLEAN_SELECTED_STAT: {
            return {...state, statSelectedValue: [], similarStats: []}
        }
        case SET_STATS: {
            return {...state, statsToSelect: action.stats}
        }
        case SET_SIMILAR_STATS: {
            return {...state, similarStats: action.stats}
        }
        case CHANGE_STATS_FILTER_VISIBILITY: {
            // let stateCopy = {...state}
            // stateCopy.categoryFilterVisibility = {...state.categoryFilterVisibility}
            // stateCopy.categoryFilterVisibility = action.visibility
            return {...state, statsFilterVisibility: action.visibility}
        }
        // case SET_ACTIVE_STAT: {
        //     return {...state, statOrder: action.statOrder}
        // }
        case SET_STAT_SHOW_MENU: {
            return {...state, statShowMenu: action.newState}
        }
        case SET_STAT_SELECTED_VALUE: {
            let stateCopy = {...state}
            stateCopy.statSelectedValue = [...state.statSelectedValue]
            stateCopy.statSelectedValue.push({checkedId: `checked${v1()}`, removeId: `remove${v1()}`, stat: action.newValue, statOrder: action.newStatOrder, status: true}) 
            console.log(stateCopy.statSelectedValue)
            return {...state, statSelectedValue: stateCopy.statSelectedValue}
        }
        case SET_STAT_SEARCH_VALUE: {
            return {...state, statSearchValue: action.newValue}
        }
        case CHANGE_STAT_STATUS: {
            let stateCopy = {...state}
            stateCopy.statSelectedValue = state.statSelectedValue.map((s: any) => {
                if (s.checkedId == action.id) {
                    return {...s, status: !s.status}
                }
                return s
            })
            return stateCopy
        }
        case REMOVE_STAT: {
            let stateCopy = {...state}
            stateCopy.statSelectedValue = state.statSelectedValue.filter((s: any) =>  s.removeId!=action.id)
            return stateCopy
        }
        default:
            return state
    }
}

// export const setTypeFilters = (newTypeFilters: any) => ({type: SET_TYPE_FILTERS, newTypeFilters: newTypeFilters})
// export const changeCategoriesState = (newState: boolean, filterId: string) => 
//     ({type: CHANGE_CATEGORIES_STATE, newState: newState, filterId: filterId})
// export const changeCategoriesInputValue = (value: string, filterId: string, category: string, optionType: string) => 
//     ({type: CHANGE_CATEGORIES_INPUT_VALUE, value: value, filterId: filterId, category: category, optionType: optionType})
export const cleanSelectedStat = () => ({type: CLEAN_SELECTED_STAT})
export const changeStatsFilterVisibility = (visibility: boolean) => ({type: CHANGE_STATS_FILTER_VISIBILITY, visibility:visibility})
export const setStats = (stats: Array<object>) => ({type: SET_STATS, stats: stats})
export const setSimilarStats = (stats: Array<object>) => ({type: SET_SIMILAR_STATS, stats: stats})
// const setActiveStat = (statOrder: any) => ({type: SET_ACTIVE_STAT, statOrder: statOrder})
export const setStatShowMenu = (newState: boolean) => ({type: SET_STAT_SHOW_MENU, newState: newState})
export const setStatSelectedValue = (newValue: string, newStatOrder: number) => (
    {type: SET_STAT_SELECTED_VALUE, newValue: newValue, newStatOrder: newStatOrder})
export const setStatSearchValue = (newValue: string) => ({type: SET_STAT_SEARCH_VALUE, newValue: newValue})
export const changeStatStatus = (id: string) => ({type: CHANGE_STAT_STATUS, id: id})
export const removeStat = (id: string) => ({type: REMOVE_STAT, id: id})