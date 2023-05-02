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