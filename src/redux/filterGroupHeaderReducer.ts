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

export const filterGroupHeaderReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_FILTERS_VISIBILITY: {
            const updatedFilterId = action.filterId
            let stateCopy = {...state}
            stateCopy.filterHeaders = state.filterHeaders.map( (f: { id: string}) => {
                if (f.id === updatedFilterId) {
                    return {...f, visibility: action.visibility}
                }
                return f
            })
            return stateCopy
        }
        default:
            return state
    }
}

export const setFilterHeaders = (newFilterHeaders: any) => ({type: SET_FILTER_HEADERS, newFilterHeaders: newFilterHeaders})
export const changeFiltersVisibility = (visibility: boolean, filterId: string) => 
    ({type: CHANGE_FILTERS_VISIBILITY, visibility: visibility, filterId: filterId})
