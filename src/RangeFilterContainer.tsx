import { ChangeEvent } from "react"
import { RangeFilterContainerPropsType, RangeFilterPropsType } from "./SearchPanel"
import { changeRangeMaxValue, changeRangeMinValue, setNewMaxInputValue, setNewMinInputValue } from "./redux/rangeFilterReducer"
import { RangeFilter } from "./RangeFilter"

export function RangeFilterContainer(props: RangeFilterContainerPropsType) {
    const setNewMinInputValue = (value: string, filterId: string) => {
      props.dispatch(setNewMinInputValue(value, filterId))
    }
    const onMaxInputChangeHandler = (value: string, filterId: string) => {
      props.dispatch(setNewMaxInputValue(value, filterId))
    }
    const onMinBlurHandler = (value: string, filterId: string) => {
      props.dispatch(changeRangeMinValue(value, filterId))
    }
    const onMaxBlurHandler = (value: string, filterId: string) => {
      props.dispatch(changeRangeMaxValue(value, filterId))
    }
    
    return (
      <RangeFilter 
        id={props.id} filterTitle={props.filterTitle} minValue={props.minValue} newMinInputValue={props.newMinInputValue}
        maxValue={props.maxValue} newMaxInputValue={props.newMaxInputValue} setNewMinInputValue={setNewMinInputValue}
        setNewMaxInputValue={onMaxInputChangeHandler} changeRangeMinValue={onMinBlurHandler} changeRangeMaxValue={onMaxBlurHandler}/>
    )
}