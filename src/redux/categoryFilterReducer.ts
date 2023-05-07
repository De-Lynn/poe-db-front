import { v1 } from "uuid"

const  SET_TYPE_FILTERS = 'SET-TYPE-FILTERS'
const  CHANGE_CATEGORIES_STATE = 'CHANGE-CATEGORIES-STATE'
const  CHANGE_CATEGORIES_INPUT_VALUE = 'CHANGE-CATEGORIES-INPUT-VALUE'
const  CLEAN_CATEGORIES_INPUT_VALUE = 'CLEAN-CATEGORIES-INPUT-VALUE'
const  CHANGE_FILTER_VISIBILITY = 'CHANGE-FILTER-VISIBILITY'

let initialState = {
    typeFilters: [
        {
            id: v1(), title: 'Item Category', header: 'Type Filters', 
            content: [
                {id: v1(), option: 'Any', category: 'any', type: 'default'},

                {id: v1(), option: 'Any weapon', category: 'weapon', type: 'default'},
                {id: v1(), option: 'One-Handed Weapon', category: 'weapon', type: 'one_hand_weapon'},
                {id: v1(), option: 'Bow', category: 'weapon', type: 'bow'},
                {id: v1(), option: 'Claw', category: 'weapon', type: 'claw'},
                {id: v1(), option: 'Any Dagger', category: 'weapon', type: 'dagger'},
                {id: v1(), option: 'Base Dagger', category: 'weapon', type: 'base_dagger'},
                {id: v1(), option: 'Rune Dagger', category: 'weapon', type: 'rune_dagger'},
                {id: v1(), option: 'One-Handed Axe', category: 'weapon', type: 'one_hand_axe'},
                {id: v1(), option: 'One-Handed Sword', category: 'weapon', type: 'one_hand_sword'},
                {id: v1(), option: 'Any One-Handed Mace', category: 'weapon', type: 'one_hand_mace'},
                {id: v1(), option: 'Base One-Handed Mace', category: 'weapon', type: 'base_one_hand_mace'},
                {id: v1(), option: 'Sceptre', category: 'weapon', type: 'sceptre'},
                {id: v1(), option: 'Any Staff', category: 'weapon', type: 'staff'},
                {id: v1(), option: 'Base Staff', category: 'weapon', type: 'base_staff'},
                {id: v1(), option: 'Warstaff', category: 'weapon', type: 'attack_staff'},
                {id: v1(), option: 'Two-Handed Axe', category: 'weapon', type: 'two_hand_axe'},
                {id: v1(), option: 'Two-Handed Mace', category: 'weapon', type: 'two_hand_mace'},
                {id: v1(), option: 'Two-Handed Sword', category: 'weapon', type: 'two_hand_sword'},
                {id: v1(), option: 'Wand', category: 'weapon', type: 'wand'},
                {id: v1(), option: 'Quiver', category: 'weapon', type: 'quiver'},

                {id: v1(), option: 'Any Armour', category: 'armour', type: 'armour'},
                {id: v1(), option: 'Body Armour', category: 'armour', type: 'body_armour'},
                {id: v1(), option: 'Boots', category: 'armour', type: 'boots'},
                {id: v1(), option: 'Gloves', category: 'armour', type: 'gloves'},
                {id: v1(), option: 'Helmet', category: 'armour', type: 'helmet'},
                {id: v1(), option: 'Shield', category: 'armour', type: 'shield'},
                
                {id: v1(), option: 'Any Accessory', category: 'jewellery', type: 'default'},
                {id: v1(), option: 'Amulet', category: 'jewellery', type: 'amulet'},
                {id: v1(), option: 'Belt', category: 'jewellery', type: 'belt'},
                {id: v1(), option: 'Ring', category: 'jewellery', type: 'ring'},

                {id: v1(), option: 'Any Jewel', category: 'jewel', type: 'default'},
                {id: v1(), option: 'Base Jewel', category: 'jewel', type: 'gloves'},
                {id: v1(), option: 'Abyss Jewel', category: 'jewel', type: 'default'},
                {id: v1(), option: 'Cluster Jewel', category: 'jewel', type: 'gloves'},

                {id: v1(), option: 'Flask', category: 'flask', type: 'default'},
            ], 
            state: false, filterValue: 'Any', activeCategory: 'any', activeType: 'default' 
        },
        {
            id: v1(), title: 'Item Rarity', header: 'Type Filters', 
            content: [
                {id: v1(), option: 'Any', category: 'any', type: 'any'},
                {id: v1(), option: 'Normal', category: 'normal', type: 'normal'},
                // {id: v1(), option: 'Волшебный', category: 'Weapon', type: 'default'},
                // {id: v1(), option: 'Редкий', category: 'Weapon', type: 'default'},
                {id: v1(), option: 'Unique', category: 'unique', type: 'unique'},
            ], 
            state: false, filterValue: 'Any', activeCategory: 'any', activeType: 'any'
        },
    ],
    categoryFilterVisibility: true,
}

export const categoryFilterReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_CATEGORIES_STATE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, state: action.newState}
                }
                return f
            })
            return stateCopy
        }
        case CHANGE_CATEGORIES_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { id: any }) => {
                if (f.id === action.filterId) {
                    return {...f, filterValue: action.value, activeCategory: action.category, activeType: action.optionType}
                }
                return f
            })
            return stateCopy
        }
        case CLEAN_CATEGORIES_INPUT_VALUE: {
            let stateCopy = {...state}
            stateCopy.typeFilters = state.typeFilters.map( (f: { filterValue: any }) => {
                return {...f, filterValue: action.value}
            })
            return stateCopy
        }
        case CHANGE_FILTER_VISIBILITY: {
            let stateCopy = {...state}
            stateCopy.categoryFilterVisibility = {...state.categoryFilterVisibility}
            stateCopy.categoryFilterVisibility = action.visibility
            return stateCopy
        }
        default:
            return state
    }
}

export const setTypeFilters = (newTypeFilters: any) => ({type: SET_TYPE_FILTERS, newTypeFilters: newTypeFilters})
export const changeCategoriesState = (newState: boolean, filterId: string) => 
    ({type: CHANGE_CATEGORIES_STATE, newState: newState, filterId: filterId})
export const changeCategoriesInputValue = (value: string, filterId: string, category: string, optionType: string) => 
    ({type: CHANGE_CATEGORIES_INPUT_VALUE, value: value, filterId: filterId, category: category, optionType: optionType})
export const cleanCategoriesInputValue = (value: string) => ({type: CLEAN_CATEGORIES_INPUT_VALUE, value: value})
export const changeFilterVisibility = (visibility: boolean) => ({type: CHANGE_FILTER_VISIBILITY, visibility:visibility})