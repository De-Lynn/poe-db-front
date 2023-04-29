import { ChangeEvent } from "react"
import { changeFiltersVisibility } from "./redux/filterGroupHeaderReducer"
import { cleanCategoriesInputValue } from "./redux/categoryFilterReducer"
import { cleanRangeValues } from "./redux/rangeFilterReducer"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { getFilterId, getFilterTitle, getFilterVisibility } from "./redux/filterGroupHeader-selectors"
import { useSelector } from "react-redux"

type FilterGroupHeaderPropsType = {
  id: string
  filterTitle: string
  filterVisibility: boolean
  dispatch: (action: any) => void
}

export function FilterGroupHeader (props: FilterGroupHeaderPropsType) {
  // const id = useSelector(getFilterId)
  // const filterTitle = useSelector(getFilterTitle)
  // const filterVisibility = useSelector(getFilterVisibility)

  // const id = useAppSelector((state) => state.filterGroupHeader.filterHeaders[props.id])
  // const filterTitle = useAppSelector((state) => state.filterGroupHeader.filterHeaders[props.filterTitle])
  //const filterVisibility = useAppSelector((state) => state.filterGroupHeader.filterHeaders[props.filterVisibility])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // props.dispatch(changeFiltersVisibility(e.currentTarget.checked, props.id))
    //console.log(e.currentTarget.checked)
    //debugger
    props.dispatch(changeFiltersVisibility(e.currentTarget.checked, props.id))
  }

  const onClickHandler = () => {
    if (props.filterTitle === 'Фильтр по типу') {
      props.dispatch(cleanCategoriesInputValue('Все'))
    }
    if (props.filterTitle === 'Фильтры оружия' || props.filterTitle === 'Фильтры защиты' || props.filterTitle === 'Требования') {
      props.dispatch(cleanRangeValues('', props.filterTitle))
    }
  }

  return (
    <div className='filter-group-header'>
      <span className='input-group-btn'>
        <input type="checkbox" checked={props.filterVisibility} 
              onChange={onChangeHandler}/>
      </span>
      <span className='filter-body'>
        <span className='filter-title filter-title-clickable'>
          <span>{props.filterTitle}</span>
        </span>
        <span className='input-group-btn'>
          <button className='btn remove-btn' title='Очистить группу фильтра'
                  onClick={onClickHandler}>X</button>
        </span>
      </span>
    </div>
  )
}