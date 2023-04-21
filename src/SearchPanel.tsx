import { useState } from 'react';
import { v1 } from 'uuid';
import { FilterGroupHeader } from './FilterGroupHeader';
import { CategoryFilter } from './CategoryFilter';
import { RangeFilter } from './RangeFilter';

type ContentType = {
  id: string
  option: string
}

export type FilterGroupHeaderPropsType = {
  id: string
  filterTitle: string
  changeFilterVisibility: (visibility: boolean, filterId: string) => void
  filterVisibility: boolean
  setTypeFiltersValue: (value: string) => void
  setRangeFiltersValue: (value: string, header: string) => void
}

export type CategoryFilterPropsType = {
  id: string
  filterTitle: string
  content: Array<ContentType>
  state: boolean
  setState: (value: boolean, filterId: string) => void
  filterValue: string
  setFilterValue: (value: string, filterId: string) => void
}

export type RangeFilterPropsType = {
  id: string
  filterTitle: string
  setMinValue: (value: string, filterId: string) => void
  minValue: string
  setMaxValue: (value: string, filterId: string) => void
  maxValue: string
}

function SearchPanel(props: any) {
  let categories = [
    {id: v1(), option: 'Все'},
    {id: v1(), option: 'Любое оружие'},
    {id: v1(), option: 'Одноручное оружие'},
    {id: v1(), option: 'Любой доспех'},
    {id: v1(), option: 'Перчатки'},
  ]

  let rarity = [
    {id: v1(), option: 'Все'},
    {id: v1(), option: 'Обычный'},
    {id: v1(), option: 'Волшебный'},
    {id: v1(), option: 'Редкий'},
    {id: v1(), option: 'Уникальный'},
  ]

  let [filterHeaders, setFilterHeaders] = useState([
    { id: v1(), title: 'Фильтр по типу', visibility: true},
    { id: v1(), title: 'Фильтры оружия', visibility: true},
    { id: v1(), title: 'Фильтры защиты', visibility: true},
    { id: v1(), title: 'Требования', visibility: true},
    { id: v1(), title: 'Фильтр свойств', visibility: true}
  ])

  function changeFiltersVisibility(visibility: boolean, filterId: string) {
    let filter = filterHeaders.find( f => f.id === filterId)
    if (filter) {
      filter.visibility = visibility
      setFilterHeaders([...filterHeaders])
    }
  }

  let [typeFilters, setTypeFilters] = useState([
    {id: v1(), title: 'Категория предмета', header: 'Фильтр по типу', content: categories, state: false, filterValue: 'Все'},
    {id: v1(), title: 'Редкость предмета', header: 'Фильтр по типу', content: rarity, state: false, filterValue: 'Все'},
  ])

  function changeCategoriesState(newState: boolean, filterId: string) {
    let filter = typeFilters.find( f => f.id === filterId)
    if (filter) {
      filter.state = newState
      setTypeFilters([...typeFilters])
    }
  }

  function changeCategoriesInputValue(value: string, filterId: string) {
    let filter = typeFilters.find( f => f.id === filterId)
    if (filter) {
      filter.filterValue = value
      setTypeFilters([...typeFilters])
    }
  }

  function cleanCategoriesInputValue(value: string) {
    let newArray = typeFilters.map( (el) => {
      el.filterValue = value
      return el
    })
    setTypeFilters(newArray)
  }
  
  let [rangeFilters, setRangeFilters] = useState([
      {id: v1(), title: 'Урон', header: 'Фильтры оружия', minValue: '', maxValue: ''},
      {id: v1(), title: 'Шанс критического удара', header: 'Фильтры оружия', minValue: '', maxValue: ''},
      {id: v1(), title: 'Атак в секунду', header: 'Фильтры оружия', minValue: '', maxValue: ''},
      {id: v1(), title: 'Урон в секунду', header: 'Фильтры оружия', minValue: '', maxValue: ''},
      {id: v1(), title: 'Броня', header: 'Фильтры защиты', minValue: '', maxValue: ''},
      {id: v1(), title: 'Уклонение', header: 'Фильтры защиты', minValue: '', maxValue: ''},
      {id: v1(), title: 'Энергетический щит', header: 'Фильтры защиты', minValue: '', maxValue: ''},
      {id: v1(), title: 'Блок', header: 'Фильтры защиты', minValue: '', maxValue: ''},
      {id: v1(), title: 'Уровень', header: 'Требования', minValue: '', maxValue: ''},
      {id: v1(), title: 'Сила', header: 'Требования', minValue: '', maxValue: ''},
      {id: v1(), title: 'Ловкость', header: 'Требования', minValue: '', maxValue: ''},
      {id: v1(), title: 'Интеллект', header: 'Требования', minValue: '', maxValue: ''},
  ])

  function changeRangeMinValue(newValue: string, filterId: string) {
    let filter = rangeFilters.find( f => f.id === filterId)
    if (filter) {
      filter.minValue = newValue
      setRangeFilters([...rangeFilters])
    }
  }

  function changeRangeMaxValue(newValue: string, filterId: string) {
    let filter = rangeFilters.find( f => f.id === filterId)
    if (filter) {
      filter.maxValue = newValue
      setRangeFilters([...rangeFilters])
    }
  }

  function cleanRangeValues(newValue: string, header: string) {
    let newArray = rangeFilters.map( (el) => {
      if (el.header === header) {
        el.minValue = newValue
        el.maxValue = newValue
      }
      return el
    })
    setRangeFilters(newArray)
  }

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
            filterHeaders.map( (fh) => {
              return (
                <div className='filter-group expanded'>
                  <FilterGroupHeader
                    id={fh.id} filterTitle={fh.title} changeFilterVisibility={changeFiltersVisibility} 
                    filterVisibility={fh.visibility} setTypeFiltersValue={cleanCategoriesInputValue} 
                    setRangeFiltersValue={cleanRangeValues}/>
                   {
                      fh.visibility && <div className='filter-group-body'>
                        {
                          fh.title === 'Фильтр по типу' && typeFilters.map( (af) => {
                            return (
                              <CategoryFilter 
                                id={af.id} filterTitle={af.title} content={af.content} state={af.state}
                                setState={changeCategoriesState} filterValue={af.filterValue} setFilterValue={changeCategoriesInputValue}/>
                            )
                          })
                        }
                        {
                          (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты' || fh.title === 'Требования') && rangeFilters.map( (rf) => {
                            return (
                              fh.title === rf.header && 
                                <RangeFilter 
                                  id={rf.id} filterTitle={rf.title} minValue={rf.minValue} setMinValue={changeRangeMinValue}
                                  maxValue={rf.maxValue} setMaxValue={changeRangeMaxValue}/>
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