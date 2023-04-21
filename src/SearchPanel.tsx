import { ChangeEvent, useState } from 'react';
import { v1 } from 'uuid';

type ContentType = {
  id: string
  option: string
}

type FilterGroupHeaderPropsType = {
  filterTitle: string
  changeFilterVisibility: (visibility: boolean) => void
  filterVisibility: boolean
  setRarityValue: (value: string) => void
  setCategoriesValue: (value: string) => void
  setDamageMin: (value: string) => void
  setDamageMax: (value: string) => void
  setCritMin: (value: string) => void
  setCritMax: (value: string) => void
  setApsMin: (value: string) => void
  setApsMax: (value: string) => void
  setDpsMin: (value: string) => void
  setDpsMax: (value: string) => void
  setArmourMin: (value: string) => void
  setArmourMax: (value: string) => void
  setEvasionMin: (value: string) => void
  setEvasionMax: (value: string) => void
  setEshieldMin: (value: string) => void
  setEshieldMax: (value: string) => void
  setBlockMin: (value: string) => void
  setBlockMax: (value: string) => void
}

type TypeFilterPropsType = {
  filterTitle: string
  categories: Array<ContentType>
  rarity: Array<ContentType>
  state: boolean
  setState: (value: boolean) => void
  filterValue: string
  setFilterValue: (value: string) => void
  changeFilterVisibility: (visibility: boolean) => void
  filterVisibility: boolean
}

type CategoryFilterPropsType = {
  filterTitle: string
  content: Array<ContentType>
  state: boolean
  setState: (value: boolean) => void
  filterValue: string
  setFilterValue: (value: string) => void
}
type RarityFilterPropsType = CategoryFilterPropsType

type RangeFilterPropsType = {
  filterTitle: string
  setMinValue: (value: string) => void
  minValue: string
  setMaxValue: (value: string) => void
  maxValue: string
}

type FilterHeadersType = {
  id: string
  title: string
  filterVisibility: boolean
  changeVisibilityFunction: (value: boolean) => void
}

type CategoryFilterBodiesType = {
  id: string
  title: string
  header: string
  content: Array<ContentType>
  state: boolean
  setState: (value: boolean) => void
  filterValue: string
  setFilterValue: (value: string) => void
}

type RangeFilterBodiesType = {
  id: string
  title: string
  header: string
  setMinValue: (value: string) => void
  minValue: string
  setMaxValue: (value: string) => void
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

  let [categoriesIsUnwrapped, setCategoriesIsUnwrapped]= useState(false)
  function changeCategoriesState(newState: boolean) {
    setCategoriesIsUnwrapped(newState)
  }

  let [rarityIsUnwrapped, setRarityIsUnwrapped] = useState(false)
  function changeRarityState(newState: boolean) {
    setRarityIsUnwrapped(newState)
  }

  let [rarityInputValue, setRarityInputValue] = useState('Все')
  function changeRarityInputValue(value: string) {
    setRarityInputValue(value)
  }

  let [categoriesInputValue, setCategoriesInputValue] = useState('Все')
  function changeCategoriesInputValue(value: string) {
    setCategoriesInputValue(value)
  }

  let [damageMinValue, setDamageMinValue] = useState('')
  function changeDamageMinValue(value: string) {
    setDamageMinValue(value)
  }

  let [damageMaxValue, setDamageMaxValue] = useState('')
  function changeDamageMaxValue(value: string) {
    setDamageMaxValue(value)
  }

  let [critMinValue, setCritMinValue] = useState('')
  function changeCritMinValue(value: string) {
    setCritMinValue(value)
  }

  let [critMaxValue, setCritMaxValue] = useState('')
  function changeCritMaxValue(value: string) {
    setCritMaxValue(value)
  }

  let [apsMinValue, setApsMinValue] = useState('')
  function changeApsMinValue(value: string) {
    setApsMinValue(value)
  }

  let [apsMaxValue, setApsMaxValue] = useState('')
  function changeApsMaxValue(value: string) {
    setApsMaxValue(value)
  }

  let [dpsMinValue, setDpsMinValue] = useState('')
  function changeDpsMinValue(value: string) {
    setDpsMinValue(value)
  }

  let [dpsMaxValue, setDpsMaxValue] = useState('')
  function changeDpsMaxValue(value: string) {
    setDpsMaxValue(value)
  }

  let [armourMinValue, setArmourMinValue] = useState('')
  function changeArmourMinValue(value: string) {
    setArmourMinValue(value)
  }

  let [armourMaxValue, setArmourMaxValue] = useState('')
  function changeArmourMaxValue(value: string) {
    setArmourMaxValue(value)
  }

  let [eshieldMinValue, setEshieldMinValue] = useState('')
  function changeEshieldMinValue(value: string) {
    setEshieldMinValue(value)
  }

  let [eshieldMaxValue, setEshieldMaxValue] = useState('')
  function changeEshieldMaxValue(value: string) {
    setEshieldMaxValue(value)
  }

  let [blockMinValue, setBlockMinValue] = useState('')
  function changeBlockMinValue(value: string) {
    setBlockMinValue(value)
  }

  let [blockMaxValue, setBlockMaxValue] = useState('')
  function changeBlockMaxValue(value: string) {
    setBlockMaxValue(value)
  }

  let [evasionMinValue, setEvasionMinValue] = useState('')
  function changeEvasionMinValue(value: string) {
    setEvasionMinValue(value)
  }

  let [evasionMaxValue, setEvasionMaxValue] = useState('')
  function changeEvasionMaxValue(value: string) {
    setEvasionMaxValue(value)
  }

  let [filters, setFilters] = useState([
    {id: 1, title: 'Фильтр по типу', visibility: true},
    {id: 2, title: 'Фильтры оружия', visibility: true},
    {id: 3, title: 'Фильтры защиты', visibility: true},
    {id: 4, title: 'Требования', visibility: true},
    {id: 5, title: 'Фильтр свойств', visibility: true}
  ])

  let [typeFilterVisibility, setTypeFilterVisibility] = useState(true)
  function changeTypeFilterVisibility(visibility: boolean) {
    setTypeFilterVisibility(visibility)
  }

  let [weaponFilterVisibility, setWeaponFilterVisibility] = useState(true)
  function changeWeaponFilterVisibility(visibility: boolean) {
    setWeaponFilterVisibility(visibility)
  }

  let [defenseFilterVisibility, setDefenseFilterVisibility] = useState(true)
  function changeDefenseFilterVisibility(visibility: boolean) {
    setDefenseFilterVisibility(visibility)
  }

  let typeFilterHeaderId = v1()
  let weaponFilterHeaderId = v1()
  let defenseFilterHeaderId = v1()

  let filterHeaders: Array<FilterHeadersType> = [
    { id: typeFilterHeaderId, title: 'Фильтр по типу', filterVisibility: typeFilterVisibility, changeVisibilityFunction: changeTypeFilterVisibility},
    { id: weaponFilterHeaderId, title: 'Фильтры оружия', filterVisibility: weaponFilterVisibility, changeVisibilityFunction: changeWeaponFilterVisibility},
    { id: defenseFilterHeaderId, title: 'Фильтры защиты', filterVisibility: defenseFilterVisibility, changeVisibilityFunction: changeDefenseFilterVisibility},
  ]

  let typeFilters = [
    {id: v1(), title: 'Категория предмета', header: 'Фильтр по типу', content: categories, state: categoriesIsUnwrapped, 
      setState: changeCategoriesState, filterValue: categoriesInputValue, setFilterValue: changeCategoriesInputValue},
    {id: v1(), title: 'Редкость предмета', header: 'Фильтр по типу', content: rarity, state: rarityIsUnwrapped, 
      setState: changeRarityState, filterValue: rarityInputValue, setFilterValue: changeRarityInputValue},
  ]
  
  let rangeFilters = [
      {id: v1(), title: 'Урон', header: 'Фильтры оружия', setMinValue: changeDamageMinValue, minValue: damageMinValue, 
        setMaxValue: changeDamageMaxValue, maxValue: damageMaxValue},
      {id: v1(), title: 'Шанс критического удара', header: 'Фильтры оружия', setMinValue: changeCritMinValue, minValue: critMinValue, 
        setMaxValue: changeCritMaxValue, maxValue: critMaxValue},
      {id: v1(), title: 'Атак в секунду', header: 'Фильтры оружия', setMinValue: changeApsMinValue, minValue: apsMinValue, 
        setMaxValue: changeApsMaxValue, maxValue: apsMaxValue},
      {id: v1(), title: 'Урон в секунду', header: 'Фильтры оружия', setMinValue: changeDpsMinValue, minValue: dpsMinValue, 
        setMaxValue: changeDpsMaxValue, maxValue: dpsMaxValue},
      {id: v1(), title: 'Броня', header: 'Фильтры защиты', setMinValue: changeArmourMinValue, minValue: armourMinValue, 
      setMaxValue: changeArmourMaxValue, maxValue: armourMaxValue},
      {id: v1(), title: 'Уклонение', header: 'Фильтры защиты', setMinValue: changeEvasionMinValue, minValue: evasionMinValue, 
        setMaxValue: changeEvasionMaxValue, maxValue: evasionMaxValue},
      {id: v1(), title: 'Энергетический щит', header: 'Фильтры защиты', setMinValue: changeEshieldMinValue, minValue: eshieldMinValue, 
        setMaxValue: changeEshieldMaxValue, maxValue: eshieldMaxValue},
      {id: v1(), title: 'Блок', header: 'Фильтры защиты', setMinValue: changeBlockMinValue, minValue: blockMinValue, 
        setMaxValue: changeBlockMaxValue, maxValue: blockMaxValue},
  ]

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
                  <FilterGroupHeader filterTitle={fh.title}
                                    changeFilterVisibility={fh.changeVisibilityFunction}
                                    filterVisibility={fh.filterVisibility}
                                    setRarityValue={changeRarityInputValue}
                                    setCategoriesValue={changeCategoriesInputValue}
                                    setDamageMin={changeDamageMinValue}
                                    setDamageMax={changeDamageMaxValue}
                                    setCritMin={changeCritMinValue}
                                    setCritMax={changeCritMaxValue}
                                    setApsMin={changeApsMinValue}
                                    setApsMax={changeApsMaxValue}
                                    setDpsMin={changeDpsMinValue}
                                    setDpsMax={changeDpsMaxValue}
                                    setArmourMin={changeArmourMinValue}
                                    setArmourMax={changeArmourMaxValue}
                                    setEvasionMin={changeEvasionMinValue}
                                    setEvasionMax={changeEvasionMaxValue}
                                    setEshieldMin={changeEshieldMinValue}
                                    setEshieldMax={changeEshieldMaxValue}
                                    setBlockMin={changeBlockMinValue}
                                    setBlockMax={changeBlockMaxValue}/>
                   {
                      fh.filterVisibility && <div className='filter-group-body'>
                        {
                          fh.title === 'Фильтр по типу' && typeFilters.map( (af) => {
                            return (
                              <CategoryFilter filterTitle={af.title} 
                                            content={af.content}
                                            state={af.state}
                                            setState={af.setState}
                                            filterValue={af.filterValue}
                                            setFilterValue={af.setFilterValue}/>
                            )
                          })
                        }
                        {
                          (fh.title === 'Фильтры оружия' || fh.title === 'Фильтры защиты') && rangeFilters.map( (rf) => {
                            return (
                              fh.title === rf.header && 
                                <RangeFilter filterTitle={rf.title} 
                                          minValue={rf.minValue}
                                          setMinValue={rf.setMinValue}
                                          maxValue={rf.maxValue}
                                          setMaxValue={rf.setMaxValue}/>
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

function FilterGroupHeader(props: FilterGroupHeaderPropsType) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeFilterVisibility(e.currentTarget.checked)
  }

  const onClickHandler = () => {
    if (props.filterTitle === 'Фильтр по типу') {
      props.setCategoriesValue('Все')
      props.setRarityValue('Все')
    }
    if (props.filterTitle === 'Фильтры оружия') {
      props.setDamageMin('')
      props.setDamageMax('')
      props.setCritMin('')
      props.setCritMax('')
      props.setApsMin('')
      props.setApsMax('')
      props.setDpsMin('')
      props.setDpsMax('')
    }
    if (props.filterTitle === 'Фильтры защиты') {
      props.setArmourMin('')
      props.setArmourMax('')
      props.setEvasionMin('')
      props.setEvasionMax('')
      props.setEshieldMin('')
      props.setEshieldMax('')
      props.setBlockMin('')
      props.setBlockMax('')
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

function CategoryFilter(props: CategoryFilterPropsType) {
  const [newInputValue, setNewInputValue] = useState('')

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewInputValue(e.currentTarget.value)
  }

  const onButtonClickHandler = () => {
    props.setState(!props.state)
  }

  return (
    <div className='filter filter-property full-span'>
      <span className='filter-body'>
        <div className='filter-title'>{props.filterTitle}</div>
        <div className='multiselect filter-select'>
          <input className='multiselect_tags' type="text" value={props.filterValue}/>
          <input className='multiselect_tags' type="text" value={newInputValue} 
                onChange={onInputChangeHandler}/>
          <button className='multiselect_select' 
                onClick={onButtonClickHandler}>Развернуть</button>
          <div className='multiselect_content-wrapper'>
            {
              props.state && <select name="" id="">
                {
                  props.content.map( (el) => {
                    const onSelectOptionClickHandler = () => {
                      props.setFilterValue(el.option)
                      props.setState(!props.state)
                    }
                    return (
                      <option className='multiselect_element' 
                              onClick={onSelectOptionClickHandler} key={el.id}>
                        <span className='multiselect_option'>
                          <span>{el.option}</span>
                        </span>
                      </option>
                    )
                  })
                }
             </select>
            } 
          </div>
        </div>
      </span>
    </div>
  )
}

function RangeFilter(props: RangeFilterPropsType) {
  const [newMinInputValue, setNewMinInputValue] = useState('')
  const [newMaxInputValue, setNewMaxInputValue] = useState('')

  const onMinInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMinInputValue(e.currentTarget.value)
  }
  const onMaxInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMaxInputValue(e.currentTarget.value)
  }
  const onMinDropHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMinValue(e.currentTarget.value)
    setNewMinInputValue('')
  }
  const onMaxDropHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.setMaxValue(e.currentTarget.value)
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

export default SearchPanel;