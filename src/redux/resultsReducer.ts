import { createSlice } from "@reduxjs/toolkit"
import { v1 } from "uuid"

const  SET_RESULTS = 'SET-RESULTS'
const  CLEAN_RESULTS = 'CLEAN-RESULTS'

let initialState = {
    baseWeaponsResults: [],
    uniqueWeaponsResults: [],
    baseArmourResults: [],
    uniqueArmourResults: [],
    baseJewelleryResults: [],
    uniqueJewelleryResults: [],
    baseFlasksResults: [],
    uniqueFlasksResults: [],
}

export const resultsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_RESULTS: {
            // let stateCopy = {...state}
            // if(action.newResults.baseWeapons) {
            //     stateCopy.baseWeaponsResults = action.newResults.baseWeaponsResults
            // } else if(action.newResults.uniqueWeapons) {
            //     stateCopy.uniqueWeaponsResults = action.newResults.uniqueWeaponsResults
            // }
            // let stateCopy = {...state}
            // stateCopy.baseWeaponsResults = {...state.baseWeaponsResults}
            // if(action.newResults.baseWeapons) {
            //     stateCopy.baseWeaponsResults = action.newResults.baseWeapons
            // }
            // if(action.newResults.uniqueWeapons) {
            //     stateCopy.uniqueWeaponsResults = action.newResults.uniqueWeapons
            // }
            // if(action.newResults.baseWeapons) {
            //     stateCopy.baseWeaponsResults = action.newResults.baseWeapons
            // }
            // if(action.newResults.uniqueWeapons) {
            //     stateCopy.uniqueWeaponsResults = action.newResults.uniqueWeapons
            // }
            return {
                ...state, 
                baseWeaponsResults: action.newResults.baseWeapons ? action.newResults.baseWeapons : [],
                uniqueWeaponsResults: action.newResults.uniqueWeapons ? action.newResults.uniqueWeapons : [],
                baseArmourResults: action.newResults.baseArmour ? action.newResults.baseArmour : [],
                uniqueArmourResults: action.newResults.uniqueArmour ? action.newResults.uniqueArmour : [],
                baseJewelleryResults: action.newResults.baseJewellery ? action.newResults.baseJewellery : [],
                uniqueJewelleryResults: action.newResults.uniqueJewellery ? action.newResults.uniqueJewellery : [],
                baseFlasksResults: action.newResults.baseFlasks ? action.newResults.baseFlasks : [],
                uniqueFlasksResults: action.newResults.uniqueFlasks ? action.newResults.uniqueFlasks : [],
            }
            // return stateCopy
        }
        // case CLEAN_RESULTS: {
        //     // let stateCopy = {...state}
        //     // stateCopy.baseWeaponsResults=[]
        //     // stateCopy.uniqueWeaponsResults=[]
        //     return {
        //         ...state, baseWeaponsResults: [], uniqueWeaponsResults: [], 
        //         baseArmourResults: [], uniqueArmourResults: [],
        //         baseJewelleryResults: [], uniqueJewelleryResults: [],
        //     }
        // }
        default:
            return state
    }
}

export const setResults = (newResults: any) => ({type: SET_RESULTS, newResults: newResults})
//export const cleanResults = () => ({type: CLEAN_RESULTS})