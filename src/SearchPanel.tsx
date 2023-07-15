import { CategoryFilter } from './CategoryFilter';
import { FilterHeadersType } from './App';
import { getNamesPool, getNameShowMenu, getNameSelectedValue, getNameSearchValue, getFiltersValue } from './redux/searchPanel-selector';
import { useDispatch, useSelector } from 'react-redux';
import { Controls } from './Controls';
import { WeaponsFilters } from './WeaponsFilters';
import { ArmourFilters } from './ArmourFilters';
import { RequirementFilters } from './RequirementFilters';
import { StatsFilter } from './StatsFilter';
import NameDropdown from './NameDropdown';
import { changeFiltersValue, setNameSearchValue, setNameSelectedValue, setNameShowMenu } from './redux/searchPanelReducer';
import './SearchPanel.css'
import { Form, Formik } from 'formik';
import { getItemName, getItemsCategory, getItemsRarity, getItemsType } from './redux/activeFilters-selector';
import { getSelectedStatOrder } from './redux/statsFilter-selector';
import { getWeaponsFiltersValues } from './redux/weaponsFilter-selectors';
import { getArmourFiltersValues } from './redux/armourFilter-selectors';
import { getRequirementFiltersValues } from './redux/requirementFilter-selectors';
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
  
  const filterValues = useSelector(getFiltersValue)
  let dispatch = useDispatch()
  let category = useSelector(getItemsCategory)
  let type = useSelector(getItemsType)
  let rarity = useSelector(getItemsRarity)
  let stat_order = useSelector(getSelectedStatOrder)
  let name = useSelector(getItemName)
  let weaponsFiltersValues = useSelector(getWeaponsFiltersValues)
  let armourFiltersValues = useSelector(getArmourFiltersValues)
  let requirementFiltersValues = useSelector(getRequirementFiltersValues)
  let searchParams

  const onSearchClickHandler = (values: any, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}) => {
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2))
    //   setSubmitting(false)
    // }, 400)

    // dispatch(changeWeaponsFiltersValue(values))
    // dispatch(changeArmourFiltersValue(values))
    // dispatch(changeRequirementFiltersValue(values))
    dispatch(changeFiltersValue(values))
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)

    doRequest()
  }

  const doRequest = () => {
    let request = `http://localhost:8080/api/${category}?`
      // if(category ==='any') {
          searchParams = new URLSearchParams(rarity)
          request += `${searchParams.toString()}&`
          searchParams = new URLSearchParams(type)
          request += `${searchParams.toString()}&`
          searchParams = new URLSearchParams(filterValues)
          request += `${searchParams.toString()}&`
          // searchParams = new URLSearchParams(weaponsFiltersValues)
          // request += `${searchParams.toString()}&`
          // searchParams = new URLSearchParams(armourFiltersValues)
          // request += `${searchParams.toString()}&`
          // searchParams = new URLSearchParams(requirementFiltersValues)
          // request += `${searchParams.toString()}&`
          searchParams = new URLSearchParams(stat_order)
          request += `${searchParams.toString()}&`
          searchParams = new URLSearchParams(name)
          request += searchParams.toString()
          // // request += `${$.param(rarity)}`
          // // request += `${$.param(type)}`
          // request += `${(new URLSearchParams(values)).toString()}&`
          // // request += `${$.param(stat_order)}`
          // // request += `${$.param(name)}`
          // searchParams = new URLSearchParams(stat_order)
          // request += `${searchParams.toString()}&`
          // searchParams = new URLSearchParams(name)
          // request += searchParams.toString()
      // } 
      // if(category==='weapon') {
      //     searchParams = new URLSearchParams(rarity)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(type)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(weaponsFiltersValues)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(requirementFiltersValues)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(stat_order)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(name)
      //     request += searchParams.toString()
      // }
      // if(category==='armour') {
      //     searchParams = new URLSearchParams(rarity)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(type)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(armourFiltersValues)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(requirementFiltersValues)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(stat_order)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(name)
      //     request += searchParams.toString()
      // }
      // if(category==='jewellery') {
      //     searchParams = new URLSearchParams(rarity)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(type)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(requirementFiltersValues)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(stat_order)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(name)
      //     request += searchParams.toString()
      // }
      // if(category==='flask') {
      //     searchParams = new URLSearchParams(rarity)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(type)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(requirementFiltersValues)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(stat_order)
      //     request += `${searchParams.toString()}&`
      //     searchParams = new URLSearchParams(name)
      //     request += searchParams.toString()
      // }
      alert(request)
      
      // if (baseWeaponsResults.length !== 0 || uniqueWeaponsResults.length !== 0) {
      //     dispatch(cleanResults())
      // }
      axios.get(request).then(response => {
          // dispatch(setResults(response.data.baseWeapons))
          dispatch(setResults(response.data))
      })
      //debugger
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
          damageMinValue: '', damageMaxValue: '',
          critMinValue: '', critMaxValue: '',
          apsMinValue: '', apsMaxValue: '',
          dpsMinValue: '', dpsMaxValue: '',
          armourMinValue: '', armourMaxValue: '',
          evasionMinValue: '', evasionMaxValue: '',
          esMinValue: '', esMaxValue: '',
          blockMinValue: '', blockMaxValue: '',
          lvlMinValue: '', lvlMaxValue: '',
          strMinValue: '', strMaxValue: '',
          dexMinValue: '', dexMaxValue: '',
          intMinValue: '', intMaxValue: '',
      }}
        // validate={}  
        onSubmit={onSearchClickHandler} 
      >
        {/* {({isSubmitting}) => ( */}
          <Form>
            <div className='search-bar search-advanced'>
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
            <Controls/> {/*isSubmitting={isSubmitting}  onSearchClickHandler={onSearchClickHandler}*/}
          </Form>
        {/* )} */}
      </Formik>
    </div>
  )
}

export default SearchPanel;