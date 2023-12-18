import { ChangeEvent, useCallback, } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getSelectedStats, getSimilarStats, getStatsFiltersVisibility, getStatsState, getStatsToSelect } from "../../redux/statsFilter-selector"
import axios from "axios"
import { changeStatsFilterVisibility, setStats, setStatSearchValue, setStatSelectedValue, cleanSelectedStat, changeStatStatus, removeStat 
  } from "../../redux/statsFilterReducer"
import StatsDropdown from "../Dropdowns/StatsDropdown"
// import '../../styles/FilterGroupHeader.css';
// import '../../styles/FilterGroupBody.css'
import { FilterHeader } from "./FilterHeader"
import React from "react"

export const StatsFilter = React.memo((props: any) => {

  let statsFilterVisibility = useSelector(getStatsFiltersVisibility)
  let similarStats = useSelector(getSimilarStats)
  const statsToSelect = useSelector(getStatsToSelect)
  const statsState = useSelector(getStatsState)
  let selectedStats = useSelector(getSelectedStats)
  const dispatch = useDispatch()

  if (statsToSelect.length === 0) {
    axios.get('http://192.168.1.6:8080/api/stats').then(response => {
      dispatch(setStats(response.data.stats))
    })
    // axios.get('http://192.168.0.44:8080/api/stats').then(response => {
    //   dispatch(setStats(response.data.stats))
    // })
  }
  
  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeStatsFilterVisibility(e.currentTarget.checked))
  }, [])

  const onClickHandler = useCallback(() => {
    dispatch(cleanSelectedStat())
  }, [])

  return (
    <div className="filter-group expanded">
      <FilterHeader header="Stat Filters"
          checked={statsFilterVisibility} inputId="statsCheckbox" inputName="statsCheckbox" onChange={onChangeHandler}
          onClick={onClickHandler} btnName="statsButton" btnId="statsButton"
      />
      
      {statsFilterVisibility && 
        <div className="filter-group-body">
          {/* {console.log(selectedStats)} */}
          {selectedStats && selectedStats.map((s: any) => {
            const onStatChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
              dispatch(changeStatStatus(e.currentTarget.id))
            }
            const onRemoveStatClickHandler = (e: React.MouseEvent<HTMLElement>) => {
              dispatch(removeStat(e.currentTarget.id))
            }
            return (
              <div className="filter full-span">
                <span className="input-group-btn">
                  <input className="btn toggle-btn" type="checkbox" id={s.checkedId}
                    onChange={onStatChangeHandler} checked={s.status}></input>
                  <label htmlFor={s.checkedId}></label>
                </span>
                <span className="filter-body">
                  <div className="filter-title filter-title-clickable">
                    {/* <i className="mutate-type mutate-type-pseudo"></i> */}
                    <span>{s.stat}</span>
                  </div>
                  <span className="input-group-btn">
                    <button className="btn remove-btn" type="button" id={s.removeId}
                      onClick={onRemoveStatClickHandler}></button>
                    <label htmlFor={s.removeId}></label>
                  </span>
                </span>
              </div>
            )
          })}
          <div className='filter filter-padded'>
            <span className='filter-body'>
              <StatsDropdown placeHolder='+ Add Stat Filter' stats={statsToSelect} isSearchable={true}
                setSearchValue={setStatSearchValue} setSelectedValue={setStatSelectedValue}
                selectedValue={statsState.statSelectedValue} searchValue={statsState.statSearchValue}/>
            </span>
          </div>
        </div>
      }
    </div>
  )
})