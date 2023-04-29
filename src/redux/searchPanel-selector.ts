export const getFilterHeaders = (state: any) => {
    return state.filterGroupHeader.filterHeaders
}

export const getTypeFilters = (state: any) => {
    return state.categoryFilter.typeFilters
}

export const getRangeFilters = (state: any) => {
    return state.rangeFilter.rangeFilters
}