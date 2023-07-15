export const getFilterHeaders = (state: any) => {
    return state.filterGroupHeader.filterHeaders
}

export const getCategoryFilters = (state: any) => {
    return state.categoryFilter.typeFilters
}

export const getCategoryFiltersVisibility = (state: any) => {
    return state.categoryFilter.categoryFilterVisibility
}

export const getRangeFilters = (state: any) => {
    return state.rangeFilter.rangeFilters
}

export const getNamesPool = (state: any) => {
    return state.searchPanel.namesPool
}

export const getNameShowMenu = (state: any) => {
    return state.searchPanel.nameShowMenu
}

export const getNameSelectedValue = (state: any) => {
    return state.searchPanel.nameSelectedValue
}

export const getNameSearchValue = (state: any) => {
    return state.searchPanel.nameSearchValue
}

export const getFiltersValue = (state: any) => {
    return state.searchPanel.filtersValues
}