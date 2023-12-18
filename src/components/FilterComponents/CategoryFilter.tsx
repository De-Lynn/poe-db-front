import React, { ChangeEvent, useCallback} from "react"
import { changeFilterVisibility, cleanCategoriesInputValue, setSearchValue, setSelectedValue, setShowMenu } from "../../redux/categoryFilterReducer"
import { useSelector } from "react-redux"
import { getCategoryFiltersVisibility, getCategoryFilters } from "../../redux/searchPanel-selector"
import { useDispatch } from "react-redux"
import Dropdown from "../Dropdowns/Dropdown"
// import '../../styles/FilterGroupHeader.css'
// import '../../styles/FilterGroupBody.css'
import { FilterHeader } from "./FilterHeader"

export const CategoryFilter = React.memo((props: any) => {
  let categoryFilterVisibility = useSelector(getCategoryFiltersVisibility)
  const categoryFilters = useSelector(getCategoryFilters)
  const dispatch = useDispatch()

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterVisibility(e.currentTarget.checked))
  }, [])

  const onClickHandler = useCallback(() => {
    dispatch(cleanCategoriesInputValue('Any'))
  }, [])

  return (
    <div className='filter-group expanded'>
      <FilterHeader header="Type Filters"
        checked={categoryFilterVisibility} inputId="categoriesCheckbox" inputName="categoryCheckbox" onChange={onChangeHandler}
        onClick={onClickHandler} btnName="categoryButton" btnId="categoryButton"
      />
      <div className="filter-group-body">
        {categoryFilterVisibility && categoryFilters.map((cf: any) => {
          return (
            <div className='filter filter-property full-span'>
              <span className='filter-body'>
                <div className='filter-title'>{cf.title}</div>
                <span className="sep"></span>
                  <Dropdown placeHolder='Any' id={cf.id} options={cf.content} isSearchable={true}
                    setSearchValue={setSearchValue} setShowMenu={setShowMenu} setSelectedValue={setSelectedValue}
                    showMenu={cf.showMenu} selectedValue={cf.selectedValue} searchValue={cf.searchValue}
                  />
              </span>
            </div>
          )})
        }
      </div>
    </div>
  )
})

