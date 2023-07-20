import { ChangeEvent } from "react"
import { changeFilterVisibility, cleanCategoriesInputValue, setSearchValue, setSelectedValue, setShowMenu } from "./redux/categoryFilterReducer"
import { useSelector } from "react-redux"
import { getCategoryFiltersVisibility, getCategoryFilters } from "./redux/searchPanel-selector"
import { useDispatch } from "react-redux"
import Dropdown from "./Dropdown"
import './FilterGroupHeader.css'
import './FilterGroupBody.css'
import { FilterHeader } from "./FilterHeader"

export function CategoryFilter(props: any) {
  let categoryFilterVisibility = useSelector(getCategoryFiltersVisibility)
  const categoryFilters = useSelector(getCategoryFilters)
  const dispatch = useDispatch()

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterVisibility(e.currentTarget.checked))
  }

  const onClickHandler = () => {
    dispatch(cleanCategoriesInputValue('Any'))
  }

  return (
    <div className='filter-group expanded'>
      <FilterHeader header="Type Filters"
        checked={categoryFilterVisibility} inputId="categoriesCheckbox" inputName="categoryCheckbox" onChange={onChangeHandler}
        onClick={onClickHandler} btnName="categoryButton" btnId="categoryButton"
      />
      {/* <div className='filter-group-header'>
        <div className="filter">
          <span className='input-group-btn'>
            <input className="btn toggle-btn" 
              type="checkbox" checked={categoryFilterVisibility} name="categoryCheckbox"
              onChange={onChangeHandler} id="categoriesCheckbox"/>
            <label htmlFor="categoriesCheckbox"></label>
          </span>
          <span className='filter-body'>
            <span className='filter-title filter-title-clickable'>
              <span>Type Filters</span>
            </span>
            <span className='input-group-btn'>
              <button className='btn remove-btn' title='Clear Filter Group'
                onClick={onClickHandler} name="categoryButton"
                id="categoryButton" type="button"/>
              <label htmlFor="categoryButton"></label>
            </span>
          </span>
        </div>
      </div> */}
      <div className="filter-group-body">
        {categoryFilterVisibility && categoryFilters.map((cf: any) => {
          return (
            <div className='filter filter-property full-span'>
              <span className='filter-body'>
                <div className='filter-title'>{cf.title}</div>
                <span className="sep"></span>
                {/* <div className='multiselect filter-select multiselect--above modified'> TODO +mofified when type is selected (any except ANY type) */}
                  {/* <div className="multiselect__select"></div> */}
                  {/* <div className="multiselect__tags"> */}
                    <Dropdown placeHolder='Any' id={cf.id} options={cf.content} isSearchable={true}
                      setSearchValue={setSearchValue} setShowMenu={setShowMenu} setSelectedValue={setSelectedValue}
                      showMenu={cf.showMenu} selectedValue={cf.selectedValue} searchValue={cf.searchValue}
                    />
                  {/* </div> */}
                {/* </div> */}
              </span>
            </div>
          )})
        }
      </div>
    </div>
  )
}

