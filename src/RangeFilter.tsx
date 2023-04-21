import { useState, ChangeEvent } from "react"
import { RangeFilterPropsType } from "./SearchPanel"

export function RangeFilter(props: RangeFilterPropsType) {
    const [newMinInputValue, setNewMinInputValue] = useState('')
    const [newMaxInputValue, setNewMaxInputValue] = useState('')
  
    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNewMinInputValue(e.currentTarget.value)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNewMaxInputValue(e.currentTarget.value)
    }
    const onMinDropHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setMinValue(e.currentTarget.value, props.id)
      setNewMinInputValue('')
    }
    const onMaxDropHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setMaxValue(e.currentTarget.value, props.id)
      setNewMaxInputValue('')
    }
    
    return (
      <div className='filter filter-property full-span'>
        <span className='filter-body'>
          <div className='filter-title'>{props.filterTitle}</div>
          <input className='form-control minmax' type="number" placeholder='мин' 
                maxLength={4} inputMode='numeric' value={props.minValue !== '' ? props.minValue : newMinInputValue}
                onChange={onMinInputChangeHandler} onBlur={onMinDropHandler}/>
          <input className='form-control minmax' type="number" placeholder='макс' 
                maxLength={4} inputMode='numeric' value={props.maxValue !== '' ? props.maxValue : newMaxInputValue}
                onChange={onMaxInputChangeHandler} onBlur={onMaxDropHandler}/>
        </span>
      </div>
    )
}