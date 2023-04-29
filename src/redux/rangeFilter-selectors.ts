export const getFilterId = (state: any) => {
    return state.rangeFilter.rangeFilters.id
}

export const getFilterTitle = (state: any) => {
    return state.rangeFilter.rangeFilters.title
}

export const getNewMinInputValue = (state: any) => {
    return state.rangeFilter.rangeFilters.newMinInputValue
}

export const getNewMaxInputValue = (state: any) => {
    return state.rangeFilter.rangeFilters.newMiaxInputValue
}