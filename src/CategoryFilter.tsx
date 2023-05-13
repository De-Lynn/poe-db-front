import { ChangeEvent } from "react"
import { changeFilterVisibility, cleanCategoriesInputValue, setSearchValue, setSelectedValue, setShowMenu } from "./redux/categoryFilterReducer"
import { useSelector } from "react-redux"
import { getCategoryFiltersVisibility, getCategoryFilters } from "./redux/searchPanel-selector"
import { useDispatch } from "react-redux"
import { getWeaponsFilterVisibility } from "./redux/weaponsFilter-selectors"
import { getArmourFilterVisibility } from "./redux/armourFilter-selectors"
import { getRequirementFilterVisibility } from "./redux/requirementFilter-selectors"
import Dropdown from "./Dropdown"
import { getSearchValue, getSelectedValue, getShowMenu } from "./redux/categoryFilter-selectors"

type ContentType = {
  id: string
  option: string
  category: string
  type: string
}

type CategoryFilterPropsType = {
  id: string
  filterTitle: string
  content: Array<ContentType>
  state: boolean
  filterValue: string
  dispatch: (action: any) => void
  filterVisibility: boolean
}

export function CategoryFilter(props: any) {
  let categoryFilterVisibility = useSelector(getCategoryFiltersVisibility)
  let weaponsFilterVisibility = useSelector(getWeaponsFilterVisibility)
  let armourFilterVisibility = useSelector(getArmourFilterVisibility)
  let requirementFilterVisibility = useSelector(getRequirementFilterVisibility)
  const categoryFilters = useSelector(getCategoryFilters)
  const dispatch = useDispatch()

  // const onButtonClickHandler = () => {
  //   dispatch(changeCategoriesState(!categoryFilters.state, categoryFilters.id))
  // }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeFilterVisibility(e.currentTarget.checked))
    //console.log(categoryFilterVisibility, weaponsFilterVisibility, armourFilterVisibility)
  }

  const onClickHandler = () => {
    dispatch(cleanCategoriesInputValue('Any'))
  }

  return (
    <div>
      <div className='filter-group-header'>
        <span className='input-group-btn'>
          <input type="checkbox" checked={categoryFilterVisibility} name="categoryCheckbox"
                onChange={onChangeHandler}/>
        </span>
        <span className='filter-body'>
          <span className='filter-title filter-title-clickable'>
            <span>Type Filters</span>
          </span>
          <span className='input-group-btn'>
            <button className='btn remove-btn' title='Очистить группу фильтра'
                    onClick={onClickHandler} name="categoryButton">X</button>
          </span>
        </span>
      </div>
      {categoryFilterVisibility && categoryFilters.map((cf: any) => {
        // const onButtonClickHandler = () => {
        //   dispatch(changeCategoriesState(!cf.state, cf.id))
        // }
        return (
          <div className='filter filter-property full-span'>
            <span className='filter-body'>
              <div className='filter-title'>{cf.filterTitle}</div>
              <div className='multiselect filter-select'>
                <span>{cf.title}</span>
                {/* <input className='multiselect_tags' type="text" value={cf.filterValue} 
                  // value={props.filterValue}
                />
                <input className='multiselect_tags' type="text" value={newInputValue} 
                      onChange={onInputChangeHandler}/>
                <button className='multiselect_select' 
                      onClick={onButtonClickHandler}>Развернуть</button> */}
                <span><div className='multiselect_content-wrapper'>
                  {
                    // cf.state && 
                      <Dropdown placeHolder='Any' id={cf.id} options={cf.content} isSearchable={true}
                        //getShowMenu={getShowMenu} getSelectedValue={getSelectedValue} getSearchValue={getSearchValue}
                        setSearchValue={setSearchValue} setShowMenu={setShowMenu} setSelectedValue={setSelectedValue}
                        showMenu={cf.showMenu} selectedValue={cf.selectedValue} searchValue={cf.searchValue}
                      />
                      // <select name="" id="">
                      //   {
                      //     cf.content.map( (el: any) => {
                      //       const onSelectOptionClickHandler = () => {
                      //         dispatch(changeCategoriesInputValue(el.option, cf.id, el.category, el.type))
                      //         dispatch(changeCategoriesState(!cf.state, cf.id))
                      //       }
                      //       return (
                      //         <option className='multiselect_element' 
                      //                 onClick={onSelectOptionClickHandler} key={el.id}>
                      //           <span className='multiselect_option'>
                      //             <span>{el.option}</span>
                      //           </span>
                      //         </option>
                      //       )
                      //     })
                      //   }
                      // </select>
                  } 
                </div></span>
              </div>
            </span>
          </div>
        )
      })
        
      }
    </div>
  )
}