import { ChangeEvent } from "react"
import { changeFilterVisibility, cleanCategoriesInputValue, setSearchValue, setSelectedValue, setShowMenu } from "./redux/categoryFilterReducer"
import { useSelector } from "react-redux"
import { getCategoryFiltersVisibility, getCategoryFilters } from "./redux/searchPanel-selector"
import { useDispatch } from "react-redux"
import Dropdown from "./Dropdown"
import './FilterGroupHeader.css'
import './FilterGroupBody.css'

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
    <div>
      <div className='filter-group-header'>
        <div className="filter">
          <span className='input-group-btn'>
            <input type="checkbox" checked={categoryFilterVisibility} name="categoryCheckbox"
                  onChange={onChangeHandler}/>
          </span>
          <span className='filter-body'>
            <span className='filter-title filter-title-clickable'>
              <span>Type Filters</span>
            </span>
            <span className='input-group-btn'>
              <button className='btn remove-btn' title='Clear Filter Group'
                      onClick={onClickHandler} name="categoryButton">X</button>
            </span>
          </span>
        </div>
      </div>
      <div className="filter-group-body">
        {categoryFilterVisibility && categoryFilters.map((cf: any) => {
          return (
            <div className='filter filter-property full-span'>
              <span className='filter-body'>
                <div className='filter-title'>{cf.filterTitle}</div>
                <div className='multiselect filter-select'>
                  <span>{cf.title}</span>
                  <span><div className='multiselect_content-wrapper'>
                    {
                      <Dropdown placeHolder='Any' id={cf.id} options={cf.content} isSearchable={true}
                        setSearchValue={setSearchValue} setShowMenu={setShowMenu} setSelectedValue={setSelectedValue}
                        showMenu={cf.showMenu} selectedValue={cf.selectedValue} searchValue={cf.searchValue}
                      />
                    } 
                  </div></span>
                </div>
              </span>
            </div>
          )})
        }
      </div>
    </div>
  )
}