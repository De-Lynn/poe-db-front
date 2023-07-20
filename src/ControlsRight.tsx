import { useDispatch } from 'react-redux'
import './ControlsRight.css'
import { changeFiltersVisibility, setNameSelectedValue } from './redux/searchPanelReducer'
import { cleanSelectedStat } from './redux/statsFilterReducer'
import { cleanCategoriesInputValue } from './redux/categoryFilterReducer'
import { useSelector } from 'react-redux'
import { getFiltersVisibility } from './redux/searchPanel-selector'

export function ControlsRight(props: any) {
    const dispatch = useDispatch()
    const filtersVisibility = useSelector(getFiltersVisibility)

    const clearFields = () => {
        dispatch(setNameSelectedValue(''))
        dispatch(cleanSelectedStat())
        dispatch(cleanCategoriesInputValue('Any'))
    }

    const hideFilters = () => {
        dispatch(changeFiltersVisibility(!filtersVisibility))
    }
    return (
        <div className='controls-right'>
            <button className='btn clear-btn' type='reset' onClick={clearFields}>
                <span>Clear</span>
            </button>
            <button className='btn toggle-search-btn' type='button' onClick={hideFilters}>
                <span className='chevron'></span>
                {filtersVisibility 
                    ? <span>Hide Filters</span>
                    : <span>Show Filters</span>
                }
                
            </button>
        </div>
    )
}