import { useState, ChangeEvent } from "react"
import { RangeFilterPropsType } from "./SearchPanel"
import { changeRangeMaxValue, changeRangeMinValue, setNewMaxInputValue, setNewMinInputValue } from "./redux/rangeFilterReducer"

export function RangeFilter(props: RangeFilterPropsType) {
    //debugger
    // const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //   props.dispatch(setNewMinInputValue(e.currentTarget.value, props.id))
    // }
    // const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //   props.dispatch(setNewMaxInputValue(e.currentTarget.value, props.id))
    // }
    // const onMinBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //   props.dispatch(changeRangeMinValue(e.currentTarget.value, props.id))
    // }
    // const onMaxBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //   props.dispatch(changeRangeMaxValue(e.currentTarget.value, props.id))
    // }

    const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setNewMinInputValue(e.currentTarget.value, props.id)
    }
    const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.setNewMaxInputValue(e.currentTarget.value, props.id)
    }
    const onMinBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.changeRangeMinValue(e.currentTarget.value, props.id)
    }
    const onMaxBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.changeRangeMaxValue(e.currentTarget.value, props.id)
    }
    
    return (
      <div className='filter filter-property full-span'>
        <span className='filter-body'>
          <div className='filter-title'>{props.filterTitle}</div>
          <input className='form-control minmax' type="number" placeholder='мин' 
                maxLength={4} inputMode='numeric' value={props.newMinInputValue}
                onChange={onMinInputChangeHandler} onBlur={onMinBlurHandler}/>
          <input className='form-control minmax' type="number" placeholder='макс' 
                maxLength={4} inputMode='numeric' value={props.newMaxInputValue}
                onChange={onMaxInputChangeHandler} onBlur={onMaxBlurHandler}/>
        </span>
      </div>
    )
}