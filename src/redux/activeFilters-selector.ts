export const getItemsCategory = (state: any) => {
    return state.categoryFilter.typeFilters[0].selectedCategory
}

export const getItemsType = (state: any) => {
    return {type: state.categoryFilter.typeFilters[0].selectedType}
}

export const getItemsRarity = (state: any) => {
    return {rarity: state.categoryFilter.typeFilters[1].selectedType}
}

export const getItemName = (state: any) => {
    return {name: state.searchPanel.nameSelectedValue}
}

// export const getItemsCategory = (state: any) => {
//     return state.categoryFilter.typeFilters[0].activeCategory
// }

// export const getItemsType = (state: any) => {
//     return {type: state.categoryFilter.typeFilters[0].activeType}
// }

// export const getItemsRarity = (state: any) => {
//     return {rarity: state.categoryFilter.typeFilters[1].activeType}
// }