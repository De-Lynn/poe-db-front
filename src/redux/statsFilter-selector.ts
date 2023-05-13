export const getStatsFiltersVisibility = (state: any) => {
    return state.statsFilter.statsFilterVisibility
}

export const getStatsToSelect = (state: any) => {
    return state.statsFilter.statsToSelect
}

export const getSimilarStats = (state: any) => {
    return state.statsFilter.similarStats
}

export const getSelectedStatOrder = (state: any) => {
    return {stat_order: state.statsFilter.statSelectedStatOrder}
}

export const getStatsState = (state: any) => {
    return state.statsFilter
}