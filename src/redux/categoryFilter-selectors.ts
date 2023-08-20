export const getShowMenu = (state: any, id: string) => {
    state.categoryFilter.typeFilters.map( (f: { id: any }) => {
        if (f.id === id) {
            return state.categoryFilter.typeFilters.showMenu
        }
    })
}

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
