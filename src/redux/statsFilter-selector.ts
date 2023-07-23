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
    let stat_order = state.statsFilter.statSelectedValue.map((s: any) => {
        return s.statOrder
    })
    return {stat_order: stat_order}
}

export const getStatsState = (state: any) => {
    return state.statsFilter
}

export const getSelectedStats = (state: any) => {
    return state.statsFilter.statSelectedValue
}