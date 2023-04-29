import { useSelector } from "react-redux"
import { getItemsCategory, getItemsType } from "./redux/activeFilters-selector"
import axios from "axios"
import { setResults } from "./redux/resultsReducer"
import { useDispatch } from "react-redux"
import { getResults } from "./redux/results-selector"

export function Controls(props: any) {
    let dispatch = useDispatch()
    let category = useSelector(getItemsCategory)
    let type = useSelector(getItemsType)
    let results = useSelector(getResults)
    const onSearchClickHandler = () => {
        if (results.length !== 0) {
            dispatch(setResults([]))
        }
        // if (useSelector(getResults).length === 0) {
        //     axios.get(`http://localhost:8080/api/weapon?type=${type}`).then(response => {
        //         dispatch(setResults(response.data.weapons))
        //     })
        // }
        axios.get(`http://localhost:8080/api/${category}?type=${type}`).then(response => {
            dispatch(setResults(response.data.weapons))
        })
        //debugger
    }

    return (
        <div className='controls'>
            <div className='controls-center'>
            <button className='btn search-btn' type='button' onClick={onSearchClickHandler}>
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