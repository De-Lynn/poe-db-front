import { ChangeEvent } from "react"
import { FilterGroupHeaderPropsType } from "./SearchPanel"


export function FilterGroupHeader(props: FilterGroupHeaderPropsType) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.changeFilterVisibility(e.currentTarget.checked, props.id)
    }
  
    const onClickHandler = () => {
      if (props.filterTitle === 'Фильтр по типу') {
        props.setTypeFiltersValue('Все')
      }
      if (props.filterTitle === 'Фильтры оружия') {
        props.setRangeFiltersValue('', props.filterTitle)
      }
      if (props.filterTitle === 'Фильтры защиты') {
        props.setRangeFiltersValue('', props.filterTitle)
      }
      if (props.filterTitle === 'Требования') {
        props.setRangeFiltersValue('', props.filterTitle)
      }
    }
  
    return (
      <div className='filter-group-header'>
        <span className='input-group-btn'>
          {/* <button className='btn toggle-btn'></button> */}
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