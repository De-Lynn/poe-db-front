import { CategoryFilter } from './CategoryFilter';
import { FilterHeadersType } from './App';
import { getNamesPool, getNameShowMenu, getNameSelectedValue, getNameSearchValue } from './redux/searchPanel-selector';
import { useSelector } from 'react-redux';
import { Controls } from './Controls';
import { WeaponsFilters } from './WeaponsFilters';
import { ArmourFilters } from './ArmourFilters';
import { RequirementFilters } from './RequirementFilters';
import { StatsFilter } from './StatsFilter';
import NameDropdown from './NameDropdown';
import { setNameSearchValue, setNameSelectedValue, setNameShowMenu } from './redux/searchPanelReducer';
//import './SearchPanel.css'

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
  return (
    <div className='search-panel'>
      <div className='search-bar'>
        <div className='search-left'>
          <div className='multiselect search-select'> {/*tabindex="0" style="width: 100%" */}
            <div className='multiselect__select'></div>
            <div className='multiselect__tags'>
              <NameDropdown placeHolder='Search Items...' names={namesPool} isSearchable={true}
              setSearchValue={setNameSearchValue} setShowMenu={setNameShowMenu} setSelectedValue={setNameSelectedValue}
              showMenu={nameShowMenu} selectedValue={nameSelectedValu} searchValue={nameSearchValue}/>
            </div>
          </div>
        </div>
      </div>
      <div className='search-bar search-advanced'>
        <div className='search-advanced-items'>
          <div className='search-advanced-pane blue'>
            <CategoryFilter/>
            <WeaponsFilters/>
            <ArmourFilters/>
            <RequirementFilters/>
            <StatsFilter />
          </div>
          <div className='search-advanced-pane brown'></div>
        </div>
      </div>
      <div className='controls'>
        <Controls />
      </div>
    </div>
  )
}

export default SearchPanel;