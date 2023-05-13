import { createSelector } from "@reduxjs/toolkit"
import store, { RootState } from "./redux-store"

export const getShowMenu = (state: any, id: string) => {
    state.categoryFilter.typeFilters.map( (f: { id: any }) => {
        if (f.id === id) {
            return state.categoryFilter.typeFilters.showMenu
        }
    })
}

// export const getShowMenu = createSelector(
//     (state: any) => state.categoryFilter.typeFilters,
//     (state: any, showMenu: boolean) => showMenu,
//     (typeFilters, id) => typeFilters.filter((f: any) => f.id === id)
// )

export const getSelectedValue = (state: any, id: string) => {
    state.categoryFilter.typeFilters.map( (f: { id: any }) => {
        if (f.id === id) {
            return state.categoryFilter.typeFilters.selectedValue
        }
    })
}

export const getSearchValue = (state: any, id: string) => {
    state.categoryFilter.typeFilters.map( (f: { id: any }) => {
        if (f.id === id) {
            return state.categoryFilter.typeFilters.searchValue
        }
    })
}
