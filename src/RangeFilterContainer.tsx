import { ChangeEvent } from "react"
import { changeRangeMaxValue, changeRangeMinValue, setNewMaxInputValue, setNewMinInputValue } from "./redux/rangeFilterReducer"

import React from "react"
import { ConnectedComponent, ConnectedProps, connect } from "react-redux"
import { RangeFilter } from "./RangeFilter"

type RangeFilterContainerPropsType = {
  id: string
  filterTitle: string
  newMinInputValue: string
  newMaxInputValue: string
  dispatch: (action: any) => void
}

// class RangeFilterContainer extends React.Component<RangeFilterBlockPropsType> {
//   return (
//     <RangeFilter />
//   )
// }

let mapStateToProps = (state: any) => {
  return {
    id: state.rangeFilter.rangeFilters.id,
    filterTitle: state.rangeFilter.rangeFilters.filterTitle,
    newMinInputValue: state.rangeFilter.rangeFilters.newMinInputValue,
    newMaxInputValue: state.rangeFilter.rangeFilters.newMaxInputValue,
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    setNewMinInputValue: (value: string, filterId: string) => {
      dispatch(setNewMinInputValue(value, filterId))
    },
    setNewMaxInputValue: (value: string, filterId: string) => { 
      dispatch(setNewMaxInputValue(value, filterId))
    },
    changeRangeMinValue: (value: string, filterId: string) => {
      dispatch(changeRangeMinValue(value, filterId))
    },
    changeRangeMaxValue: (value: string, filterId: string) => {
      dispatch(changeRangeMaxValue(value, filterId))
    },
  }
}
// const connector = connect(mapStateToProps, mapDispatchToProps)

// type PropsFromRedux = ConnectedProps<typeof connector>

export const RangeFilterContainer = connect(mapStateToProps, mapDispatchToProps)(RangeFilter)

// export const RangeFilterBlock: React.FC<RangeFilterBlockPropsType> = (props) => {
//   return (
//     <RangeFilter />
//   )
// }

// export function RangeFilterContainer(props: RangeFilterContainerPropsType) {
//     const setNewMinInputValue = (value: string, filterId: string) => {
//       props.dispatch(setNewMinInputValue(value, filterId))
//     }
//     const onMaxInputChangeHandler = (value: string, filterId: string) => {
//       props.dispatch(setNewMaxInputValue(value, filterId))
//     }
//     const onMinBlurHandler = (value: string, filterId: string) => {
//       props.dispatch(changeRangeMinValue(value, filterId))
//     }
//     const onMaxBlurHandler = (value: string, filterId: string) => {
//       props.dispatch(changeRangeMaxValue(value, filterId))
//     }
    
//     return (
//       <RangeFilter 
//         id={props.id} filterTitle={props.filterTitle} minValue={props.minValue} newMinInputValue={props.newMinInputValue}
//         maxValue={props.maxValue} newMaxInputValue={props.newMaxInputValue} setNewMinInputValue={setNewMinInputValue}
//         setNewMaxInputValue={onMaxInputChangeHandler} changeRangeMinValue={onMinBlurHandler} changeRangeMaxValue={onMaxBlurHandler}/>
//     )
// }