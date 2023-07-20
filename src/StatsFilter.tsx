import { ChangeEvent, useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
// import { getWeaponsFilterVisibility } from "./redux/weaponsFilter-selectors"
// import { getArmourFilterVisibility } from "./redux/armourFilter-selectors"
// import { getRequirementFilterVisibility } from "./redux/requirementFilter-selectors"
import { getSimilarStats, getStatsFiltersVisibility, getStatsState, getStatsToSelect } from "./redux/statsFilter-selector"
import axios from "axios"
import { changeStatsFilterVisibility, setStats, setSimilarStats, setStatSearchValue, setStatSelectedValue, cleanSelectedStat } from "./redux/statsFilterReducer"
//import Dropdown from "./Dropdown"
import StatsDropdown from "./StatsDropdown"
import './FilterGroupHeader.css';
import './FilterGroupBody.css'
import { FilterHeader } from "./FilterHeader"

// type ContentType = {
//   id: string
//   option: string
//   category: string
//   type: string
// }

// type CategoryFilterPropsType = {
//   id: string
//   filterTitle: string
//   content: Array<ContentType>
//   state: boolean
//   filterValue: string
//   dispatch: (action: any) => void
//   filterVisibility: boolean
// }

export function StatsFilter(props: any) {
  let statsFilterVisibility = useSelector(getStatsFiltersVisibility)
  let similarStats = useSelector(getSimilarStats)
  // let weaponsFilterVisibility = useSelector(getWeaponsFilterVisibility)
  // let armourFilterVisibility = useSelector(getArmourFilterVisibility)
  // let requirementFilterVisibility = useSelector(getRequirementFilterVisibility)
  const statsToSelect = useSelector(getStatsToSelect)
  const statsState = useSelector(getStatsState)
  const dispatch = useDispatch()

  if (statsToSelect.length === 0) {
    axios.get('http://localhost:8080/api/stats').then(response => {
      // dispatch(setResults(response.data.baseWeapons))
      dispatch(setStats(response.data.stats))
    })
  }
  
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/api/stats?stat=${statsState.statSearchValue}`).then(response => {
  //     // dispatch(setResults(response.data.baseWeapons))
  //     dispatch(setStats(response.data.stats))
  //   })
  // }, [statsState.statSearchValue])
  
  // const onButtonClickHandler = () => {
  //   dispatch(changeCategoriesState(!categoryFilters.state, categoryFilters.id))
  // }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatsFilterVisibility(e.currentTarget.checked))
    //console.log(categoryFilterVisibility, weaponsFilterVisibility, armourFilterVisibility)
  }

  const onClickHandler = () => {
    dispatch(cleanSelectedStat())
  }

  return (
    <div className="filter-group expanded">
      <FilterHeader header="Stat Filters"
          checked={statsFilterVisibility} inputId="statsCheckbox" inputName="statsCheckbox" onChange={onChangeHandler}
          onClick={onClickHandler} btnName="statsButton" btnId="statsButton"
      />
      {/* <div className='filter-group-header'>
        <div className="filter">
          <span className='input-group-btn'>
            <input className="btn toggle-btn"
              type="checkbox" checked={statsFilterVisibility} name="statsCheckbox"
              onChange={onChangeHandler} id="statsCheckbox"/>
            <label htmlFor="statsCheckbox"></label>
          </span>
          <span className='filter-body'>
            <span className='filter-title filter-title-clickable'>
              <span>Stat Filters</span>
            </span>
          </span>
          <span className='input-group-btn'>
            <button className='btn remove-btn' title='Очистить группу фильтра'
                    onClick={onClickHandler} name="statsButton">X</button>
          </span>
        </div>
      </div> */}
      {statsFilterVisibility && //statsToSelect.map((s: any) => {
        // const onButtonClickHandler = () => {
        //   dispatch(changeCategoriesState(!cf.state, cf.id))
        // }
        //return (
          <div className="filter-group-body">
            <div className='filter filter-padded'>
              <span className='filter-body'>
                {/* <div className='filter-title'>{cf.filterTitle}</div> */}
                {/* <div className='multiselect filter-select filter-select-mutate'> */}
                  {/* <input className='multiselect_tags' type="text" value={cf.filterValue} 
                    // value={props.filterValue}
                  /> */}
                  {/* <input className='multiselect_tags' type="text" value={newInputValue} 
                        onChange={onInputChangeHandler}/> */}
                  {/* <button className='multiselect_select' 
                        onClick={onButtonClickHandler}>Развернуть</button> */}
                  
                  {/* <div className='multiselect__content-wrapper'> */}
                    {/* <select name="" id="">
                      {
                        statsToSelect.map( (s: any) => {
                          const onSelectOptionClickHandler = () => {
                            //dispatch(setActiveStat(s.stat_order))
                            axios.get(`http://localhost:8080/api/stats/${s.stat_order}`).then(response => {
                              dispatch(setSimilarStats(response.data.similarStats))
                            })
                          }
                          return (
                            <option className='multiselect_element' key={s.id}
                                    onClick={onSelectOptionClickHandler} 
                            >
                              <span className='multiselect_option'>{s.stat}</span>
                            </option>
                          )
                        })
                      }
                    </select> */}
                    <StatsDropdown placeHolder='+ Add Stat Filter' stats={statsToSelect} isSearchable={true}
                      setSearchValue={setStatSearchValue} setSelectedValue={setStatSelectedValue}
                      selectedValue={statsState.statSelectedValue} searchValue={statsState.statSearchValue}/>
                    {
                      // similarStats.length !== 0 && <div>{similarStats.map((s: any) => {
                      //   return (
                      //     <div>
                      //       <span>{s.type}  </span>
                      //       <span>"{s.stat}"</span>
                      //     </div>
                      //   )})}
                      // </div>
                    }
                    
                  {/* </div> */}
                {/* </div> */}
              </span>
            </div>
          </div>
          
        //)
      //})
      }
    </div>
  )
}