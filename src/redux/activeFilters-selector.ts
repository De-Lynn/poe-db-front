export const getItemsCategory = (state: any) => {
    return state.categoryFilter.typeFilters[0].activeCategory
}

export const getItemsType = (state: any) => {
    return state.categoryFilter.typeFilters[0].activeType
}