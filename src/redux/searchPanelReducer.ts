const  CHANGE_FILTERS_VISIBILITY = 'CHANGE-FILTERS-VISIBILITY'
const  SET_NAME_SHOW_MENU = 'SET-NAME-SHOW-MENU'
const  SET_NAME_SELECTED_VALUE = 'SET-NAME-SELECTED-VALUE'
const  SET_NAME_SEARCH_VALUE = 'SET-NAME-SEARCH-VALUE'
const SET_NAMES_POOL = 'SET-NAMES-POOL'

let initialState = {
    namesPool: [],
    nameShowMenu: false, nameSelectedValue: null, nameSearchValue: null,
    filtersValues: {
        minDamage: null, maxDamage: null, minCrit: null, maxCrit: null, minAps: null, maxAps: null, minDps: null, maxDps: null,
        minArmour: null, maxArmour: null, minEvasion: null, maxEvasion: null, minEs: null, maxEs: null, minBlock: null, maxBlock: null,
        minLvl: null, maxLvl: null, minStr: null, maxStr: null, minDex: null, maxDex: null, minInt: null, maxInt: null
    },
    filtersVisibility: true
}

export const searchPanelReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case CHANGE_FILTERS_VISIBILITY: {
            return {...state, filtersVisibility: action.visibility}
        }
        case SET_NAMES_POOL : {
            return {...state, namesPool: action.newPool}
        }
        case SET_NAME_SHOW_MENU: {
            return {...state, nameShowMenu: action.newState}
        }
        case SET_NAME_SELECTED_VALUE: {
            return {...state, nameSelectedValue: action.newValue}
        }
        case SET_NAME_SEARCH_VALUE: {
            return {...state, nameSearchValue: action.newValue}
        }
        default:
            return state
    }
}

export const setNameShowMenu = (newState: boolean) => ({type: SET_NAME_SHOW_MENU, newState: newState})
export const setNameSelectedValue = (newValue: string) => ({type: SET_NAME_SELECTED_VALUE, newValue: newValue})
export const setNameSearchValue = (newValue: string) => ({type: SET_NAME_SEARCH_VALUE, newValue: newValue})
export const setNamesPool = (newPool: Array<object>) => ({type: SET_NAMES_POOL, newPool: newPool})
export const changeFiltersVisibility = (visibility: boolean) => ({type: CHANGE_FILTERS_VISIBILITY, visibility:visibility})