import { useState } from 'react';
import { v1 } from 'uuid';
import { FilterGroupHeader } from './FilterGroupHeader';
import { CategoryFilter } from './CategoryFilter';
import { FilterHeadersType } from './App';
import { RangeFilterContainer } from './RangeFilterContainer';
import { RangeFilter } from './RangeFilter';
import { getFilterHeaders, getRangeFilters, getTypeFilters } from './redux/searchPanel-selector';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setResults } from './redux/resultsReducer';
import { Controls } from './Controls';

// export type FilterGroupHeaderPropsType = {
//   id: string
//   filterTitle: string
//   filterVisibility: boolean
//   dispatch: (action: any) => void
// }

// export type CategoryFilterPropsType = {
//   id: string
//   filterTitle: string
//   content: Array<ContentType>
//   state: boolean
//   filterValue: string
//   dispatch: (action: any) => void
// }

// export type RangeFilterPropsType = {
//   id: string
//   filterTitle: string
//   minValue: string
//   newMinInputValue: string
//   maxValue: string
//   newMaxInputValue: string
//   dispatch: (action: any) => void
// }

export type RangeFilterContainerPropsType = {
  id: string
  filterTitle: string
  minValue: string
  newMinInputValue: string
  maxValue: string
  newMaxInputValue: string
  dispatch: any
}

// export type RangeFilterPropsType = {
//   // id: string
//   // filterTitle: string
//   // minValue: string
//   // newMinInputValue: string
//   // maxValue: string
//   // newMaxInputValue: string
//   // setNewMinInputValue: (value: string, id: string) => void
//   // setNewMaxInputValue: (value: string, id: string) => void
//   // changeRangeMinValue: (value: string, id: string) => void
//   // changeRangeMaxValue: (value: string, id: string) => void
// }

export type SearchPanelPropsType = {
  filterHeader: Array<FilterHeadersType>
}

function SearchPanel(props: any) {
  const filterHeaders = useSelector(getFilterHeaders)  
  const typeFilters = useSelector(getTypeFilters)
  const rangeFilters = useSelector(getRangeFilters)
  const dispatch = useDispatch()
  // axios.get('http://localhost:3003/api/weapon').then(response => {
  //   //debugger
  //   dispatch(setResults(response.data.weapons))
  // })
  return (
    <div className='search-panel'>
      <div className='search-bar'>
        <div className='multiselect search-select'>
          <input className='multiselect_tags' type="text" placeholder='Поиск предметов...' />
          <button className='multiselect_select'>Развернуть</button>
        </div>
      </div>
      <div className='search-bar search-advanced'>
        <div className='search-advanced-pane blue'>
          {
            // props.state.filterGroupHeader.filterHeaders.map( (fh: any) => {
            filterHeaders.map( (fh: any) => {  
              return (
                <div className='filter-group expanded'>
                  <FilterGroupHeader
                    id={fh.id} filterTitle={fh.title} filterVisibility={fh.visibility} dispatch={dispatch}/>
                  {
                      fh.visibility && <div className='filter-group-body'>
                        {
                          // fh.title === 'Фильтр по типу' && props.state.categoryFilter.typeFilters.map( (af: any) => {
                          fh.title === 'Фильтр по типу' && typeFilters.map( (af: any) => {
                            return (
                              <CategoryFilter 
                                id={af.id} filterTitle={af.title} content={af.content} state={af.state} filterValue={af.filterValue} dispatch={dispatch}/>
                            )
                          })
                        }
                        {
                          // (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты' || fh.title === 'Требования') && props.state.rangeFilter.rangeFilters.map( (rf: any) => {
                          (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты' || fh.title === 'Требования') && rangeFilters.map( (rf: any) => {
                          //debugger
                            return (
                              fh.title === rf.header &&
                                // <RangeFilter />
                                // <RangeFilterContainer /> 
                                // <RangeFilterContainer id={rf.id} filterTitle={rf.title} minValue={rf.minValue} newMinInputValue={rf.newMinInputValue} 
                                // maxValue={rf.maxValue} newMaxInputValue={rf.newMaxInputValue} dispatch={props.dispatch}
                                // />
                                <RangeFilter 
                                  id={rf.id} filterTitle={rf.title} newMinInputValue={rf.newMinInputValue} dispatch={dispatch}
                                  newMaxInputValue={rf.newMaxInputValue}/>
                            )
                          })
                        }
                      </div>  
                    } 
                </div>
              )
            })
          }
          <div className='filter-group expanded'></div>
          <div className='filter-group expanded'></div>
        </div>
        <div className='search-advanced-pane brown'></div>
      </div>
      <div className='controls'>
        <Controls />
      </div>
    </div>
  )
}

export default SearchPanel;