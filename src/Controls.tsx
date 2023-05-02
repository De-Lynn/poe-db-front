import { useSelector } from "react-redux"
import { getItemsCategory, getItemsRarity, getItemsType } from "./redux/activeFilters-selector"
import axios from "axios"
import { cleanResults, setResults } from "./redux/resultsReducer"
import { useDispatch } from "react-redux"
import { getBaseWeaponsResults, getResults, getUniqueWeaponsResults } from "./redux/results-selector"
import { getWeaponsFiltersValues } from "./redux/weaponsFilter-selectors"
import { createSearchParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { getArmourFiltersValues } from "./redux/armourFilter-selectors"
import { getRequirementFiltersValues } from "./redux/requirementFilter-selectors"

export function Controls(props: any) {
    let dispatch = useDispatch()
    let category = useSelector(getItemsCategory)
    let type = useSelector(getItemsType)
    let rarity = useSelector(getItemsRarity)
    let results = useSelector(getResults)
    let baseWeaponsResults = useSelector(getBaseWeaponsResults)
    let uniqueWeaponsResults = useSelector(getUniqueWeaponsResults)
    let weaponsFiltersValues = useSelector(getWeaponsFiltersValues)
    let armourFiltersValues = useSelector(getArmourFiltersValues)
    let requirementFiltersValues = useSelector(getRequirementFiltersValues)
    //const navigate = useNavigate()
    let request = `http://localhost:8080/api/${category}?`
    let searchParams

    // useEffect(() => {
    //     // let searchParams = new URLSearchParams(weaponsFiltersValues)
    //     // request += searchParams.toString()
    //     // console.log(request)
    //     //navigate(`${request}`);
    // }, [weaponsFiltersValues])

    const onSearchClickHandler = () => {
        if(category==='weapon') {
            searchParams = new URLSearchParams(rarity)
            request += `${searchParams.toString()}&`
            searchParams = new URLSearchParams(type)
            request += `${searchParams.toString()}&`
            searchParams = new URLSearchParams(weaponsFiltersValues)
            request += `${searchParams.toString()}&`
            searchParams = new URLSearchParams(requirementFiltersValues)
            request += searchParams.toString()
        }
        if(category==='armour') {
            searchParams = new URLSearchParams(rarity)
            request += `${searchParams.toString()}&`
            searchParams = new URLSearchParams(type)
            request += `${searchParams.toString()}&`
            searchParams = new URLSearchParams(armourFiltersValues)
            request += `${searchParams.toString()}&`
            searchParams = new URLSearchParams(requirementFiltersValues)
            request += searchParams.toString()
        }
        //alert(request)
        
        if (baseWeaponsResults.length !== 0 || uniqueWeaponsResults.length !== 0) {
            dispatch(cleanResults())
        }
        axios.get(request).then(response => {
            // dispatch(setResults(response.data.baseWeapons))
            dispatch(setResults(response.data))
        })
        //debugger
    }

    return (
        <div className='controls'>
            <div className='controls-center'>
            <button className='btn search-btn' type='button' 
                onClick={onSearchClickHandler}
            >
                <span>Поиск</span>
            </button>
            </div>
            <div className='controls-right'>
            <button className='btn clear-btn' type='button'>
                <span>Очистить</span>
            </button>
            <button className='btn toggle-search-btn' type='button'>
                <span className='chevron'></span>
                <span>Скрыть фильтры</span>
            </button>
            </div>
        </div>
    )
}