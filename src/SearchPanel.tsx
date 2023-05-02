import { FilterGroupHeader } from './FilterGroupHeader';
import { CategoryFilter } from './CategoryFilter';
import { FilterHeadersType } from './App';
import { RangeFilter } from './RangeFilter';
import { getFilterHeaders, getRangeFilters, getCategoryFilters, getCategoryFiltersVisibility } from './redux/searchPanel-selector';
import { useDispatch, useSelector } from 'react-redux';
import { Controls } from './Controls';
import { WeaponsFilters } from './WeaponsFilters';
import { ArmourFilters } from './ArmourFilters';
import { Route, Routes } from 'react-router-dom';
import { RequirementFilters } from './RequirementFilters';

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
  //const filterHeaders = useSelector(getFilterHeaders)  
  const categoryFilters = useSelector(getCategoryFilters)
  //const rangeFilters = useSelector(getRangeFilters)
  let categoryFiltersVisibility = useSelector(getCategoryFiltersVisibility)
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
          {/* {
            // props.state.filterGroupHeader.filterHeaders.map( (fh: any) => {
            filterHeaders.map( (fh: any) => {  
              return (
                <div className='filter-group expanded'>
                  {
                    fh.title === 'Фильтр по типу' && 
                      <FilterGroupHeader
                        key={fh.id} id={fh.id} filterTitle={fh.title} filterVisibility={fh.visibility} dispatch={dispatch}
                      />
                      {
                        fh.visibility && <div className='filter-group-body'>
                          {
                            fh.title === 'Фильтр по типу' && typeFilters.map( (af: any) => {
                              return (
                                <CategoryFilter 
                                  key={af.id} id={af.id} filterTitle={af.title} content={af.content} state={af.state} filterValue={af.filterValue} dispatch={dispatch}/>
                              )
                            })
                          }
                        </div>
                      }
                      // <div>
                        {
                          (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты' || fh.title === 'Требования') && props.state.rangeFilter.rangeFilters.map( (rf: any) => {
                          (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты' || fh.title === 'Требования') && rangeFilters.map( (rf: any) => {
                          debugger
                            return (
                              fh.title === rf.header &&
                                <RangeFilter 
                                  key={rf.id} id={rf.id} filterTitle={rf.title} newMinInputValue={rf.newMinInputValue} dispatch={dispatch}
                                  newMaxInputValue={rf.newMaxInputValue} minName={rf.minName} maxName={rf.maxName}/>
                            )
                          })
                        } 
                      // </div>  
                  }  
                </div>
              )
            })
          } */}
          {/* {
            categoryFiltersVisibility && <div className='filter-group-body'>
              {
                categoryFilters.map( (af: any) => {
                  return (
                    <CategoryFilter 
                      key={af.id} id={af.id} filterTitle={af.title} content={af.content} 
                      state={af.state} filterValue={af.filterValue} dispatch={dispatch}
                      filterVisibility={categoryFiltersVisibility}/>
                  )
                })
              }
            </div>
          } */}
          <CategoryFilter/>
          <WeaponsFilters/>
          <ArmourFilters/>
          <RequirementFilters/>
          <div className='filter-group expanded'></div>
          <div className='filter-group expanded'></div>
        </div>
        <div className='search-advanced-pane brown'></div>
      </div>
      {/* <Routes> */}
        <div className='controls'>
        {/* <Route path='/' element={<Controls />}/> */}
          <Controls />
        </div>
      {/* </Routes> */}
      
    </div>
  )
}

export default SearchPanel;