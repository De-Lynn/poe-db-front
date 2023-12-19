import { v1 } from "uuid"

const SET_RESULTS = 'SET-RESULTS'
const CHANGE_NAME_SORT = 'CHANGE-NAME-SORT'
const SORT_RESULTS_BY_NAME = 'SORT-RESULTS-BY-NAME'

let initialState = {
    results: [],
    resultsCount: null,
    // nameSortAsc: false
}

export const resultsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_RESULTS: {
            let newResults = [] as any

            if(action.newResults.baseWeapons)
                newResults = newResults.concat(action.newResults.baseWeapons?.map((r: any) => ({...r, id: v1()})))
            if(action.newResults.rareWeapons)  
                newResults = newResults.concat(action.newResults.rareWeapons?.map((r: any) => ({...r, id: v1()})))
            if(action.newResults.uniqueWeapons)
                newResults = newResults.concat(action.newResults.uniqueWeapons?.map((r: any) => ({...r, id: v1()})))
            
            if(action.newResults.baseArmour)
                newResults = newResults.concat(action.newResults.baseArmour?.map((r: any) => ({...r, id: v1()})))
            if (action.newResults.rareArmour) 
                newResults = newResults.concat(action.newResults.rareArmour?.map((r: any) => ({...r, id: v1()})))
            if (action.newResults.uniqueArmour) 
                newResults = newResults.concat(action.newResults.uniqueArmour?.map((r: any) => ({...r, id: v1()})))
           
            if (action.newResults.baseJewellery)
                newResults = newResults.concat(action.newResults.baseJewellery?.map((r: any) => ({...r, id: v1()})))
            if (action.newResults.rareJewellery)
                newResults = newResults.concat(action.newResults.rareJewellery?.map((r: any) => ({...r, id: v1()})))
            if (action.newResults.uniqueJewellery)
                newResults = newResults.concat(action.newResults.uniqueJewellery?.map((r: any) => ({...r, id: v1()})))

            if (action.newResults.baseFlasks)
                newResults = newResults.concat(action.newResults.baseFlasks?.map((r: any) => ({...r, id: v1()})))
            if (action.newResults.rareFlasks)
                newResults = newResults.concat(action.newResults.rareFlasks?.map((r: any) => ({...r, id: v1()})))
            if (action.newResults.uniqueFlasks)
                newResults = newResults.concat(action.newResults.uniqueFlasks?.map((r: any) => ({...r, id: v1()})))

            // console.log(newResults)
            return {...state, results: newResults ? newResults : action.newResults.results, resultsCount: action.newResults.resultsCount}    
        }
        case CHANGE_NAME_SORT: {
            return {...state, nameSortAsc: !state.nameSortAsc}
        }
        case SORT_RESULTS_BY_NAME: {
            let baseWeaponsResults = [...state.baseWeaponsResults]
            let rareWeaponsResult = [...state.rareWeaponsResult]
            let uniqueWeaponsResults = [...state.uniqueWeaponsResults]
            let baseArmourResults = [...state.baseArmourResults]
            let rareArmourResults = [...state.rareArmourResults]
            let uniqueArmourResults = [...state.uniqueArmourResults]
            let baseJewelleryResults = [...state.baseJewelleryResults]
            let rareJewelleryResults = [...state.rareJewelleryResults]
            let uniqueJewelleryResults = [...state.uniqueJewelleryResults]
            let baseFlasksResults = [...state.baseFlasksResults]
            let rareFlasksResults = [...state.rareFlasksResults]
            let uniqueFlasksResults = [...state.uniqueFlasksResults]
            if (state.nameSortAsc) {
                baseWeaponsResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                rareWeaponsResult.sort((x: any, y:any) => x.name.localeCompare(y.name))
                uniqueWeaponsResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                baseArmourResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                rareArmourResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                uniqueArmourResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                baseJewelleryResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                rareJewelleryResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                uniqueJewelleryResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                baseFlasksResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                rareFlasksResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
                uniqueFlasksResults.sort((x: any, y:any) => x.name.localeCompare(y.name))
            } else {
                baseWeaponsResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                rareWeaponsResult.sort((x: any, y:any) => y.name.localeCompare(x.name))
                uniqueWeaponsResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                baseArmourResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                rareArmourResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                uniqueArmourResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                baseJewelleryResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                rareJewelleryResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                uniqueJewelleryResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                baseFlasksResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                rareFlasksResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
                uniqueFlasksResults.sort((x: any, y:any) => y.name.localeCompare(x.name))
            }
            return {
                ...state, 
                baseWeaponsResults: baseWeaponsResults,
                rareWeaponsResult: rareWeaponsResult,
                uniqueWeaponsResults: uniqueWeaponsResults,
                baseArmourResults: baseArmourResults,
                rareArmourResults: rareArmourResults,
                uniqueArmourResults: uniqueArmourResults,
                baseJewelleryResults: baseJewelleryResults,
                rareJewelleryResults: rareJewelleryResults,
                uniqueJewelleryResults: uniqueJewelleryResults,
                baseFlasksResults: baseFlasksResults,
                rareFlasksResults: rareFlasksResults,
                uniqueFlasksResults: uniqueFlasksResults,
            }
        }
        default:
            return state
    }
}

export const setResults = (newResults: any) => ({type: SET_RESULTS, newResults: newResults})
export const changeNameSort = () => ({type: CHANGE_NAME_SORT})
export const sortResultsByName = () => ({type: SORT_RESULTS_BY_NAME})