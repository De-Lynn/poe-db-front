import { CategoryFilter } from './FilterComponents/CategoryFilter';
import { FilterHeadersType } from '../App';
import { getNamesPool, getNameShowMenu, getNameSelectedValue, getNameSearchValue, getFiltersVisibility} from '../redux/searchPanel-selector';
import { useDispatch, useSelector } from 'react-redux';
import { Controls } from './ControlButtons/Controls';
import { StatsFilter } from './FilterComponents/StatsFilter';
import NameDropdown from './Dropdowns/NameDropdown';
import { setNameSearchValue, setNameSelectedValue, setNameShowMenu } from '../redux/searchPanelReducer';
import '../styles/SearchPanel.css'
import { Form, Formik} from 'formik';
import { getItemName, getItemsCategory, getItemsRarity, getItemsType } from '../redux/activeFilters-selector';
import { getSelectedStatOrder } from '../redux/statsFilter-selector';
import axios from 'axios';
import { setResults } from '../redux/resultsReducer';
import { changeWeaponsFilterVisibility, changeWeaponsFiltersValue } from '../redux/weaponsFilterReducer';
import { changeArmourFilterVisibility, changeArmourFiltersValue } from '../redux/armourFilterReducer';
import { changeRequirementFilterVisibility, changeRequirementFiltersValue } from '../redux/requirementFilterReducer';
import { useCallback } from 'react';
import React from 'react';
import Filter from './FilterComponents/Filter';
import { getWeaponsFilterVisibility, getWeaponsFilters } from '../redux/weaponsFilter-selectors';
import { getArmourFilterVisibility, getArmourFilters } from '../redux/armourFilter-selectors';
import { getRequirementFilterVisibility, getRequirementFilters } from '../redux/requirementFilter-selectors';

export type RangeFilterContainerPropsType = {
  id: string
  filterTitle: string
  minValue: string
  newMinInputValue: string
  maxValue: string
  newMaxInputValue: string
  dispatch: any
}

export type SearchPanelPropsType = {
  filterHeader: Array<FilterHeadersType>
}

const SearchPanel = React.memo((props: any) => {

  const weaponsFilters = useSelector(getWeaponsFilters) 
  const armourFilters = useSelector(getArmourFilters)
  const requirementFilters = useSelector(getRequirementFilters)

  const weaponsFilterVisibility = useSelector(getWeaponsFilterVisibility)
  const armourFilterVisibility = useSelector(getArmourFilterVisibility)
  const requirementFilterVisibility = useSelector(getRequirementFilterVisibility)

  const namesPool = useSelector(getNamesPool)
  const nameShowMenu = useSelector(getNameShowMenu)
  const nameSelectedValu = useSelector(getNameSelectedValue)
  const nameSearchValue = useSelector(getNameSearchValue)
  const filtersVisibility = useSelector(getFiltersVisibility)

  let dispatch = useDispatch()
  let category = useSelector(getItemsCategory)
  let type = useSelector(getItemsType)
  let rarity = useSelector(getItemsRarity)
  let stat_order = useSelector(getSelectedStatOrder)
  let name = useSelector(getItemName)
  let searchParams

  const onSearchClickHandler = (values: any) => {
    
    dispatch(changeWeaponsFiltersValue(values.weaponValues))
    dispatch(changeArmourFiltersValue(values.armourValues))
    dispatch(changeRequirementFiltersValue(values.reqValues))
    alert(JSON.stringify(values, null, 2))

    doRequest(values)
  }

  const doRequest = (values: any) => {
    let request = `http://192.168.1.6:8080/api/${category}?`
    // let request = `http://192.168.0.44:8080/api/${category}?`
    if(category ==='any') {
      searchParams = new URLSearchParams(rarity)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(type)
      request += `${searchParams.toString()}&`
      request += `${(new URLSearchParams(values.weaponValues)).toString()}&`
      request += `${(new URLSearchParams(values.armourValues)).toString()}&`
      request += `${(new URLSearchParams(values.reqValues)).toString()}&`
      searchParams = new URLSearchParams(stat_order)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(name)
      request += searchParams.toString()
    } 
    if(category==='weapon') {
      searchParams = new URLSearchParams(rarity)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(type)
      request += `${searchParams.toString()}&`
      request += `${(new URLSearchParams(values.weaponValues)).toString()}&`
      request += `${(new URLSearchParams(values.reqValues)).toString()}&`
      searchParams = new URLSearchParams(stat_order)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(name)
      request += searchParams.toString()
    }
    if(category==='armour') {
      searchParams = new URLSearchParams(rarity)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(type)
      request += `${searchParams.toString()}&`
      request += `${(new URLSearchParams(values.armourValues)).toString()}&`
      request += `${(new URLSearchParams(values.reqValues)).toString()}&`
      searchParams = new URLSearchParams(stat_order)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(name)
      request += searchParams.toString()
    }
    if(category==='jewellery') {
      searchParams = new URLSearchParams(rarity)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(type)
      request += `${searchParams.toString()}&`
      request += `${(new URLSearchParams(values.reqValues)).toString()}&`
      searchParams = new URLSearchParams(stat_order)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(name)
      request += searchParams.toString()
    }
    if(category==='flask') {
      searchParams = new URLSearchParams(rarity)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(type)
      request += `${searchParams.toString()}&`
      request += `${(new URLSearchParams(values.reqValues)).toString()}&`
      searchParams = new URLSearchParams(stat_order)
      request += `${searchParams.toString()}&`
      searchParams = new URLSearchParams(name)
      request += searchParams.toString()
    }
    alert(request)
    
    axios.get(request).then(response => {
      dispatch(setResults(response.data))
    })
  }

  return (
    <div className='search-panel'>
      <div className='search-bar'>
        <div className='search-left'>
          <NameDropdown placeHolder='Search Items...' names={namesPool} isSearchable={true}
            setSearchValue={setNameSearchValue} setShowMenu={setNameShowMenu} setSelectedValue={setNameSelectedValue}
            showMenu={nameShowMenu} selectedValue={nameSelectedValu} searchValue={nameSearchValue}/>
        </div>
      </div>
      <Formik
        initialValues={{ 
          weaponValues: {
            minDamage: '', maxDamage: '',
            minCrit: '', maxCrit: '',
            minAps: '', maxAps: '',
            minDps: '', maxDps: '',
          },
          armourValues: {
            minArmour: '', maxArmour: '',
            minEvasion: '', maxEvasion: '',
            minEs: '', maxEs: '',
            minBlock: '', maxBlock: '',
          },
          reqValues: {
            minLvl: '', maxLvl: '',
            minStr: '', maxStr: '',
            minDex: '', maxDex: '',
            minInt: '', maxInt: '',
          },
        }}
        onSubmit={onSearchClickHandler} 
      >
        <Form>
          <div className={`search-bar search-advanced ${!filtersVisibility ? 'search-advanced-hidden' : ''}`}>
            <div className='search-advanced-items'>
              <div className='search-advanced-pane blue'>
                <CategoryFilter/>

                <Filter header="Weapon Filters" keyWord='weapons' filters={weaponsFilters}
                  filterVisibility={weaponsFilterVisibility} changeFilterVisibility={changeWeaponsFilterVisibility}
                />
                <Filter header="Armour Filters" keyWord='armour' filters={armourFilters}
                  filterVisibility={armourFilterVisibility} changeFilterVisibility={changeArmourFilterVisibility}
                />
                <Filter header="Requirements" keyWord='requirement' filters={requirementFilters}
                  filterVisibility={requirementFilterVisibility} changeFilterVisibility={changeRequirementFilterVisibility}
                />
              </div>
              <div className='search-advanced-pane brown'>
                <StatsFilter />
              </div>
            </div>
          </div>
          <Controls/> 
        </Form>
      </Formik>
    </div>
  )
})

export default SearchPanel;