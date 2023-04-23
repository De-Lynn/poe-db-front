import { useState } from 'react';
import { v1 } from 'uuid';
import { FilterGroupHeader } from './FilterGroupHeader';
import { CategoryFilter } from './CategoryFilter';
import { RangeFilter } from './RangeFilter';
import { FilterHeadersType } from './App';
import { RangeFilterContainer } from './RangeFilterContainer';

type ContentType = {
  id: string
  option: string
}

export type FilterGroupHeaderPropsType = {
  id: string
  filterTitle: string
  filterVisibility: boolean
  dispatch: (action: any) => void
}

export type CategoryFilterPropsType = {
  id: string
  filterTitle: string
  content: Array<ContentType>
  state: boolean
  filterValue: string
  dispatch: (action: any) => void
}

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

export type RangeFilterPropsType = {
  id: string
  filterTitle: string
  minValue: string
  newMinInputValue: string
  maxValue: string
  newMaxInputValue: string
  setNewMinInputValue: (value: string, id: string) => void
  setNewMaxInputValue: (value: string, id: string) => void
  changeRangeMinValue: (value: string, id: string) => void
  changeRangeMaxValue: (value: string, id: string) => void
}

export type SearchPanelPropsType = {
  filterHeader: Array<FilterHeadersType>
}

function SearchPanel(props: any) {
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
            props.state.filterGroupHeader.filterHeaders.map( (fh: any) => {
              
              return (
                <div className='filter-group expanded'>
                  <FilterGroupHeader
                    id={fh.id} filterTitle={fh.title} filterVisibility={fh.visibility} dispatch={props.dispatch}/>
                   {
                      fh.visibility && <div className='filter-group-body'>
                        {
                          fh.title === 'Фильтр по типу' && props.state.categoryFilter.typeFilters.map( (af: any) => {
                            return (
                              <CategoryFilter 
                                id={af.id} filterTitle={af.title} content={af.content} state={af.state} filterValue={af.filterValue} dispatch={props.dispatch}/>
                            )
                          })
                        }
                        {
                          (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты' || fh.title === 'Требования') && props.state.rangeFilter.rangeFilters.map( (rf: any) => {
                           //debugger
                            return (
                              fh.title === rf.header && 
                                <RangeFilterContainer id={rf.id} filterTitle={rf.title} minValue={rf.minValue} newMinInputValue={rf.newMinInputValue} 
                                maxValue={rf.maxValue} newMaxInputValue={rf.newMaxInputValue} dispatch={props.dispatch}
                                />
                                // <RangeFilter 
                                //   id={rf.id} filterTitle={rf.title} minValue={rf.minValue} newMinInputValue={rf.newMinInputValue} dispatch={props.dispatch}
                                //   maxValue={rf.maxValue} newMaxInputValue={rf.newMaxInputValue}/>
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
        <div className='controls-center'>
          <button className='btn search-btn' type='button'>
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
    </div>
  )
}

export default SearchPanel;