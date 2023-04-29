import { useState, ChangeEvent, useEffect } from "react"
import { changeRangeMaxValue, changeRangeMinValue, setNewMaxInputValue, setNewMinInputValue } from "./redux/rangeFilterReducer"
import { ConnectedProps, connect, useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getFilterId, getFilterTitle, getNewMinInputValue, getNewMaxInputValue } from "./redux/rangeFilter-selectors"

export type RangeFilterPropsType = {
  id: string
  filterTitle: string
  newMinInputValue: string
  newMaxInputValue: string
  dispatch: (action: any) => void
  // setNewMinInputValue: (value: string, id: string) => void
  // setNewMaxInputValue: (value: string, id: string) => void
  // changeRangeMinValue: (value: string, id: string) => void
  // changeRangeMaxValue: (value: string, id: string) => void
}

// let mapStateToProps = (state: any) => {
//   return {
//     id: state.rangeFilter.rangeFilters.id,
//     filterTitle: state.rangeFilter.rangeFilters.filterTitle,
//     newMinInputValue: state.rangeFilter.rangeFilters.newMinInputValue,
//     newMaxInputValue: state.rangeFilter.rangeFilters.newMaxInputValue,
//   }
// }

// let mapDispatchToProps = (dispatch: any) => {
//   return {
//     setNewMinInputValue: (value: string, filterId: string) => {
//       dispatch(setNewMinInputValue(value, filterId))
//     },
//     setNewMaxInputValue: (value: string, filterId: string) => { 
//       dispatch(setNewMaxInputValue(value, filterId))
//     },
//     changeRangeMinValue: (value: string, filterId: string) => {
//       dispatch(changeRangeMinValue(value, filterId))
//     },
//     changeRangeMaxValue: (value: string, filterId: string) => {
//       dispatch(changeRangeMaxValue(value, filterId))
//     },
//   }
// }
// const connector = connect(mapStateToProps, mapDispatchToProps)

// type PropsFromRedux = ConnectedProps<typeof connector>

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

    // const filterId = useSelector(getFilterId)  
    // const filterTitle = useSelector(getFilterTitle) // getFilterTitle - селектор
    // const newMinInputValue = useSelector(getNewMinInputValue)
    // const newMaxInputValue = useSelector(getNewMaxInputValue)
    // const dispatch = useDispatch()

    // useEffect( () => {

    // }, [])
  const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(setNewMinInputValue(e.currentTarget.value, props.id))
  }
  const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(setNewMaxInputValue(e.currentTarget.value, props.id))
  }
  const onMinBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(changeRangeMinValue(e.currentTarget.value, props.id))
  }
  const onMaxBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(changeRangeMaxValue(e.currentTarget.value, props.id))
  }
  console.log(props.id)
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

// const RangeFilterContainer = connector(RangeFilter)
// export default RangeFilterContainer
