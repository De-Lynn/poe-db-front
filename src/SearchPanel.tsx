import { CategoryFilter } from './CategoryFilter';
import { FilterHeadersType } from './App';
import { getNamesPool, getNameShowMenu, getNameSelectedValue, getNameSearchValue, getFiltersVisibility} from './redux/searchPanel-selector';
import { useDispatch, useSelector } from 'react-redux';
import { Controls } from './Controls';
import { WeaponsFilters } from './WeaponsFilters';
import { ArmourFilters } from './ArmourFilters';
import { RequirementFilters } from './RequirementFilters';
import { StatsFilter } from './StatsFilter';
import NameDropdown from './NameDropdown';
import { setNameSearchValue, setNameSelectedValue, setNameShowMenu } from './redux/searchPanelReducer';
import './SearchPanel.css'
import { Form, Formik, useFormik } from 'formik';
import { getItemName, getItemsCategory, getItemsRarity, getItemsType } from './redux/activeFilters-selector';
import { getSelectedStatOrder } from './redux/statsFilter-selector';
import axios from 'axios';
import { setResults } from './redux/resultsReducer';
import { changeWeaponsFiltersValue } from './redux/weaponsFilterReducer';
import { changeArmourFiltersValue } from './redux/armourFilterReducer';
import { changeRequirementFiltersValue } from './redux/requirementFilterReducer';
import { useEffect } from 'react';

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

function SearchPanel(props: any) {
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

  const onSearchClickHandler = (values: any/*, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}*/) => {
    
    dispatch(changeWeaponsFiltersValue(values.weaponValues))
    dispatch(changeArmourFiltersValue(values.armourValues))
    dispatch(changeRequirementFiltersValue(values.reqValues))
    alert(JSON.stringify(values, null, 2))
    // setSubmitting(false)

    doRequest(values)
  }

  const doRequest = (values: any) => {
    let request = `http://192.168.1.9:8080/api/${category}?`
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
        //debugger
          dispatch(setResults(response.data))
      })
  }

  // useEffect(() => {
  //   doRequest() 
  // }, [filterValues])

  return (
    <div className='search-panel'>
      <div className='search-bar'>
        <div className='search-left'>
          {/* <div className='multiselect search-select'> tabindex="0" style="width: 100%" */}
            {/* <div className='multiselect__select'></div>
            <div className='multiselect__tags'> */}
              <NameDropdown placeHolder='Search Items...' names={namesPool} isSearchable={true}
              setSearchValue={setNameSearchValue} setShowMenu={setNameShowMenu} setSelectedValue={setNameSelectedValue}
              showMenu={nameShowMenu} selectedValue={nameSelectedValu} searchValue={nameSearchValue}/>
            {/* </div> */}
          {/* </div> */}
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
          }
        }}
        // validate={}  
        onSubmit={onSearchClickHandler} 
      >
        {/* {({isSubmitting}) => ( */}
          <Form>
            {/* {filtersVisibility &&  */}
              <div className={filtersVisibility ? 'search-bar search-advanced' : 'search-bar search-advanced search-advanced-hidden'}>
                <div className='search-advanced-items'>
                  <div className='search-advanced-pane blue'>
                    <CategoryFilter/>
                    <WeaponsFilters/>
                    <ArmourFilters/>
                    <RequirementFilters/>
                  </div>
                  <div className='search-advanced-pane brown'>
                    <StatsFilter />
                  </div>
                </div>
              </div>
            {/* } */}
            <Controls/> 
          </Form>
        {/* )} */}
      </Formik>
    </div>
  )
}

export default SearchPanel;